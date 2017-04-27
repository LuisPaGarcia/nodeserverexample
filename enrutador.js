function enrutar(manejador, ruta, respuesta){
    console.log("Voy a rutear algo para " + ruta);
    
    if(typeof manejador[ruta] === 'function'){
         manejador[ruta](respuesta);
    }else{
        console.log("no existe una funcion para esa ruta");
    }

}

exports.enrutar =  enrutar;

