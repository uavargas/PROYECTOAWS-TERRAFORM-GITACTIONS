resource "aws_dynamodb_table" "quiz_scores" {
  name           = var.table_name
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "UserId"    # Partition Key (Identificador de usuario)
  range_key      = "Timestamp" # Sort Key (Para permitir múltiples partidas por usuario)

  # Debemos declarar AMBOS atributos que usamos como llaves
  attribute {
    name = "UserId"
    type = "S" # String (email o username)
  }

  attribute {
    name = "Timestamp"
    type = "N" # Number (fecha/hora en formato Unix)
  }

  tags = {
    Name    = var.table_name
    Project = var.proyecto_tag
  }
}