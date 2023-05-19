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

    setTimeout(() => fadeLobbyIn(),300);

    var btn = document.querySelector("#btnAvaliar")
    btn.addEventListener("click",fadeLobbyOut)
}
//Show Lobby
function fadeLobbyIn(){
    document.querySelector(".lobbyClass")
            .classList.toggle('fadeIn');
}
//Hide Lobby
function fadeLobbyOut(){
    document.querySelector(".lobbyClass")
            .classList.toggle('fadeOut');

    setTimeout(() => showLoading(), 400);
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

    setTimeout(() => fadeLoadingIn(),);
    setTimeout(() => fadeLoadingOut(), 2000);
}
function fadeLoadingIn(){
    document.querySelector(".loading")
            .classList.toggle('fadeIn');
}

function fadeLoadingOut(){
    document.querySelector(".loading")
            .classList.toggle('fadeOut');
    setTimeout(() => showWelcome(),500);
}

//Welcome

function showWelcome(){
    document.querySelector(".loading").remove();

    const div = document.createElement("div");
    div.classList.add("welcome", "centralize")
    
    const label = document.createElement("div")
    div.innerHTML = `<p>BEM-VINDO</p>`
    document.body.appendChild(div);

    setTimeout(() => fadeWelcomeIn(),);
    setTimeout(() => fadeWelcomeOut(), 2000);
}

function fadeWelcomeIn(){
    document.querySelector(".welcome")
            .classList.toggle('fadeIn');
}

function fadeWelcomeOut(){
    document.querySelector(".welcome")
            .classList.toggle('fadeOut');
    
    setTimeout(() => showCredits(),400);  
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

    setTimeout(() => fadeCreditsIn(),);
    setTimeout(() => fadeCreditsOut(), 3000);
}

function fadeCreditsIn(){
    document.querySelector(".credits")
            .classList.toggle('fadeIn');
}

function fadeCreditsOut(){
    document.querySelector(".credits")
            .classList.toggle('fadeOut');
    
    setTimeout(() => goHome(),350);
}

function goHome(){
    document.querySelector(".credits").remove();
    window.location.href = "../01-Home/home.html";
}
