# 1. Comprimir el código Python que está en la subcarpeta
data "archive_file" "lambda_zip" {
  type        = "zip"
  # source_dir apunta a la carpeta donde está el index.py
  source_dir  = "${path.module}/lambda_function" 
  output_path = "${path.module}/lambda_function_payload.zip"
}

# 2. El Rol de IAM para la Lambda
resource "aws_iam_role" "iam_for_lambda" {
  name = "role_codequiz_lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}

# 3. La Función Lambda usando el ZIP creado arriba
resource "aws_lambda_function" "quiz_lambda" {
  filename      = data.archive_file.lambda_zip.output_path
  function_name = "codequiz-processor"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.lambda_handler" # "index" es el nombre del archivo .py
  runtime       = "python3.13"

  source_code_hash = data.archive_file.lambda_zip.output_base64sha256

  environment {
    variables = {
      TABLE_NAME    = var.table_name
      SNS_TOPIC_ARN = var.sns_topic_arn
    }
  }

  
}
resource "aws_iam_role_policy" "lambda_policy" {
  name = "lambda_permissions"
  role = aws_iam_role.iam_for_lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = ["dynamodb:PutItem"],
        Effect   = "Allow",
        Resource = var.table_arn
      },
      {
        Action   = ["sns:Publish"],
        Effect   = "Allow",
        Resource = var.sns_topic_arn
      },
      {
        Action   = ["logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents"],
        Effect   = "Allow",
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}