btn = document.querySelector(".inserir");

function newCityWindow(){
    const ncwindow = document.createElement("div");
    ncwindow.className = "newcity";
    ncwindow.innerHTML = `
    <form>
        <div class="form_title">
            <h1>Insert a new city</h1>
        </div>
        <div class="form_body">
            <p><label>Load a photo: </label><input type="file" style="width: 100px"></p>
            <p><label for="cidade">City: </label><input type="text" name="cidade"></input></p>
            <p><label for="pais">Country: </label><input type="text" name="pais"></input></p>
            <p><label for="pop">Population (millions): </label><input type="number" name="pop" style="width:60px"></input></p>
            <p class="form_button" style="text-align:center"><button>Confirm</button><button>Cancel</button></p>
        </div>
    </form>`;
    return ncwindow;
}


const popupwindow = document.getElementsByTagName("body")[0];


btn.addEventListener("click", ()=> popupwindow.appendChild(newCityWindow()));
