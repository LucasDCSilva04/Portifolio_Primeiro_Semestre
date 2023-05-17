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
    setTimeout(() => home(),);
}

//Home Screen

    function home(){
        const div = document.createElement("div");
        div.classList.add("screenHome")
        
        const label = document.createElement("div")
        div.innerHTML =
        `<div class="home centralize">
            <div class="title">
                Avaliação do primeiro semestre de Análise e Desenvolvimento de Sistemas
            </div>
            <div class="subTitle">
                ESCOLHA A MATÉRIA
            </div>
        </div>

        <div class="scrollMe">
            <div class="scroll-snap-card">
                <a href="../ProgramLanguage/programlanguage.html">
                    <div class="slide One">
                        <p class="tip">Linguagem de Programação</p>
                    </div>
                </a>    
                <a href="../DataBase/databse.html">
                    <div class="slide Two">
                        <p class="tip">Banco de Dados</p>
                    </div>
                </a>
                <a href="../Automation/automation.html">
                    <div class="slide Three">
                        <p class="tip">Automação</p>
                    </div>
                </a>
                <a href="../DataScience/datascience.html">        
                    <div class="slide Four">
                        <p class="tip">Ciência de Dados</p>
                    </div>
                </a>  
                <a href="../Network/network.html">
                    <div class="slide Five">
                        <p class="tip">Rede de Computadores</p>
                    </div>
                </a>
            </div>
        </div>
        `
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
            setTimeout(() => home(),);
    }