# ---------------------------------------------------------
# BLOQUE 1: CONFIGURACIÓN INICIAL
# Aquí le definimos a Terraform qué "proveedores" vamos a hablar (AWS)
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
  region = var.aws_region # Usamos la variable definida en variables.tf
}