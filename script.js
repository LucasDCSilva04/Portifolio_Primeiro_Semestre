//Start
setTimeout(() => Lobby(), 1000);

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

//Hide Lobby
function fadeLobbyOut(){
    document.querySelector(".lobbyClass").style.opacity=0;
    setTimeout(() => showLoading(), 400);
    document.querySelector(".lobby").remove();
}

//Show LoadScreen

function showLoading(){
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
        setTimeout(() => showWelcome(),500);
        document.querySelector(".loading").remove();
    }, 2000);
}
//Welcome

function showWelcome(){
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
        setTimeout(() => showCredits(),400);
        document.querySelector(".welcome").remove();
    }, 2000);
}

//My Credits

function showCredits(){
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
        setTimeout(() => goHome(),350);
        document.querySelector(".credits").remove();
    }, 3000);
}

function goHome(){
    window.location.href = "../01-Home/home.html";
}