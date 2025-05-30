const nodemailer = require("nodemailer");
const destinatarios = [
  "miguelrt2903@gmail.com",
  "miguelrt2903@gmail.com",
  "miguelrt2903@gmail.com",
];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Pepitooperez148501@gmail.com",
    pass: "fmnh yevn vfkw waji",
  },
});

async function enviarCorreo(destinatario) {
  try {
    await transporter.sendMail({
      from: '"Tu Nombre" <Pepitooperez148501@gmail.com>',
      to: destinatario,
      subject: "Correo masivo de prueba",
      html: `<h1>¡Hola! Este es un mensaje de prueba enviado con Nodemailer.</h1>`,
    });

    console.log(` Correo enviado a ${destinatario}`);
  } catch (error) {
    console.error(` Error con ${destinatario}:`, error.message);
  }
}

async function enviarCorreosMasivos() {
  const tareas = destinatarios.map((destino) => enviarCorreo(destino));
  await Promise.all(tareas);
  console.log(
    " Todos los correos han sido procesados.y se mostraran enseguida"
  );
}

enviarCorreosMasivos();
