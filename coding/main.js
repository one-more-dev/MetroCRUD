
//  LOAD THE OBJECTS IN JSON
async function loadCard(){
    const conexion = await fetch(`http://localhost:3000/cidades`);
    const conexionConverted = await conexion.json();
    return conexionConverted;
}


//  INSERT NEW OBJECTS IN JSON
async function insertCard(imgdacidade="",nomedacidade,pais,populacao){
    const conexion = await fetch(`http://localhost:3000/cidades`,
        { method: `POST`,
        headers:{ "Content-type" : "application/json" },
        body:JSON.stringify({
            foto: imgdacidade,
            nome: nomedacidade,
            pais: pais,
            pop: populacao
        })
    })
    const conexionConverted = await conexion.json();
    return conexionConverted;
}




export{ loadCard, insertCard }
