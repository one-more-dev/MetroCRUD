//  PRIMEIRAMENTE, vamos realizar as ações por clique (FEITO)
//  SEGUNDO, individualizar essas ações pra cada item: cada um deve ter algo diferente (FEITO)

//  TERCEIRO, permitir a edição do item que eu clico


var interactiveText = (ref) => {

    const cityText = document.querySelectorAll(ref);    
    for(var item=0; item < cityText.length; item++){
        const i = item;
        console.log(i,cityText[i].innerText);
        cityText[item].addEventListener("dblclick", ()=> 
            editText(ref,i,cityText[i].innerText,cityText[i]));
    }
}


function editText(elemento,x=0,textointerno,caller){

    const editbox = document.createElement("input");
    const place = document.querySelectorAll(elemento)[x];

    editbox.className = "editbox";
    editbox.value = textointerno;
    editbox.addEventListener("blur", () => {
        caller.innerText = editbox.value;
        editbox.style.display="none";
    } );
    return place.appendChild(editbox);
}


export { interactiveText };
