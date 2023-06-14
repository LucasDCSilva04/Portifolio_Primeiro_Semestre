//Start
setTimeout(() => Lobby(), 300);

function Lobby(){
    const div = document.createElement("div");
    div.classList.add("lobby", "centralize")
    
    const label = document.createElement("div")
    div.innerHTML = `<div class="lobbyClass">
                        <p>Olá!</p>
                        <button id="btnAvaliar">
                            INICIAR
                        </button>
                     </div>`

    document.body.appendChild(div);

    setTimeout(() => {
        document.querySelector(".lobbyClass").style.opacity=1;
    },300);

    var btn = document.querySelector("#btnAvaliar")
    btn.addEventListener("click",fadeLobbyOut)
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
       fadeLobbyOut();
    }
 }, false);

//Hide Lobby
function fadeLobbyOut(){
    document.querySelector("html").style.cursor="none";
    document.querySelector(".lobbyClass").style.opacity=0;
    setTimeout(() => showLoading(), 350);
}

//Show LoadScreen

function showLoading(){
    document.querySelector(".lobby").remove();

    const div = document.createElement("div");
    div.classList.add("loading", "centralize")
    
    const label = document.createElement("div")
    div.innerHTML = `<div id='loading'>
                        <div class='spinner'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                     </div>`
    document.body.appendChild(div);

    setTimeout(() => {
        document.querySelector(".loading").style.opacity=1;
    },);
    setTimeout(() => {
        document.querySelector(".loading").style.opacity=0;
        setTimeout(() => showWelcome(),300);
    }, 900);
}
//Welcome

function showWelcome(){
    document.querySelector(".loading").remove();

    const div = document.createElement("div");
    div.classList.add("welcome", "centralize")
    
    const label = document.createElement("div")
    div.innerHTML = `<p>BEM-VINDO</p>`
    document.body.appendChild(div);

    setTimeout(() => {
        document.querySelector(".welcome").style.opacity=1;
    },);
    setTimeout(() => {
        document.querySelector(".welcome").style.opacity=0;
        setTimeout(() => showCredits(),350);  
    }, 1500);
}

//My Credits

function showCredits(){
    document.querySelector(".welcome").remove();

    const div = document.createElement("div");
    div.classList.add("credits", "centralize")
    
    const label = document.createElement("div")
    div.innerHTML = `<p class="createBy"> CRIADO POR</p>
                     <p class="name">Lucas Dias Custodio da Silva</p>`
    document.body.appendChild(div);

    setTimeout(() => {
        document.querySelector(".credits").style.opacity=1;
    },);
    setTimeout(() => {
        document.querySelector(".credits").style.opacity=0;
        setTimeout(() => goHome(),300);
    }, 1500);
}

function goHome(){
    document.querySelector(".credits").remove();
    window.location.href = "../01-Home/home.html";
}