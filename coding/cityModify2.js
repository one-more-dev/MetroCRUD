//  CALL THE MODIFY SCREEN
//  ALTER IT"S TEXT, CHARGE IT'S PRE-INSERTED VALUES, INSERT IT'S NUMBER
import { loadCard } from "./main.js";
import { callPopup } from "./cityInsert.js";


async function editCity(ref){

    const city = document.querySelectorAll(ref);
    const cards = await loadCard();
    
    for(var item=0; item<city.length; item++){
        const i = item;
        console.log(city[i]);
        city[i].addEventListener("click", ()=>
            {callPopup("Edit","PUT",cards[i]["id"]);
            if(callPopup){
                document.querySelector(".fFoto").value = city[i].getElementsByTagName("img")[0].innerText;
                document.querySelector(".fCidade").value = city[i].getElementsByTagName("p")[0].innerText;
                document.querySelector(".fPais").value = city[i].getElementsByTagName("p")[1].innerText;
                document.querySelector(".fPop").value = city[i].getElementsByTagName("scan")[0].innerHTML;
            }
        });
    }
}

export { editCity }