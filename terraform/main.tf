# ---------------------------------------------------------
# BLOQUE 1: CONFIGURACIÓN INICIAL
# Aquí le decimos a Terraform qué "idioma" vamos a hablar (AWS)
# ---------------------------------------------------------
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "us-east-1"   # La región "base" de Amazon (Virginia)
  profile = "terraform"   # Tu perfil configurado en la terminal
}

# ---------------------------------------------------------
# BLOQUE 2: EL ALMACÉN (S3)
# Aquí guardamos tus archivos HTML, CSS y JS.
# ---------------------------------------------------------
resource "aws_s3_bucket" "mi_web" {
  # IMPORTANTE: ¡Este nombre debe ser único en todo el mundo!
  # Cambia "tu-nombre" por tu nombre real o un apodo.
  bucket = "codequiz-web" 
}

# Le dice a S3: "Oye, compórtate como un servidor web, busca index.html"
resource "aws_s3_bucket_website_configuration" "sitio" {
  bucket = aws_s3_bucket.mi_web.id

  index_document {
    suffix = "index.html"
  }
}

# ---------------------------------------------------------
# BLOQUE 3: SEGURIDAD (CERRANDO EL S3)
# Al usar CloudFront, ya NO necesitamos que el S3 sea público.
# Aquí cerramos todas las puertas del S3 para que nadie entre directo.
# ---------------------------------------------------------
resource "aws_s3_bucket_public_access_block" "publico" {
  bucket = aws_s3_bucket.mi_web.id

  block_public_acls       = true  # CORREGIDO: Bloquear listas de acceso
  block_public_policy     = true  # CORREGIDO: Bloquear políticas públicas nuevas
  ignore_public_acls      = true  # CORREGIDO: Ignorar listas públicas
  restrict_public_buckets = true  # CORREGIDO: Restringir acceso al bucket
}

# ---------------------------------------------------------
# BLOQUE 4: EL PERMISO ESPECIAL (LA LLAVE DE CLOUDFRONT)
# Aunque cerramos el S3 arriba, aquí le damos permiso EXCLUSIVO
# a CloudFront para entrar. Es como darle una llave al conserje.
# ---------------------------------------------------------
resource "aws_s3_bucket_policy" "permitir_acceso_cloudfront" {
  bucket = aws_s3_bucket.mi_web.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipalReadOnly"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com" # Solo CloudFront puede pasar
        }
        Action   = "s3:GetObject" # Solo puede LEER archivos
        Resource = "${aws_s3_bucket.mi_web.arn}/*"
        Condition = {
          StringEquals = {
            # Solo ESTA distribución específica puede entrar (nadie más)
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

# ---------------------------------------------------------
# BLOQUE 5: CONFIGURACIÓN DE CLOUDFRONT (EL DISTRIBUIDOR)
# ---------------------------------------------------------

# A. Creamos la "Identidad" (OAC) para conectar S3 y CloudFront de forma segura
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "s3_oac_${aws_s3_bucket.mi_web.bucket}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# B. La Distribución (El servidor global)
resource "aws_cloudfront_distribution" "s3_distribution" {
  
  # 1. Origen: ¿De dónde saco los archivos? Del S3.
  origin {
    domain_name              = aws_s3_bucket.mi_web.bucket_regional_domain_name
    origin_id                = "S3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html" # Archivo principal

  # 2. Comportamiento: ¿Cómo entrego los archivos?
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https" # ¡Seguridad! Fuerza el candadito verde
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # 3. Restricciones Geográficas (Opcional, aquí está abierto a todos)
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # 4. Certificado SSL (HTTPS)
  viewer_certificate {
    cloudfront_default_certificate = true
  }

  # CORRECCIÓN DE AHORRO:
  # PriceClass_100 usa solo nodos en USA y Europa (Más barato)
  # Si quitas esto, usa nodos en todo el mundo (Más caro)
  price_class = "PriceClass_100"
}

# ---------------------------------------------------------
# BLOQUE 6: RESULTADO FINAL
# Nos muestra la URL bonita y segura al terminar
# ---------------------------------------------------------
output "url_cloudfront" {
  description = "La URL segura (HTTPS) de tu sitio web"
  value       = "https://${aws_cloudfront_distribution.s3_distribution.domain_name}"
}