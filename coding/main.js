
async function loadCard(){
    const conexion = await fetch(`http://localhost:3000/cidades`);
    console.log(conexion) //the conection before the convert
    const conexionConverted = await conexion.json();
    return conexionConverted;
}


export{ loadCard }