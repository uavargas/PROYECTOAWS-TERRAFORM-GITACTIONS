// Base de datos de preguntas
const preguntas = {
  logica: [
    {
      pregunta: "¿Qué es una variable?",
      opciones: [
        "Un espacio en la memoria del computador para almacenar datos",
        "Un objeto",
        "Función",
        "Un Loop",
      ],
      correcta: 0,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué estructura se usa para tomar decisiones en programación?",
      opciones: ["Bucle for", "Condicional if", "Función", "Arreglo"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "Selecciona los tipos de datos numéricos en programación:",
      opciones: ["int", "float", "string", "boolean", "double"],
      correcta: [0, 1, 4],
      dificultad: "medio",
      tipo: "multiple",
    },
    {
      pregunta: "¿Qué es un bucle?",
      opciones: [
        "Una función",
        "Una estructura que repite código",
        "Un tipo de dato",
        "Un operador",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "Selecciona las estructuras de control de flujo:",
      opciones: ["if-else", "for", "variable", "while", "constante"],
      correcta: [0, 1, 3],
      dificultad: "medio",
      tipo: "multiple",
    },
    {
      pregunta: "¿Qué es un algoritmo?",
      opciones: [
        "Un lenguaje de programación",
        "Un conjunto de pasos para resolver un problema",
        "Una base de datos",
        "Un tipo de variable",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un arreglo (array)?",
      opciones: [
        "Una colección de elementos del mismo tipo",
        "Un tipo de función",
        "Un operador lógico",
        "Una condición",
      ],
      correcta: 0,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué hace el operador '==' en programación?",
      opciones: ["Asignación", "Comparación de igualdad", "Suma", "División"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es una función?",
      opciones: [
        "Un tipo de dato",
        "Un bloque de código reutilizable",
        "Un error en el código",
        "Una variable global",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta:
        "¿Qué tipo de bucle se ejecuta mientras una condición sea verdadera?",
      opciones: [
        "Bucle for",
        "Bucle while",
        "Bucle do-while",
        "Bucle infinito",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un operador lógico?",
      opciones: ["&&", "+", "=", "/"],
      correcta: 0,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un comentario en programación?",
      opciones: [
        "Un error en el código",
        "Texto ignorado por el compilador",
        "Una función",
        "Una variable",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué hace el operador '%' en programación?",
      opciones: [
        "Multiplicación",
        "División",
        "Módulo (residuo de la división)",
        "Suma",
      ],
      correcta: 2,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es la recursividad?",
      opciones: [
        "Un tipo de bucle",
        "Una función que se llama a sí misma",
        "Un error de sintaxis",
        "Una estructura de datos",
      ],
      correcta: 1,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un parámetro en una función?",
      opciones: [
        "Un valor que la función recibe",
        "Un valor que la función retorna",
        "Un tipo de bucle",
        "Un operador",
      ],
      correcta: 0,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un bucle 'do-while'?",
      opciones: [
        "Un bucle que se ejecuta al menos una vez",
        "Un bucle que no se ejecuta nunca",
        "Un bucle infinito",
        "Un bucle que solo funciona con números",
      ],
      correcta: 0,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un operador ternario?",
      opciones: [
        "Un operador que toma tres operandos",
        "Un operador lógico",
        "Un tipo de bucle",
        "Una función",
      ],
      correcta: 0,
      dificultad: "medio",
      tipo: "simple",
    },
  ],
  java: [
    {
      pregunta: "¿Qué es Java?",
      opciones: [
        "Un sistema operativo",
        "Un lenguaje de programación orientado a objetos",
        "Un navegador web",
        "Una base de datos",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "Selecciona las características de Java:",
      opciones: [
        "Orientado a objetos",
        "Compilado e interpretado",
        "Débilmente tipado",
        "Multiplataforma",
        "Solo para web",
      ],
      correcta: [0, 1, 3],
      dificultad: "intermedia",
      tipo: "multiple",
    },
    {
      pregunta: "¿Cuál es la extensión de un archivo compilado en Java?",
      opciones: [".java", ".class", ".exe", ".jar"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué palabra clave se usa para definir una clase en Java?",
      opciones: ["function", "define", "class", "object"],
      correcta: 2,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué método es el punto de entrada de un programa Java?",
      opciones: ["start()", "main()", "run()", "init()"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
  ],
  // AWS Questions
  aws: [
    /* Pregunta 1*/

    {
      pregunta:
        "Una aplicación se ejecuta en una instancia de EC2 en una VPC. La aplicación procesa los registros almacenados en un bucket S3. " +
        "La instancia EC2 necesita acceder al bucket S3 sin conexión a internet. ¿Qué solución proporcionará conectividad de red privada a Amazon S3?",
      opciones: [
        "Cree un punto de enlace de VPC de puerta de enlace para el bucket de S3.",
        "Transmita los registros a Amazon CloudWatch Logs. Exporte los registros al bucket de S3.",
        "Cree un perfil de instancia en Amazon EC2 para permitir el acceso a S3.",
        "Cree una API de Amazon API Gateway con un enlace privado para acceder al punto de enlace de S3.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 2*/
    {
      pregunta:
        "Una empresa tiene una aplicacion que se ejecuta en una instancia EC2 y utiliza una base de datos de Amazon Aurora. Las instancias EC2 se conectan a la base de datos mediante nombres de usuario y contraseñas " +
        "que se almacenan localmente en un archivo. La empresa quiere minimizar la sobrecarga operativa de la administracion de credenciales. ¿Que debe hacer un arquitecto de soluciones para lograr este objetivo?",
      opciones: [
        "Utilice AWS Secrets Manager. Active la rotación automática.",
        "Utilice el almacén de parámetros de AWS Systems Manager. Active la rotación automática.",
        "Cree un bucket de Amazon S3 para almacenar objetos cifrados con una clave de cifrado de AWS Key Management Service (AWS KMS). Migre el archivo de credenciales al bucket de S3. Apunte la aplicación al bucket de S3.",
        "Cree un volumen cifrado de Amazon Elastic Block Store (Amazon EBS) para cada instancia EC2. Adjunte el nuevo volumen de EBS a cada instancia EC2. Migre el archivo de credenciales al nuevo volumen de EBS. Apunte la aplicación al nuevo volumen de EBS.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 3*/
    {
      pregunta:
        "Una empresa está lanzando una nueva aplicación y mostrará las métricas de la aplicación en un panel de Amazon CloudWatch. El gerente de producto de la empresa necesita acceder a este tablero periódicamente. El gerente de producto no tiene una cuenta de AWS. Un arquitecto de soluciones debe proporcionar acceso al gerente de producto siguiendo el principio de privilegios mínimos.",
      opciones: [
        "Comparta el panel desde la consola de CloudWatch. Ingrese la dirección de correo electrónico del gerente de producto y complete los pasos para compartir. Proporcione un vínculo para compartir para el panel al gerente de producto.",
        "Cree un usuario de IAM específicamente para el gerente de producto. Adjunte la política administrada de AWS CloudWatchReadOnlyAccess al usuario. Comparta las nuevas credenciales de inicio de sesión con el gerente de producto. Comparta la URL del navegador del panel correcto con el gerente de producto.",
        "Cree un usuario de IAM para los empleados de la empresa. Adjunte la política administrada de AWS ViewOnlyAccess al usuario de IAM. Comparta las nuevas credenciales de inicio de sesión con el gerente de producto. Pida al administrador de productos que vaya a la consola de CloudWatch y localice el panel por su nombre en la sección Paneles",
        "Implemente un servidor bastión en una subred pública. Cuando el gerente de producto requiera acceso al panel, inicie el servidor y comparta las credenciales RDP. En el servidor bastión, asegúrese de que el navegador esté configurado para abrir la URL del panel con credenciales de AWS almacenadas en caché que tengan los permisos adecuados para ver el panel.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 4*/
    {
      pregunta:
        "Una empresa está migrando aplicaciones a AWS. Las aplicaciones se implementan en diferentes cuentas. La empresa administra las cuentas de forma centralizada mediante AWS Organizations. El equipo de seguridad de la empresa necesita una solución de inicio de sesión único (SSO) en todas las cuentas de la empresa. La empresa debe seguir administrando los usuarios y grupos en su Microsoft Active Directory autoadministrado local." +
        "¿Qué solución cumplirá estos requisitos?",
      opciones: [
        "Habilite AWS Single Sign-On (AWS SSO) desde la consola de AWS SSO. Cree una confianza de bosque unidireccional o una confianza de dominio unidireccional para conectar Microsoft Active Directory autoadministrado de la empresa con AWS SSO mediante AWS Directory Service para Microsoft Active Directory.",
        "Habilite AWS Single Sign-On (AWS SSO) desde la consola de AWS SSO. Cree una confianza de bosque bidireccional para conectar Microsoft Active Directory autoadministrado de la empresa con AWS SSO mediante AWS Directory Service para Microsoft Active Directory.",
        "Utilice AWS Directory Service. Cree una relación de confianza bidireccional con el Microsoft Active Directory autoadministrado de la empresa.",
        "Implemente un proveedor de identidades (IdP) local. Habilite AWS Single Sign-On (AWS SSO) desde la consola de AWS SSO.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 5*/

    {
      pregunta:
        "Una empresa necesita almacenar sus registros contables en Amazon S3. Los registros deben ser accesibles de inmediato durante 1 año y luego deben archivarse durante 9 años adicionales. Nadie en la empresa, incluidos los usuarios administrativos y los usuarios raíz, puede eliminar los registros durante todo el período de 10 años. Los registros deben almacenarse con la máxima resistencia." +
        "¿Qué solución cumplirá estos requisitos?",
      opciones: [
        "Almacene los registros en S3 Glacier durante todo el período de 10 años. Utilice una directiva de control de acceso para denegar la eliminación de los registros durante un período de 10 años.",
        "Almacene los registros mediante S3 Intelligent-Tiering. Utilice una política de IAM para denegar la eliminación de los registros. Después de 10 años, cambie la política de IAM para permitir la eliminación.",
        "Utilice una política de ciclo de vida de S3 para realizar la transición de los registros de S3 Standard a S3 Glacier Deep Archive después de 1 año. Utilice S3 Object Lock en modo de cumplimiento durante un período de 10 años",
        "Utilice una política de ciclo de vida de S3 para realizar la transición de los registros de S3 Standard a S3 One Zone-Infrequent Access (S3 One Zone-IA) después de 1 año. Utilice S3 Object Lock en modo de gobernanza durante un período de 10 años",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 6*/
    {
      pregunta:
        "La aplicación HTTP de una empresa está detrás de un equilibrador de carga de red (NLB). El grupo de destino del NLB está configurado para utilizar un grupo de Amazon EC2 Auto Scaling con varias instancias EC2 que ejecutan el servicio web." +
        "La compañía nota que el NLB no detecta errores HTTP para la aplicación. Estos errores requieren un reinicio manual de las instancias EC2 que ejecutan el servicio web. La empresa necesita mejorar la disponibilidad de la aplicación sin escribir scripts o código personalizados." +
        "¿Qué debe hacer un arquitecto de soluciones para cumplir con estos requisitos?",
      opciones: [
        "Habilite las comprobaciones de estado HTTP en el NLB, proporcionando la URL de la aplicación de la empresa.",
        "Agregue un trabajo cron a las instancias EC2 para comprobar los registros de la aplicación local una vez por minuto. Si se detectan errores HTTP. La aplicación se reiniciará.",
        "Reemplace el NLB por un equilibrador de carga de aplicaciones. Habilite las comprobaciones de estado HTTP proporcionando la URL de la aplicación de la empresa. Configure una acción de Auto Scaling para reemplazar las instancias en mal estado.",
        "Cree una alarma de Amazon Cloud Watch que monitoree la métrica UnhealthyHostCount para el NLB. Configure una acción de Auto Scaling para reemplazar las instancias incorrectas cuando la alarma esté en estado ALARM.",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 7*/
    {
      pregunta:
        "Una empresa recibe 10 TB de datos de instrumentación cada día de varias máquinas ubicadas en una sola fábrica. Los datos consisten en archivos JSON almacenados en una red de área de almacenamiento (SAN) en un centro de datos local ubicado dentro de la fábrica. La compañía quiere enviar estos datos a Amazon S3, donde se puede acceder a ellos mediante varios sistemas adicionales que proporcionan análisis críticos casi en tiempo real. Una transferencia segura es importante porque los datos se consideran confidenciales." +
        "¿Qué solución ofrece la transferencia de datos MÁS fiable?",
      opciones: [
        "AWS DataSync a través de Internet pública",
        "AWS DataSync a través de AWS Direct Connect.",
        "AWS Database Migration Service (AWS DMS) a través de Internet pública.",
        "AWS Database Migration Service (AWS DMS) a través de AWS Direct Connect.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 8*/
    {
      pregunta:
        "Una empresa utiliza una base de datos SQL para almacenar datos de películas a los que se puede acceder públicamente. La base de datos se ejecuta en una instancia de base de datos Single-AZ de Amazon RDS. Un script ejecuta consultas a intervalos aleatorios cada día para registrar el número de películas nuevas que se han agregado a la base de datos. El script debe informar un total final durante el horario comercial." +
        "El equipo de desarrollo de la empresa observa que el rendimiento de la base de datos es inadecuado para las tareas de desarrollo cuando se ejecuta el script. Un arquitecto de soluciones debe recomendar una solución para resolver este problema." +
        "¿Qué solución cumplirá este requisito con la MENOR sobrecarga operativa?",
      opciones: [
        "Modifique la instancia de base de datos para que sea una implementación Multi-AZ.",
        "Cree una réplica de lectura de la base de datos. Configure el script para consultar solo la réplica de lectura.",
        "Indique al equipo de desarrollo que exporte manualmente las entradas en la base de datos al final de cada día.",
        "Utilice Amazon ElastiCache para almacenar en caché las consultas comunes que el script ejecuta en la base de datos.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 9*/
    {
      pregunta:
        "Una empresa almacena información confidencial de los usuarios en un bucket de Amazon S3. La empresa quiere proporcionar acceso seguro a este bucket desde el nivel de aplicación que se ejecuta en instancias de Amazon EC2 dentro de una VPC." +
        "¿Qué combinación de pasos debe tomar un arquitecto de soluciones para lograr esto? (Elija dos).",
      opciones: [
        "Configure un punto de enlace de puerta de enlace de VPC para Amazon S3 dentro de la VPC.",
        "Cree una política de bucket para hacer públicos los objetos del bucket de S3.",
        "Cree una política de bucket que limite el acceso solo al nivel de aplicación que se ejecuta en la VPC.",
        "Cree un usuario de IAM con una política de acceso de S3 y copie las credenciales de IAM en la instancia EC2.",
        "Cree un rol de IAM con una política de acceso de S3 y asigne el rol a la instancia EC2.",
        "Cree una instancia NAT y haga que las instancias EC2 utilicen la instancia NAT para acceder al bucket de S3.",
      ],
      correcta: [0, 2], // Índices de las respuestas correctas
      dificultad: "Medio",
      tipo: "multiple",
    },
    /* Pregunta 10*/
    {
      pregunta:
        "Un arquitecto de soluciones debe ayudar a una empresa a optimizar el costo de ejecutar una aplicación en AWS. La aplicación utilizará instancias de Amazon EC2, AWS Fargate y AWS Lambda para la computación dentro de la arquitectura." +
        "Las instancias EC2 ejecutarán la capa de ingesta de datos de la aplicación. El uso de EC2 será esporádico e impredecible. Las cargas de trabajo que se ejecutan en instancias EC2 se pueden interrumpir en cualquier momento. El front-end de la aplicación se ejecutará en Fargate y Lambda servirá a la capa de API. La utilización del front-end y la utilización de la capa de API serán predecibles en el transcurso del próximo año." +
        "¿Qué combinación de opciones de compra proporcionará la solución MÁS rentable para alojar esta aplicación? (Elija dos).",
      opciones: [
        "Uso de instancias de spot para la capa de ingesta de datos",
        "Uso de instancias bajo demanda para la capa de ingesta de datos",
        "Compre un plan de ahorro de cómputo de 1 año para el front-end y la capa de API.",
        "Compre instancias reservadas con pago inicial de 1 año para la capa de ingesta de datos.",
        "Compre un plan de ahorro de instancias EC2 de 1 año para el front-end y la capa de API.",
      ],
      correcta: [0, 2],
      dificultad: "Medio",
      tipo: "multiple",
    },
  ],

  // Oracle Questions
  oracle: [
    {
      // Pregunta 1
      pregunta:
        "Tiene objetos almacenados en un depósito de almacenamiento de objetos OCI que desea compartir con una empresa asociada. Usted decide utilizar solicitudes preautenticadas para otorgar acceso a los objetos. ¿Qué afirmación es cierta sobre las solicitudes preautenticadas?",
      opciones: [
        "A. Las solicitudes preautenticadas se pueden utilizar para eliminar depósitos u objetos.",
        "B. Debe proporcionar sus credenciales OCI a la empresa asociada.",
        "C. Eliminar una solicitud preautenticada no revoca el acceso al depósito u objeto asociado.",
        "D. No puedes editar una solicitud preautenticada",
      ],
      correcta: 3,
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 2
    {
      pregunta:
        "¿Cuál de los siguientes es un prefijo CIDR RFC 1918 válido que se puede utilizar para crear una red de nube virtual (VCN) de Oracle Cloud Infrastructure (OCI)?",
      opciones: [
        "A. 172.16.0.0/12",
        "B. 189.215.154.89/32",
        "C. 0.0.0.0/0",
        "D. 192.168.0.0/16",
        "E. 10.0.0.0/8",
        "F. 192.268.0.0/24",
      ],
      correcta: 3, // respuestas correctas: A, D y E
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 3
    {
      pregunta:
        "Tienes un volumen de bloque creado en esta región del Oeste de EE. UU. (Phoenix). Habilitó la replicación entre regiones para el volumen y seleccionó US West (San José) como región de designación. Ahora, le gustaría crear un nuevo volumen a partir de la réplica del volumen en la región Oeste de EE. UU. (San José). ¿Qué debes hacer?",
      opciones: [
        "A. Activa la réplica.",
        "B. Iniciar la réplica.",
        "C. No se requiere ninguna acción. De forma predeterminada, la réplica está disponible como volumen de bloque.",
        "D. Activa la réplica.",
      ],
      correcta: 0, // Respuesta correcta: A. Activa la réplica.
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 4
    {
      pregunta:
        "Un cliente ha informado que no puede acceder a un sistema de archivos incluso cuando su dirección IP está permitida en las opciones de exportación. Al investigar, te das cuenta de que una regla de la lista de seguridad bloquea el acceso al agente de montaje. ¿Qué capa necesita ajuste?",
      opciones: [
        "A. Seguridad de la red",
        "B. Servicio IAM",
        "C. Capa de seguridad UNIX",
        "D. Opciones de exportación de interfaz",
      ],
      correcta: 0, // Respuesta correcta: A. Seguridad de la red
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 5
    {
      pregunta:
        "¿Cuál de las siguientes afirmaciones es cierta sobre la clonación de un volumen en el servicio Block Volume de Oracle Cloud Infrastructure (OCI)?",
      opciones: [
        "A. Crear un clon lleva más tiempo que crear una copia de seguridad de un volumen.",
        "B. Es necesario separar un volumen antes de clonarlo.",
        "C. Puede cambiar el tamaño del volumen del bloque al clonar un volumen.",
        "D. Puedes clonar un volumen en otra región.",
      ],
      correcta: 2, // Respuesta correcta: C. Puede cambiar el tamaño del volumen del bloque al clonar un volumen.
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 6
    {
      pregunta:
        "¿Cuál es el propósito principal del servicio de aceleración de aplicaciones web ofrecido por Oracle Cloud Infrastructure (OCI)?",
      opciones: [
        "A. Mejorar la confiabilidad de los equilibradores de carga HTTP de capa 7 mediante la implementación de medidas de redundancia",
        "B. Cifrar el tráfico HTTP para garantizar una comunicación segura entre clientes y servidores",
        "C. Acelerar el tráfico en los balanceadores de carga HTTP de capa 7 mediante técnicas de almacenamiento en caché y compresión",
        "D. Monitoreo y análisis de patrones de tráfico HTTP para identificar posibles vulnerabilidades de seguridad",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 7
    {
      pregunta:
        "Como arquitecto de redes, se le ha encomendado la tarea de crear una conexión totalmente redundante desde su centro de datos local a su red de nube virtual (VCN) en la región us-ashburn-1. ¿Cuáles DOS opciones cumplirán este requisito? (Elige dos.)",
      opciones: [
        "A. Configure un circuito virtual FastConnect en la región us-ashburn-1 y el segundo circuito virtual FastConnect en la región us-phoenix-1.",
        "B. Configure dos circuitos virtuales FastConnect en la región us-ashburn-1 y finalícelos en diversos hardware locales.",
        "C. Configure un circuito virtual FastConnect en la región us-ashburn-1 y una VPN de sitio a sitio en la región us-ashburn-1.",
        "D. Configure una VPN de sitio a sitio desde un único CPE local.",
      ],
      correcta: [1, 2], // Respuestas correctas: B y C
      dificultad: "Avanzado",
      tipo: "multiple",
    },
    // Pregunta 8

    {
      pregunta:
        "Una empresa movió accidentalmente una instancia de base de datos crítica a un compartimento diferente dentro de su arrendamiento de OCI. Las políticas IAM existentes se asignaron previamente al compartimento original de la base de datos y se les otorgó acceso a usuarios autorizados. ¿Cómo afectará esto al acceso de los usuarios a la base de datos?",
      opciones: [
        "A. Los compartimentos no están cubiertos por las políticas del IAM; sólo se aplican a los recursos.",
        "B. El acceso a la base de datos será revocado inmediatamente para todos los usuarios autorizados al cambio de compartimento.",
        "C. Las políticas IAM existentes seguirán funcionando normalmente, independientemente del movimiento del compartimento.",
        "D. Los compartimentos impiden el movimiento de recursos; una vez que un recurso se coloca en un compartimento, no se puede mover.",
      ],
      correcta: 1, //  Respuesta correcta: B
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 9
    {
      pregunta:
        "Una gran organización utiliza Oracle Cloud Infrastructure (OCI) y ha implementado una compleja estructura de compartimentos. Tienen un compartimento raíz, con múltiples compartimentos anidados para varios proyectos, equipos y entornos. Se crea una nueva máquina virtual para un proyecto específico en un subcompartimento de desarrollo. ¿Qué afirmación es INCORRECTA respecto a la máquina virtual en este escenario?",
      opciones: [
        "A. El acceso a la máquina virtual sólo está controlado por políticas adjuntas al compartimento raíz.",
        "B. La máquina virtual puede interactuar con recursos como una red de nube virtual (VCN) en un compartimento diferente.",
        "C. En caso necesario, la máquina virtual se puede trasladar a un compartimento diferente dentro del arrendamiento.",
        "D. La máquina virtual está asociada a un compartimento específico y no puede existir simultáneamente en ningún otro compartimento.",
      ],
      correcta: 0, // Respuesta correcta: A
      dificultad: "Medio",
      tipo: "simple",
    },
    // Pregunta 10
    {
      pregunta:
        "En comparación con las políticas de IAM, ¿cuál es una ventaja CLAVE de utilizar roles de administrador para el control de acceso dentro de los dominios de identidad de OCI IAM?",
      opciones: [
        "A. Proporcionar control granular sobre el acceso a compartimentos específicos dentro del dominio",
        "B. Se puede utilizar para otorgar acceso a recursos fuera del dominio de identidad asociado",
        "C. Simplifica la gestión eliminando la necesidad de crear políticas complejas",
        "D. Ofrecen una amplia gama de combinaciones de permisos además de las políticas de IAM",
      ],
      correcta: 2, // Respuesta correcta: C
      dificultad: "Medio",
      tipo: "simple",
    },


    // pregunta 11 /////////////////////////
    {
      pregunta:
        "Como ingeniero de red responsable de gestionar la infraestructura de red virtual en Oracle Cloud Infrastructure (OCI) para su organización, decide utilizar la herramienta Network Visualizer proporcionada por OCI. ¿Por qué el visualizador de red es demasiado valioso para gestionar la infraestructura de red virtual en OCI?",
      opciones: [
        "A. Visualiza la topología de todas las VCN en una región y un arrendamiento seleccionados, lo que permite una comprensión concisa de las relaciones y conexiones.",
        "B. Proporciona información detallada sobre los componentes físicos de la red.",
        "C. Genera informes automatizados sobre métricas de rendimiento de la red, lo que facilita la toma de decisiones para optimizar los recursos de la red y la asignación de ancho de banda.",
        "D. Ofrece monitoreo en tiempo real del tráfico de red, lo que permite la identificación proactiva de amenazas de seguridad e intentos de acceso no autorizados.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "La empresa XYZ está gastando $300,000.00 USD por mes en tarifas de salida por 7 Petabytes (1 Petabyte = 1000 Terabytes) que consumen para la transferencia de datos salientes en América del Norte con su proveedor de nube actual. La compañía busca reducir ese gasto considerablemente sin reducir el consumo. Propone la migración a OCI porque la transferencia de datos salientes de Gigabyte en Norteamérica cuesta solo 0,0085 USD al mes. ¿Qué OCI, cuánto gastarán al mes por 7 petabytes de transferencia de datos salientes? (1 terabyte = 1000 gigabytes)",
      opciones: [
        "A. 59415",
        "B. 150000",
        "C. 59500",
        "D. $0.00 (gratis con OCI)",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Está realizando una copia de seguridad de los datos locales en el servicio de almacenamiento de objetos de Oracle Cloud Infrastructure (OCI). Sus requisitos son: 1. Las copias de seguridad deben conservarse durante al menos 31 días completos. 2. Los datos deben ser accesibles inmediatamente si es necesario después de la copia de seguridad. ¿Qué nivel de OCI Object Storage es adecuado para almacenar el backup para minimizar el coste?",
      opciones: [
        "A. Nivel de organización automática por niveles",
        "B. Nivel de archivo",
        "C. Nivel de acceso poco frecuente",
        "D. Nivel Estándar",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Qué sentencias TWO son VERDADERAS sobre las direcciones IP públicas en Oracle Cloud Infrastructure (OCI)? (Elija dos).",
      opciones: [
        "A. Debe utilizar direcciones IP públicas proporcionadas por OCI. No puede traer sus propias direcciones IP a OCI.",
        "B. De forma predeterminada, una instancia de una subred pública tenía una dirección IP pública principal.",
        "C. Las direcciones IP públicas pueden ser efímeras o reservadas.",
        "D. Puede asignar a una instancia determinada varias IP públicas en una o varias VNIC.",
      ],
      correcta: [2, 3],
      dificultad: "Medio",
      tipo: "multiple",
    },
    {
      pregunta:
        "¿Qué afirmación es TRUE sobre la delegación de un dominio existente al servicio DNS de Oracle Cloud Infrastructure (OCI)?",
      opciones: [
        "A. Los dominios se pueden delegar a OCI DNS a través de partners de FastConnect.",
        "B. Los dominios se pueden autodelegar a OCI DNS desde su propio portal de servicios.",
        "C. Los dominios se pueden delegar a OCI DNS desde el portal de autoservicio del registrador de dominios.",
        "D. Todos los dominios se pueden recuperar en OCI DNS a través de DYN.",
        "E. Los dominios se pueden delegar a OCI DNS desde OCI Marketplace.",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "¿Qué política de dirección de administración de tráfico facilita la distribución del tráfico DNS a puntos finales específicos en función de la ubicación geográfica de los usuarios finales?",
      opciones: [
        "A. Dirección de prefijos IP",
        "B. Dirección de geolocalización",
        "C. Dirección de proximidad",
        "D. Dirección ASN",
      ],
      correcta: 1,
      dificultad: "Bajo",
      tipo: "simple",
    },
    {
      pregunta:
        "Planea cargar un archivo grande (3 TiB) en Oracle Cloud Infrastructure (OCI) Object Storage. Desea minimizar el impacto de los errores de red durante la carga y, por lo tanto, decide utilizar la capacidad de carga multiparte. ¿Qué DOS afirmaciones son verdaderas sobre la realización de una carga multiparte mediante la API de carga multiparte?",
      opciones: [
        "A. Mientras una carga multiparte sigue activa, puede seguir agregando partes siempre que el número total sea inferior a 10,000.",
        "B. No es necesario dividir el objeto en pares. Object Storage divide el objeto en partes y carga todas las partes automáticamente.",
        "C. No es necesario confirmar la carga después de haber cargado todas las partes del objeto.",
        "D. Cuando se divide el objeto en partes individuales, cada parte puede tener un tamaño de hasta 50 GiB.",
      ],
      correcta: [0, 3],
      dificultad: "Medio",
      tipo: "multiple",
    },
    {
      pregunta:
        "Una empresa ha desplegado una aplicación de varios niveles en Oracle Cloud Infrastructure (OCI), con servidores web en una subred pública y servidores de bases de datos en una subred privada. Los servidores de bases de datos necesitan acceder a los datos de OCI Object Storage y la empresa quiere asegurarse de que esta comunicación sea segura y no esté expuesta a la Internet pública. ¿Qué función de OCI se debe utilizar?",
      opciones: [
        "A. Utilice un gateway de servicio para establecer una conexión segura con Object Storage.",
        "B. Utilice una puerta de enlace de intercambio de tráfico local para emparejar con la subred de Object Storage.",
        "C. Utilice una puerta de enlace VPN para crear un túnel cifrado a Object Storage.",
        "D. Utilice una puerta de enlace NAT para habilitar el acceso privado a Object Storage.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Su empresa vende servicios a fotógrafos donde los clientes pueden obtener una vista previa de las fotos para las que desean impresiones. Para evitar copias no autorizadas, las fotos de muestra tienen una resolución más baja y tienen marcas de agua. Las fotos se procesan después de cargarlas. El proceso es rápido pero no inmediato. Crea muestras y las envía al almacenamiento fuera de las instancias. ¿Qué tipo de instancia es ideal para un proceso como este? ¿De corta duración y uno que mantiene el costo bajo?",
      opciones: [
        "A. Instancias deportivas",
        "B. Instancias bajo demanda",
        "C. Instancias interrumpibles",
        "D. Instancias ampliable",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Oracle Cloud Agent es un proceso ligero que gestiona plugins que se ejecutan en instancias informáticas. ¿Cuál NO es un nombre de plugin de Oracle Cloud Agent válido?",
      opciones: [
        "A. Comando de ejecución de instancia informática",
        "B. Agente de servicio de administración del sistema operativo",
        "C. Agente de migración en vivo",
        "D. Bastion",
      ],
      correcta: 3,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Está lanzando un nuevo proyecto en la región Oeste de EE. UU. (Phoenix). Desea reservar la capacidad de proceso que se menciona a continuación para que la capacidad esté disponible para las cargas de trabajo cuando la necesite. 10 VM. Instancias Standard2.2 6VM. Instancias Standard.E4.Flex El proyecto también requiere que tenga en cuenta la alta disponibilidad y coloque las instancias en al menos dos dominios de disponibilidad. Como mínimo, ¿cuántas reservas de capacidad crearía para cumplir con este requisito?",
      opciones: ["A. Dos", "B. Tres", "C. Cuatro", "D. Uno"],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Debe configurar principales de instancia para que una aplicación que se ejecuta en una instancia pueda llamar a los servicios públicos de Oracle Cloud Infrastructure (OCI), sin necesidad de configurar credenciales de usuario o un archivo de configuración. Un desarrollador de tu equipo ya ha configurado la aplicación creada con un SDK de OCI para autenticarse mediante el proveedor de principales de instancia. ¿Cuál NO es un paso necesario para completar esta configuración?",
      opciones: [
        "A. Implemente la aplicación y el SDK en todas las instancias que pertenecen al grupo dinámico.",
        "B. Genere tokens de autenticación para permitir que las instancias del grupo dinámico se autentiquen con las API.",
        "C. Cree una política que conceda permisos al grupo dinámico para acceder a los servicios del compartimento o arrendamiento.",
        "D. Cree un grupo dinámico con reglas coincidentes para especificar qué instancias pueden realizar llamadas a la API en los servicios.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Tiene tres compartimentos: ProyectoA, ProyectoB y ProyectoC. Para cada compartimento, hay un grupo de administradores configurado: A-Admins, B-Admins y C-Admins. Cada grupo de administración tiene acceso completo a sus respectivos compartimentos, como se muestra en el gráfico siguiente. Su organización ha configurado un espacio de nombres de etiqueta, EmployeeGroup.Role y todos sus grupos de administración están etiquetados con un valor de 'Admin'. Desea configurar un compartimento de prueba para que los miembros de los tres proyectos lo compartan. También debe proporcionar acceso de administrador a los tres grupos de administradores existentes. ¿Qué política escribiría para realizar esta tarea?",
      opciones: [
        "A. Permitir que el grupo any-group gestione todos los recursos en el compartimento Test where request.principal.group.tag.EmpoyeeGroup.Role= 'Admin'",
        "B. Permitir que dynamic-group gestione todos los recursos en el compartimento Test where request.principal.group.tag.EmpoyeeGroup.Role= 'Admin'",
        "C. Permitir que cualquier usuario gestione todos los recursos en el compartimento Test donde request.principal.group.tag.EmployeeGroup.Role= 'Admin'",
        "D. Permitir que todos los grupos gestionen todos los recursos en el compartimento Test donde request.principal.group.tag.EmployeeGroup.Role= 'Admin'",
      ],
      correcta: 1,
      dificultad: "Alta",
      tipo: "simple",
    },
    {
      pregunta:
        "¿Cuáles son los dos tipos de filtros de captura que se pueden crear para la supervisión de redes?",
      opciones: [
        "A. Filtros de captura de registros de flujo y filtros de captura de paquetes",
        "B. Filtros de captura VTAP y filtros de captura de red",
        "C. Filtros de captura de registro de flujo y filtros de captura VTAP",
        "D. Filtros de captura de control de flujo y filtros de captura de tráfico",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    {
      pregunta:
        "Puede asociar recursos a una puerta de enlace de enrutamiento dinámico (DRG). Seleccione TRES de estos recursos. (Elija tres).",
      opciones: [
        "A. Conexión de emparejamiento local",
        "B. Subred",
        "C. Circuitos virtuales",
        "D. IPSec Tunnel",
        "E. Remote Perring Connections",
        "F. VNIC",
      ],
      correcta: [0, 2, 3],
      dificultad: "Alta",
      tipo: "multiple",
    },
  ],

  git: [],
  desarrollo_web: [],
  python: [],
  basesDeDatos: [],
};

// Variables de estado
let temaActual = "";
let preguntaActual = 0;
let puntaje = 0;
let nombreParticipante = "";
let selecciones = []; // Para almacenar las selecciones en preguntas múltiples
let timeoutId = null; // Para manejar el timeout de transición automática

// Función para cargar un tema
function cargarTema(tema) {
  const temasEnDesarrollo = ["git", "desarrollo_web", "python", "basesDeDatos"];

  if (temasEnDesarrollo.includes(tema)) {
    alert(
      "🚧 Desafío en desarrollo. ¡Próximamente más preguntas! Esté Atento!!!"
    );
    return;
  }

  // Limpiar timeout existente si hay uno
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  // Reiniciar estado del quiz
  temaActual = tema;
  preguntaActual = 0;
  puntaje = 0;
  selecciones = [];

  mostrarModal();
}

// Función para mostrar el modal de nombre
function mostrarModal() {
  document.getElementById("participanteModal").classList.remove("hidden");
}

// Función para ocultar el modal de nombre
function ocultarModal() {
  document.getElementById("participanteModal").classList.add("hidden");
}

// Función para iniciar el quiz
function iniciarQuiz() {
  nombreParticipante = document
    .getElementById("nombreParticipante")
    .value.trim();

  if (!nombreParticipante) {
    alert("Por favor ingresa tu nombre");
    return;
  }

  ocultarModal();
  document.querySelector(".temas-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  mostrarPregunta();
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
  const quizContainer = document.getElementById("quiz-container");
  const pregunta = preguntas[temaActual][preguntaActual];

  // Reiniciar selecciones para la nueva pregunta
  selecciones = [];

  let opcionesHTML = "";

  if (pregunta.tipo === "multiple") {
    // Para preguntas múltiples, usar checkboxes con transición automática
    opcionesHTML = `
      <p class="multiple-note">Selecciona todas las opciones correctas:</p>
      <div class="opciones-container">
        ${pregunta.opciones
          .map(
            (opcion, index) => `
          <label class="opcion checkbox-option">
            <input type="checkbox" value="${index}" onchange="toggleSeleccion(${index})">
            <span>${opcion}</span>
          </label>
        `
          )
          .join("")}
      </div>
    `;
  } else {
    // Para preguntas simples, usar botones como antes
    opcionesHTML = `
      <div class="opciones-container">
        ${pregunta.opciones
          .map(
            (opcion, index) => `
          <button class="opcion" onclick="seleccionarRespuestaSimple(${index})">
            ${opcion}
          </button>
        `
          )
          .join("")}
      </div>
    `;
  }

  quizContainer.innerHTML = `
    <div class="quiz-card">
      <h2>${pregunta.pregunta}</h2>
      ${opcionesHTML}
      <div class="quiz-progress">
        Pregunta ${preguntaActual + 1} de ${preguntas[temaActual].length}
      </div>
      <div class="volver-inicio">
        <button onclick="volverAInicio()" class="btn-volver">⬅️ Volver al inicio</button>
      </div>
    </div>
  `;
}

// Función para manejar la selección en preguntas múltiples (CORREGIDA)
function toggleSeleccion(index) {
  const pregunta = preguntas[temaActual][preguntaActual];
  const pos = selecciones.indexOf(index);

  if (pos === -1) {
    selecciones.push(index);
  } else {
    selecciones.splice(pos, 1);
  }

  // Solo verificar si tenemos la misma cantidad de selecciones que respuestas correctas
  if (selecciones.length === pregunta.correcta.length) {
    // Verificar si la respuesta es correcta
    const esCorrecta = arraysIguales(selecciones, pregunta.correcta);

    // Deshabilitar todos los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb) => (cb.disabled = true));

    // Mostrar retroalimentación visual
    checkboxes.forEach((checkbox, i) => {
      const label = checkbox.closest("label");
      if (pregunta.correcta.includes(i)) {
        label.classList.add("correcta");
      } else if (selecciones.includes(i) && !pregunta.correcta.includes(i)) {
        label.classList.add("incorrecta");
      }
    });

    // Sumar puntaje si es correcta
    if (esCorrecta) {
      puntaje++;
    }

    // Transición automática después de 1.5 segundos
    timeoutId = setTimeout(siguientePregunta, 1500);
  }
}

// Función para seleccionar una respuesta simple
function seleccionarRespuestaSimple(opcionIndex) {
  const opciones = document.querySelectorAll(".opcion");
  const pregunta = preguntas[temaActual][preguntaActual];

  opciones.forEach((btn) => (btn.disabled = true));

  if (opcionIndex === pregunta.correcta) {
    opciones[opcionIndex].classList.add("correcta");
    puntaje++;
  } else {
    opciones[opcionIndex].classList.add("incorrecta");
    opciones[pregunta.correcta].classList.add("correcta");
  }

  timeoutId = setTimeout(siguientePregunta, 1500);
}

// Función para comparar dos arrays (para preguntas múltiples)
function arraysIguales(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((value, index) => value === sortedB[index]);
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < preguntas[temaActual].length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
}

// Función para mostrar los resultados finales
function mostrarResultados() {
  const total = preguntas[temaActual].length;
  const porcentaje = (puntaje / total) * 100;

  document.getElementById("quiz-container").classList.add("hidden");

  // Mostrar modal de resultados
  const resultadoModal = document.getElementById("resultadosModal");
  document.getElementById(
    "resultadoTitulo"
  ).textContent = `¡Felicidades ${nombreParticipante}!`;
  document.getElementById(
    "resultadoPuntaje"
  ).textContent = `Obtuviste ${puntaje} de ${total} respuestas correctas (${porcentaje.toFixed(
    1
  )}%)`;
  document.getElementById("resultadoFeedback").textContent =
    obtenerFeedback(porcentaje);

  resultadoModal.classList.remove("hidden");
}

// Función para obtener feedback según el porcentaje
function obtenerFeedback(porcentaje) {
  if (porcentaje >= 90) return "¡Excelente trabajo! Dominas este tema 💪";
  if (porcentaje >= 70) return "¡Buen resultado! Sigue practicando 😊";
  if (porcentaje >= 50) return "¡No está mal! Repasa los conceptos 📚";
  return "¡Sigue practicando! El conocimiento se construye paso a paso 💡";
}

// Función para volver al inicio
function volverAInicio() {
  // Limpiar timeout si existe
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("resultadosModal").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// Función para volver a los temas desde los resultados
function volverATemas() {
  document.getElementById("resultadosModal").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Cerrar modal al hacer clic en la X
  const closeModal = document.querySelector(".close-modal");
  if (closeModal) {
    closeModal.addEventListener("click", ocultarModal);
  }

  // Cerrar modal al hacer clic fuera del contenido
  const participanteModal = document.getElementById("participanteModal");
  if (participanteModal) {
    participanteModal.addEventListener("click", function (e) {
      if (e.target === this) {
        ocultarModal();
      }
    });
  }

  // Manejar envío del formulario
  const nombreForm = document.getElementById("nombreForm");
  if (nombreForm) {
    nombreForm.addEventListener("submit", function (e) {
      e.preventDefault();
      iniciarQuiz();
    });
  }

  // Manejar enter en el campo de nombre
  const nombreParticipanteInput = document.getElementById("nombreParticipante");
  if (nombreParticipanteInput) {
    nombreParticipanteInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        iniciarQuiz();
      }
    });
  }
});
