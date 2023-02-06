import { insertCard } from "./main.js";

const btn = document.querySelector(".inserir");


function newCityWindow(metodo){
    const ncwindow = document.createElement("div");
    ncwindow.className = "newcity";
    ncwindow.innerHTML = `
    <form data-formulario>
        <div class="form_title">
            <h1>${metodo} a city</h1>
        </div>
        <div class="form_body">
            <p><label>Load a photo: </label><input type="file" class="fFoto" style="width: 100px"></p>
            <p><label for="cidade">City: </label><input type="text" class="fCidade" name="cidade"></input></p>
            <p><label for="pais">Country: </label><input type="text" class="fPais" name="pais"></input></p>
            <p><label for="pop">Population (millions): </label><input type="number" class="fPop" name="pop" style="width:60px"></input></p>
            <p class="form_button" style="text-align:center">
                <button type="submit" class="btn_confirm" data-formbutton="confirm">Confirm</button>
                <button type="button" onclick="document.querySelector('.newcity').remove()" class="btn_cancel" data-formbutton="cancel">Cancel</button>
            </p>
        </div>
    </form>`;
    return ncwindow;
}


async function insertCardValues(evento,putpost,item){
    evento.preventDefault();
    
    const photoField = document.querySelector(".fFoto").value;
    const nameField = document.querySelector(".fCidade").value;
    const countryField = document.querySelector(".fPais").value;
    const popField = document.querySelector(".fPop").value;

    try{
        insertCard(putpost,item,photoField,nameField,countryField,popField);
    }catch(erro){
        console.log(`This is the error: ${erro}`);
        window.alert("Some empty field, maybe?");
    }
}


function buttonAction(referencia,corpo,putpost,itemEditar){
    const botao = document.querySelector(referencia);
    const acao = document.createElement("script");
    acao.innerText = botao.addEventListener("submit", evento =>
        insertCardValues(evento,putpost,itemEditar));
    return corpo.appendChild(acao);
}


function callPopup(metodo,putpost,itemEditar=""){
    const popupwindow = document.getElementsByTagName("body")[0];
    popupwindow.appendChild(newCityWindow(metodo));
    buttonAction("[data-formulario]",popupwindow,putpost,itemEditar,itemEditar);
}


btn.addEventListener("click", ()=> callPopup("Insert","POST"));


export { callPopup }