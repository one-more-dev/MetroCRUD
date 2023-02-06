//  COM UM DOUBLE CLICK, INVOQUE UMA JANELA COM SIM OU NÃO
import { deleteCard } from "./main.js";
import { loadCard } from "./main.js";


async function deleteCity(){

    const item = document.querySelectorAll(".cidade");
    const cards = await loadCard();    //console.log(`${cards[3]["nome"]} ${cards[3]["id"]} ${cards[3]["pop"]}`)

    for(var i=0; i<item.length; i++){
        const n = i;
        item[n].addEventListener("dblclick", ()=> {
            let janela = confirm("Do you want to delete it");
            if(janela == true){
                window.alert(`${cards[n]["nome"]} is being deleted`);
                deleteCard(cards[n]["id"]);
            }
        });
    }
}


export{ deleteCity }
