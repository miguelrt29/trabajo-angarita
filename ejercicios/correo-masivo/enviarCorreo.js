const nodemailer = require('nodemailer');
const destinatarios = [
<<<<<<< HEAD
    'miguelrt29@ejemplo.com',
    'miguelrt@ejemplo.com',
    'miguelrt29@ejemplo.com',
=======
    'miguelrt2903@gmail.com',
    'miguelrt2903@gmail.com',
    'miguelrt2903@gmail.com',

];

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Pepitooperez148501@gmail.com',
<<<<<<< HEAD
        pass: 'Hacker1041.'
=======
        pass: 'fmnh yevn vfkw waji'

    }
});

async function enviarCorreo(destinatario) {
    try {
        await transporter.sendMail({
<<<<<<< HEAD
            from: '"Tu Nombre" miguelrt29@gmail.com',
=======
            from: '"Tu Nombre" <Pepitooperez148501@gmail.com>',

            to: destinatario,
            subject: 'Correo masivo de prueba',
            text: '¡Hola! Este es un mensaje de prueba enviado con Nodemailer.',
        });

        console.log(` Correo enviado a ${destinatario}`);
    } catch (error) {
        console.error(` Error con ${destinatario}:`, error.message);
    }
}

async function enviarCorreosMasivos() {
    const tareas = destinatarios.map(destino => enviarCorreo(destino));
    await Promise.all(tareas); 
    console.log(' Todos los correos han sido procesados.y se mostraran enseguida');
}


enviarCorreosMasivos();
