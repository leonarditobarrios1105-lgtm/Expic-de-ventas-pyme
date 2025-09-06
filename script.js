document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    // Mapeo de IDs a descripciones de cada paso
    const descriptions = {
        'pregunta-encargado': 'Paso 1: Identificar a la persona responsable de tomar decisiones.',
        'pedir-contacto': 'Si el encargado no está, se pide su información de contacto para un seguimiento posterior.',
        'presentarse': 'Paso 2: Presentarse de manera formal y clara. Incluye tu nombre y la empresa que representas.',
        'saludos': 'Paso 3: Un saludo cordial y amigable para romper el hielo y crear una atmósfera positiva.',
        'servicio-internet': 'Paso 4: Preguntar si ya tienen un servicio de internet para entender su situación actual.',
        'correctamente': 'Paso 5: Si tienen internet, se indaga sobre la calidad del servicio para encontrar posibles puntos de mejora.',
        'ayudar': 'Paso 6: Si no tienen internet o tienen problemas, se pregunta cómo puedes ayudarles, mostrando interés en sus necesidades.',
        'diferencias': 'Paso 7: Resaltar los beneficios de CLUB FIBEX y sus ventajas sobre la competencia.',
        'planes': 'Paso 8: Presentar los diferentes planes y ofertas que se ajustan a las necesidades del cliente.',
        'adquirir-servicio': 'Paso 9: Pregunta clave para saber si el cliente está interesado en avanzar con la compra.',
        'cerrar-venta': 'Paso 10: Finalizar la transacción y formalizar el acuerdo de servicio.',
        'tomar-datos': 'Paso 11: Si no se cierra la venta, se toman los datos del cliente para un futuro contacto.'
    };

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Elimina la clase 'active' de todas las cajas
            boxes.forEach(b => b.classList.remove('active'));

            // Añade la clase 'active' a la caja en la que se hizo clic
            box.classList.add('active');

            // Muestra la descripción del paso
            const stepId = box.id;
            const description = descriptions[stepId];
            alert(description); // Esto muestra la descripción en una ventana emergente.
        });
    });
});
