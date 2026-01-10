# 1. Bucket S3
resource "aws_s3_bucket" "mi_web" {
  bucket = var.bucket_name
}

# 2. Configuración Web
resource "aws_s3_bucket_website_configuration" "sitio" {
  bucket = aws_s3_bucket.mi_web.id
  index_document { suffix = "index.html" }
}

# 3. Bloqueo de acceso público (Recomendado para CloudFront)
resource "aws_s3_bucket_public_access_block" "publico" {
  bucket                  = aws_s3_bucket.mi_web.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# 4. Origen Access Control (OAC) para CloudFront
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "oac_${var.bucket_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# 5. Distribución de CloudFront
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.mi_web.bucket_regional_domain_name
    origin_id                = "S3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"
    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# 6. Política del Bucket (Permite entrada solo a CloudFront)
resource "aws_s3_bucket_policy" "permitir_acceso_cloudfront" {
  bucket = aws_s3_bucket.mi_web.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = "s3:GetObject"
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.mi_web.arn}/*"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}