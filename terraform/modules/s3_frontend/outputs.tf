# 1. La URL de CloudFront
output "cloudfront_url" {
  description = "Dominio de la distribución de CloudFront"
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}

# 2. El ARN del bucket (Lo necesitaremos luego para los permisos de la Lambda)
output "bucket_arn" {
  description = "El ARN del bucket de S3"
  value       = aws_s3_bucket.mi_web.arn
}

# 3. El ID del bucket
output "bucket_id" {
  description = "El nombre/ID del bucket"
  value       = aws_s3_bucket.mi_web.id
}