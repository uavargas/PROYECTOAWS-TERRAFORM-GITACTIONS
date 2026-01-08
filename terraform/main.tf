# Configuración del Proveedor
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "terraform" # User Profile
}

# 1. Creación del Bucket S3
resource "aws_s3_bucket" "mi_web" {
  
  bucket = "codequiz-web" 
}

# 2. Configuración para sitio web estático
resource "aws_s3_bucket_website_configuration" "sitio" {
  bucket = aws_s3_bucket.mi_web.id 

  index_document {
    suffix = "index.html"
  }
}

# 3. Desbloquear acceso público al bucket
resource "aws_s3_bucket_public_access_block" "publico" {
  bucket = aws_s3_bucket.mi_web.id 

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# 4. Política de lectura para que el mundo pueda acceder
resource "aws_s3_bucket_policy" "permitir_acceso" {
  bucket = aws_s3_bucket.mi_web.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.mi_web.arn}/*"
      },
    ]
  })
  
  # Esto asegura que primero se abra el candado (public_access_block) y luego se ponga la regla
  depends_on = [aws_s3_bucket_public_access_block.publico]
}