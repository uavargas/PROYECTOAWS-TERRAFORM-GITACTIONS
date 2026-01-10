output "table_name" {
  value = aws_dynamodb_table.quiz_scores.name
}

output "table_arn" {
  value = aws_dynamodb_table.quiz_scores.arn
}