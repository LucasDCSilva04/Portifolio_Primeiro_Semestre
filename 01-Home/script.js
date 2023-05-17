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
        <div class="scroll-snap-card">
            
            <div class="slide one container">
                <div class="field">
                    <div class="scroll"></div>
                </div>
            </div>

            <a href="../ProgramLanguage/programlanguage.html">
                <div class="slide two">
                    <p class="tip">Linguagem de Programação</p>
                </div>
            </a>    
            <a href="../DataBase/databse.html">
                <div class="slide three">
                    <p class="tip">Banco de Dados</p>
                </div>
            </a>
            <a href="../Automation/automation.html">
                <div class="slide four">
                    <p class="tip">Automação</p>
                </div>
            </a>
            <a href="../DataScience/datascience.html">        
                <div class="slide five">
                    <p class="tip">Ciência de Dados</p>
                </div>
            </a>  
            <a href="../Network/network.html">
                <div class="slide seven">
                    <p class="tip">Rede de Computadores</p>
                </div>
            </a>
            <a href="../intro.html">
                <div class="slide seven">
                    <p class="tip">Ver introdução novamente</p>
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