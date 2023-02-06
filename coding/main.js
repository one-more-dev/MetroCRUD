//  LOAD THE OBJECTS IN JSON
async function loadCard(){
    const conexion = await fetch(`http://localhost:3000/cidades`);
    const conexionConverted = await conexion.json();
    return conexionConverted;
}


//  INSERT OR EDIT NEW OBJECTS IN JSON
async function insertCard(metodo,id,imgdacidade="",nomedacidade,pais,populacao){
    const conexion = await fetch(`http://localhost:3000/cidades/${id}`,
        { method: `${metodo}`,
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


async function deleteCard(item){
    const conexion = await fetch(`http://localhost:3000/cidades/${item}`, { method: `DELETE`});
    const conexionConverted = conexion.json();
    return conexionConverted;
}


export{ loadCard, insertCard, deleteCard }
