//Home Screen
setTimeout(() => home(), 1000);

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
                <a href="../ProgramLanguage/programlanguage.html">
                    <div class="card card1">
                        <p class="tip">Linguagem de Programação</p>
                        <p class="second-text">Java</p>
                    </div>
                </a>
                <a href="../DataBase/database.html">
                    <div class="card card2">
                        <p class="tip">Banco de Dados</p>
                        <p class="second-text">Postgree · DER · MER</p>
                    </div>
                </a>
                <a href="../Network/network.html">
                    <div class="card card3">
                        <p class="tip">Redes de Computadores</p>
                        <p class="second-text">IP · DNS · TCP</p>
                    </div>
                </a>
                <a href="../DataScience/datascience.html">
                    <div class="card card4">
                        <p class="tip">Ciência de Dados</p>
                        <p class="second-text">PYTHON</p>
                    </div>
                </a>
                <a href="../Automation/automation.html">
                    <div class="card card5">
                        <p class="tip">Automação Industrial</p>
                        <p class="second-text">C++ · Arduino · Eletrônica</p>
                    </div>
                </a>
            </div>
        </div>
        `
    document.body.appendChild(div);

    setTimeout(() => cardIn(), 2000);
}

function homeFadeIn(){

}

function homeFadeOut(){

}

function cardIn(){
    for(i=1;i<6;i++){
        document.getElementsByClassName('card'+i)[0].style.opacity = 0;
    }
}
function cardOut(){

}