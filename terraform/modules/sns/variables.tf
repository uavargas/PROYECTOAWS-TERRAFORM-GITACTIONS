variable "sns_topic_name" {
  description = "Notificación SNS"
  type        = string
}

variable "admin_email" {
  description = "Correo electrónico que recibirá las notificaciones"
  type        = string
}

variable "proyecto_tag" {
  type        = string
}