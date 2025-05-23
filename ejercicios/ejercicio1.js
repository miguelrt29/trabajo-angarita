const archivos = require ('fs/promises');

async function crearArchivos (){
    for(let i = 1; i <=500; i++){

        const nombreArchivo = `archivo_${i}.txt`;
        const contenido = `este es el numero ${i}`;

        await archivos.writeFile(nombreArchivo,contenido);

        console.log(`archivo ${i} creado`);
        
    }

    console.log("todos los archivos han sido creados.");
    
}

crearArchivos()
.then(()=>{
    console.log("pasos completados");
    
})

.catch (()=>{
    console.log("ocurrio un error: ", error);
    
})