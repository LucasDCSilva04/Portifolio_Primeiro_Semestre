//Home Screen
setTimeout(() => home(), 1000);

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
        <div class="cards">
            <a href="../ProgramLanguage/programlanguage.html">
                <div class="card">
                    <p class="tip">Linguagem de Programação</p>
                    <p class="second-text">Lorem Ipsum</p>
                </div>
            </a>
            <a href="../DataBase/database.html">
                <div class="card">
                    <p class="tip">Banco de Dados</p>
                    <p class="second-text">Lorem Ipsum</p>
                </div>
            </a>
            <a href="../Network/network.html">
                <div class="card">
                    <p class="tip">Redes de Computadores</p>
                    <p class="second-text">Lorem Ipsum</p>
                </div>
            </a>
            <a href="../DataScience/datascience.html">
                <div class="card">
                    <p class="tip">Ciência de Dados</p>
                    <p class="second-text">Lorem Ipsum</p>
                </div>
            </a>
            <a href="../Automation/automation.html">
                <div class="card">
                    <p class="tip">Automação Industrial</p>
                    <p class="second-text">Lorem Ipsum</p>
                </div>
            </a>
        </div>
    </div>
    `
    document.body.appendChild(div);
}