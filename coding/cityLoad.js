import { loadCard } from "./main.js";


const principal = document.querySelector("[data-principal]");


export function newCity(imagem,cidade,pais,pop){
    const cityCard = document.createElement("div");
    cityCard.className = "cidade";
    cityCard.innerHTML =
        `<img src=${imagem}></img>
        <p>${cidade}</p><p>${pais}</p><p>${pop} Million</p>
        </div>`;
    return cityCard;
}


async function showCities(){
    const api = await loadCard();
    api.forEach(card => { principal.appendChild(newCity(card.foto,card.nome,card.pais,card.pop)); });
}


showCities();

