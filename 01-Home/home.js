//Home Screen
home()

function home(){
    const div = document.createElement("div");
    div.classList.add("screenHome")
    
    const label = document.createElement("div")
    div.innerHTML =
        `
        <div class="home centralize">
            <div class="title">
                Avaliação do primeiro semestre de Análise e Desenvolvimento de Sistemas
            </div>
            <div class="subTitle">
                ESCOLHA A MATÉRIA
            </div>
        </div>

        <div class="choose">
            <div class="cards">
                <a class="go" onclick=goLP()>
                    <div class="move1">
                        <div class="card" id="card1">
                            <p class="tip">Linguagem de Programação</p>
                            <p class="second-text">Java</p>
                        </div>
                    </div>    
                </a>
                <a class="go" onclick=goBD()>
                    <div class="move2">
                        <div class="card" id="card2">
                            <p class="tip">Banco de Dados</p>
                            <p class="second-text">Postgree · DER · MER</p>
                        </div>
                    </div>
                </a>
                <a class="go" onclick=goRedes()>
                    <div class="move3">
                        <div class="card" id="card3">
                            <p class="tip">Redes de Computadores</p>
                            <p class="second-text">IP · DNS · TCP</p>
                        </div>
                    </div>    
                </a>
                <a class="go" onclick=goDataS()>
                    <div class="move4">
                        <div class="card" id="card4">
                            <p class="tip">Ciência de Dados</p>
                            <p class="second-text">PYTHON</p>
                        </div>
                    </div>
                </a>
                <a class="go" onclick=goAuto()>
                    <div class="move5">
                        <div class="card" id="card5">
                            <p class="tip">Automação Industrial</p>
                            <p class="second-text">C++ · Arduino · Eletrônica</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        `
    
    document.body.appendChild(div);

    setTimeout(() => homeFadeIn(),100);
    setTimeout(() => cardIn(),100);
}

function homeFadeIn(){
    document.querySelector(".home").style.opacity=1;
}

var i = 1;

function cardIn(){
        setTimeout(function() {
            document.querySelector(`#card${i}`).style.opacity=1;
            document.querySelector(`.move${i}`).style.transform="translateX(-100px)";
            incrementa();
        }, 250);
    }

function incrementa(){
    if(i<5)
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
    }, 600);   
}

function goBD(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../DataBase/database.html";
    }, 600);}

function goRedes(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../Network/network.html";
    }, 600);}

function goDataS(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../DataScience/datascience.html";
    }, 600);
}

function goAuto(){
    hideAll();
    setTimeout(() => {
        window.location.href = "../Automation/automation.html";
    }, 600);}
