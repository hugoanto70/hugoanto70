function ingresarNombres(){
    let continuarIngresando = true;
    let ciclo = 1;
    
    while(continuarIngresando){
        const nombre = prompt(`Ingresa el nombre ${ciclo} o escribe 'salir' para finalizar:`);
        if(nombre && nombre.toLowerCase() !== 'salir'){
            console.log(`Nombre ${ciclo}: ${nombre}`);
            ciclo++;
        }else{
            continuarIngresando = false;
        }
    }
    console.log("Hugo Cañarte 1ra Entrega");
}

ingresarNombres();

