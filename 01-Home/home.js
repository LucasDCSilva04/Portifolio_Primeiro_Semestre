//Home Screen
window.addEventListener("load",home());

function home(){
    const div = document.createElement("div");
    div.classList.add("screenHome")
    
    const label = document.createElement("div")
    div.innerHTML =
        `
        <div class="home centralize">
            <div class="titleHome">
                Avaliação do primeiro semestre de Análise e Desenvolvimento de Sistemas
            </div>
            <div class="subTitleHome">
                ESCOLHA A MATÉRIA
            </div>
        </div>

        <div class="choose">
            <div class="cards">
                <a class="go" onclick=goLP())>
                    <div class="move1">
                        <div class="card" id="card1">
                            <p class="tip">Programação</p>
                            <p class="second-text">Python · Java · C · JavaScript</p>
                        </div>
                    </div>    
                </a>
                <a class="go" onclick=goBD()>
                    <div class="move2">
                        <div class="card" id="card2">
                            <p class="tip">Banco de Dados</p>
                            <p class="second-text">DER · MER · SQL · DQL · DML</p>
                        </div>
                    </div>
                </a>
                <a class="go" onclick=goRedes()>
                    <div class="move3">
                        <div class="card" id="card3">
                            <p class="tip">Redes de Computadores</p>
                            <p class="second-text">IP · DNS · TCP · DHCP</p>
                        </div>
                    </div>    
                </a>
                <a class="go" onclick=goDataS()>
                    <div class="move4">
                        <div class="card" id="card4">
                            <p class="tip">Ciência de Dados</p>
                            <p class="second-text">Matemática · Estatística Descritiva</p>
                        </div>
                    </div>
                </a>
                <a class="go" onclick=goAuto()>
                    <div class="move5">
                        <div class="card" id="card5">
                            <p class="tip">Automação Industrial</p>
                            <p class="second-text">\t Micro-Controlador · Eletrônica</p>
                        </div>
                    </div>
                </a>
                <a class="go" onclick=goIntro()>
                    <div class="move6">
                        <div class="card" id="card6">
                            <p class="tip">Ver Introdução Novamente</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        `
    
    document.body.appendChild(div);

    setTimeout(() => {
        document.querySelector(".home").style.opacity=1;
    },100);
    setTimeout(() => cardIn(),100);
}

var i = 1;

function cardIn(){
        setTimeout(function() {
            document.querySelector(`#card${i}`).style.opacity=1;
            document.querySelector(`.move${i}`).style.transform="translateX(-100px)";
            incrementa();
        }, 200);
    }

function incrementa(){
    if(i<6)
        i++;

    cardIn();
}

function hideAll(){
    document.querySelector(".cards").style.opacity=0;
    document.querySelector(".home").style.opacity=0;
}

function goLP(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../ProgramLanguage/programlanguage.html";
    }, 550);   
}

function goBD(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../DataBase/database.html";
    }, 550);}

function goRedes(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../Network/network.html";
    }, 550);}

function goDataS(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../DataScience/datascience.html";
    }, 550);
}

function goAuto(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../Automation/automation.html";
    }, 550);}

function goIntro(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../Intro.html";
    }, 550);}