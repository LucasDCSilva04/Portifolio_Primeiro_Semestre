
var btn = document.getElementById("btnAvaliar")
btn.addEventListener("click",hideLobby)

function hideLobby(){
    document.querySelector("#lobbyId")
            .classList.toggle('fade');

    setTimeout(() => showLoading(), 500);
}

function showLoading(){
    const btnAvaliar = document.getElementById("lobby")
    btnAvaliar.remove();

    const div = document.createElement("div");
    div.classList.add("loading", "centralize")
    
    const label = document.createElement("div")
    div.innerHTML = "<div id='loading'><div class='spinner'><div></div><div></div><div></div><div></div><div></div><div></div></div></div>"

    document.body.appendChild(div);

    setTimeout(() => fadeLoadingIn(), 500);

    setTimeout(() => fadeLoadingOut(), 3000);
}
function fadeLoadingIn(){
    document.querySelector("#loading")
            .classList.toggle('fadeIn');
}

function fadeLoadingOut(){
    document.querySelector("#loading")
            .classList.toggle('fadeOut');

    setTimeout(() => hideLoading(), 500);
}

function hideLoading(){
    const loadings = document.getElementsByClassName("loading");
    if(loadings.length){
        loadings[0].remove();
    }
}