import { loadCard } from "./main.js";
import { interactiveText } from "./cityModify.js";


const principal = document.querySelector("[data-principal]");


function newCity(imagem,cidade,pais,pop){
    const cityCard = document.createElement("div");
    cityCard.className = "cidade";
    cityCard.innerHTML =
        `<img data-citycard="imagem" src=${imagem}></img>
        <p data-citycard="cidade">${cidade}</p>
        <p data-citycard="pais">${pais}</p>
        <p data-citycard="pop">${pop} Million</p>
        </div>`;
    
    return cityCard;
}


async function showCities(){
    const api = await loadCard();
    api.forEach(card => { principal.appendChild(newCity(card.foto,card.nome,card.pais,card.pop)); });
    interactiveText("[data-citycard='cidade']");
}


showCities();