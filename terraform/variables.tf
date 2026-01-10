variable "aws_region" {
  description = "Región de AWS"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Nombre para el bucket del frontend"
  type        = string
}

variable "admin_email" {
  description = "Email para alertas de SNS"
  type        = string
}
variable "sns_topic_name" {
  type    = string
  default = "codequiz-notifications"
}

variable "table_name" { 
  type = string
}


variable "proyecto_tag" {
  description = "Sistema de evaluación de conocimientos en tecnología."
  type        = string
  default     = "CodeQuiz-AWS" #valor por defecto
}

variable "api_name" {
  type = string
}
