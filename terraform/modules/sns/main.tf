# 1. Crear el Topic (El canal)
resource "aws_sns_topic" "user_updates" {
  name = var.sns_topic_name

  tags = {
    Project = var.proyecto_tag
  }
}

# 2. Crear la Suscripción (El destino: tu email)
resource "aws_sns_topic_subscription" "user_updates_sqs_target" {
  topic_arn = aws_sns_topic.user_updates.arn
  protocol  = "email"
  endpoint  = var.admin_email
}