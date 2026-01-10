
# Invocación del módulo de frontend
module "s3_frontend" {
  source      = "./modules/s3_frontend"
  bucket_name = var.bucket_name # Pasamos la variable de la raíz al módulo
}

# invocacion del modulo dynamodb
module "dynamodb" {
  source     = "./modules/dynamodb"
  table_name = var.table_name
  proyecto_tag = var.proyecto_tag
}

# invocacion del modulo sns
module "sns" {
  source         = "./modules/sns"
  sns_topic_name = var.sns_topic_name
  admin_email    = var.admin_email
  proyecto_tag   = var.proyecto_tag
}

# invocacion del modulo lambda

module "lambda" {
  source        = "./modules/lambda"
  table_name    = module.dynamodb.table_name
  table_arn     = module.dynamodb.table_arn
  sns_topic_arn = module.sns.sns_topic_arn
  proyecto_tag  = var.proyecto_tag 
}
# invocacion del modulo api gateway
module "api_gateway" {
  source               = "./modules/api_gateway"
  api_name             = var.api_name             # Viene de tfvars
  proyecto_tag         = var.proyecto_tag         # Viene de tfvars
  
  # Estos vienen directamente del módulo Lambda que ya creamos
  lambda_function_name = module.lambda.lambda_function_name
  lambda_invoke_arn    = module.lambda.lambda_invoke_arn
}