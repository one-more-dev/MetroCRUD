import { insertCard } from "./main.js";

const btn = document.querySelector(".inserir");


function newCityWindow(){
    const ncwindow = document.createElement("div");
    ncwindow.className = "newcity";
    ncwindow.innerHTML = `
    <form data-formulario>
        <div class="form_title">
            <h1>Insert a new city</h1>
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


async function insertCardValues(evento){
    evento.preventDefault();
    
    const photoField = document.querySelector(".fFoto").value;
    const nameField = document.querySelector(".fCidade").value;
    const countryField = document.querySelector(".fPais").value;
    const popField = document.querySelector(".fPop").value;

    try{
        console.log(photoField,nameField,countryField,popField);
        insertCard(photoField,nameField,countryField,popField);
        console.log("It's done");
    }catch(erro){
        console.log(`This is the error: ${erro}`);
        window.alert("Some empty field, maybe?");
    }
}


function buttonAction(referencia,corpo){
    const botao = document.querySelector(referencia);
    const acao = document.createElement("script");
    acao.innerText = botao.addEventListener("submit", evento => insertCardValues(evento));
    return corpo.appendChild(acao);
}


function callPopup(){
    const popupwindow = document.getElementsByTagName("body")[0];
    popupwindow.appendChild(newCityWindow());
    buttonAction("[data-formulario]",popupwindow);
}


btn.addEventListener("click", ()=> callPopup());
