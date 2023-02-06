/*

UPDATE MODULE, USELESS FOR A WHILE

*/

var interactiveText = (ref) => {

    const cityText = document.querySelectorAll(ref);
    //const city = document.querySelectorAll(`.cidade ${img ou p}`);
    const cc = document.querySelectorAll(".cidade")[0];
    console.log(cc.getElementsByTagName("p")[0]);


    for(var item=0; item<cityText.length; item++){
        const i = item;
        cityText[i].addEventListener("dblclick", ()=>
            {editText(ref,i,cityText[i].innerText,cityText[i]),
            window.alert(i)});
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
