import { loadCard } from "./main.js";


const principal = document.querySelector("[data-principal]");


function newCity(imagem,cidade,pais,pop){
    const cityCard = document.createElement("div");
    cityCard.innerHTML = `<div id="cidade">
        <img src=${imagem}></img>
        <p>${cidade}</p><p>${pais}</p><p>${pop}</p>
        <button class="concluir_acao"></button>
        </div>`;
    return cityCard;
}

async function showCities(){
    const api = await loadCard();
    api.forEach(card => { principal.appendChild(newCity(card.foto,card.nome,card.pais,card.pop)); });
}


showCities();
/*
async function listPageVideos(){
    try{
    const videolistApi = await conectAPI.callVideos();
    videolistApi.forEach(element => {
        videoList.appendChild(makeVideoCard(element.titulo,element.descricao,element.url,element.imagem)) });
    }catch{
        videoList.innerHTML = `<h2 class="mensagem__titulo"></h2>`;
        console.log("Serviço indisponível no momento!")
    }
}
*/