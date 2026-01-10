import json
import boto3
import os
import time

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    sns = boto3.client('sns')
    
    table = dynamodb.Table(os.environ['TABLE_NAME'])
    # Verificamos que la variable exista para evitar errores
    sns_topic_arn = os.environ.get('SNS_TOPIC_ARN')
    
    try:
        body = json.loads(event.get('body', '{}'))
        user_id = body.get('userId', 'Anonimo')
        score = body.get('score', 0)
        
        # 1. GUARDAR EN DYNAMODB (Esto ya te funciona)
        table.put_item(Item={
            'UserId': user_id,
            'Timestamp': int(time.time()),
            'Score': score
        })

        # 2. INTENTAR ENVIAR CORREO (Aislado para que no rompa la función)
        if sns_topic_arn:
            try:
                sns.publish(
                    TopicArn=sns_topic_arn,
                    Message=f"¡Nuevo registro!\nUsuario: {user_id}\nPuntaje: {score}",
                    Subject="Notificación CodeQuiz"
                )
                print("Correo enviado exitosamente")
            except Exception as sns_err:
                # Si falla el correo, solo se imprime en los logs de AWS
                print(f"Error al enviar el correo (SNS): {sns_err}")

        # 3. RESPUESTA AL NAVEGADOR (Siempre exitosa si llegó aquí)
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            'body': json.dumps({'message': '¡Puntaje guardado!'})
        }

    except Exception as e:
        print(f"Error general: {str(e)}")
        return {
            'statusCode': 500,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': json.dumps({'error': 'Error en el servidor', 'detalle': str(e)})
        }