import json
import boto3
import os
import time

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['TABLE_NAME'])
    
    try:
        # Extraer datos del cuerpo de la petición
        body = json.loads(event.get('body', '{}'))
        user_id = body.get('userId', 'Anonimo')
        score = body.get('score', 0)
        
        # Guardar en DynamoDB
        table.put_item(Item={
            'UserId': user_id,
            'Timestamp': int(time.time()),
            'Score': score
        })

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            'body': json.dumps({'message': 'Puntaje guardado exitosamente'})
        }
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Error interno del servidor'})
        }