//Home Screen
setTimeout(() => home(),);

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
                <a class="go" onclick=hideAll()>
                    <div class="card">
                        <p class="tip">Linguagem de Programação</p>
                        <p class="second-text">Java</p>
                    </div>
                </a>
                <a class="go" onclick=hideAll()>
                    <div class="card">
                        <p class="tip">Banco de Dados</p>
                        <p class="second-text">Postgree · DER · MER</p>
                    </div>
                </a>
                <a class="go" onclick=hideAll()>
                    <div class="card">
                        <p class="tip">Redes de Computadores</p>
                        <p class="second-text">IP · DNS · TCP</p>
                    </div>
                </a>
                <a class="go" onclick=hideAll()>
                    <div class="card">
                        <p class="tip">Ciência de Dados</p>
                        <p class="second-text">PYTHON</p>
                    </div>
                </a>
                <a class="go" onclick=hideAll()>
                    <div class="card">
                        <p class="tip">Automação Industrial</p>
                        <p class="second-text">C++ · Arduino · Eletrônica</p>
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

function cardIn(){
    document.querySelector(".cards").style.opacity=1; 
}

function homeFadeOut(){
    document.querySelector(".home").style.opacity=0;
}

function cardOut(){
    document.querySelector(".cards").style.opacity=0;
}

function hideAll(){
    homeFadeOut();
    cardOut();
}

function goLP(){
    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 400);   
}

function goBD(){
    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 400);}

function goRedes(){
    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 400);}

function goDataS(){
    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 400);
}

function goAuto(){
    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 400);}
