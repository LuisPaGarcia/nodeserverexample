function inicio(respuesta){
    console.log("has entrado en la pagina de inicio");
    respuesta.writeHead(200,{"Content-type":"text/html"});
    respuesta.write("Esta es la pagina de inicio");
    respuesta.end();
}

function pagina1(respuesta){
    console.log("has entrado en la pagina numero 1");
    respuesta.writeHead(200,{"Content-type":"text/html"});
    respuesta.write("Esta es la pagina de Pagina1");
    respuesta.end();
}

function pagina2(respuesta){
    console.log("has entrado en la pagina numero 2");
    respuesta.writeHead(200,{"Content-type":"text/html"});
    respuesta.write("Esta es la pagina de pagina2");
    respuesta.end();
}

function favicon(respuesta){
    console.log("se ha solicitado favicon");
    respuesta.writeHead(200,{"Content-type":"text/html"});
    respuesta.write("Esta es la pagina de favicon.ico");
    respuesta.end();
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;