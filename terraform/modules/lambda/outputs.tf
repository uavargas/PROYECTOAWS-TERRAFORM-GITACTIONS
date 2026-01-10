# modules/lambda/outputs.tf

output "lambda_function_name" {
  description = "Api de la función Lambda creada"
  value       = aws_lambda_function.quiz_lambda.function_name
}

output "lambda_invoke_arn" {
  description = "El ARN de invocación para que el API Gateway pueda disparar la función"
  value       = aws_lambda_function.quiz_lambda.invoke_arn
}