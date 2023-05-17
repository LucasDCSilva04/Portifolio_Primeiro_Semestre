//Start

var btn = document.getElementById("btnAvaliar")
btn.addEventListener("click",hideLobby)

//Hide Lobby

function hideLobby(){
    document.querySelector("#lobbyId")
            .classList.toggle('fade');

    setTimeout(() => showLoading(), 500);
}

//Show LoadScreen

function showLoading(){
    const btnAvaliar = document.getElementById("lobby")
    btnAvaliar.remove();

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
    document.querySelector("#loading")
            .classList.toggle('fadeIn');
}

function fadeLoadingOut(){
    document.querySelector("#loading")
            .classList.toggle('fadeOut');

    setTimeout(() => hideLoading(),500);
}

function hideLoading(){
    const loadings = document.getElementsByClassName("loading");
    if(loadings.length){
        loadings[0].remove();
    }

    setTimeout(() => showWelcome(),300);
}

//Change Welcome

function showWelcome(){
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
    
    setTimeout(() => deleteWelcome(), 500);
}

function deleteWelcome(){
    document.querySelector(".welcome").remove();
    setTimeout(() => showCredits(),);
}

//My Credits

function showCredits(){
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
    
    setTimeout(() => deleteCredits(),300);
}

function deleteCredits(){
    document.querySelector(".credits").remove();
    setTimeout(() => goHome(),);
}
function goHome(){
    window.location.href = "../01-Home/home.html";
}