window.addEventListener("load",showTitle());

function showTitle(){
    document.querySelector(".html").style.overflowY="hidden";
    setTimeout(() => {
        document.querySelector(".title").style.opacity=1;

        setTimeout(() => {
        document.querySelector(".title").style.height="10vh";
        document.querySelector(".title").style.fontSize="2em";
            }, 1500);
        showContent();
    }, 300);
}

function showContent(){
    setTimeout(() => {
        document.querySelector(".content").style.opacity=1;
        document.querySelector(".html").style.overflow="";
    }, 1800);
    createButton();
}

function createButton(){
    const button = document.createElement("div");
    button.classList.add("bottom")
    
    const label = document.createElement("div")
    button.innerHTML = `<div class="blur"></div>
                        <button id="btnHome">
                            INÍCIO
                        </button>`

    document.body.appendChild(button);

    setTimeout(() => {
            document.querySelector("#btnHome").style.opacity=1;
    }, 2000);

    document.querySelector("#btnHome").addEventListener("click", goHome);
}

var j=0;
var max1=7;

function back(){
    if(j>0){
        document.querySelector(`.s${j}`).style.opacity=0;
        document.querySelector(`.s${j}`).style.transform="translateX(+100vw)";
        document.querySelector(`.s${j-1}`).style.opacity=1;
        document.querySelector(`.s${j-1}`).style.transform="translateX(0vw)";
        j--;
        control();
    }else if(j==0){
        document.querySelector(`.s${j}`).style.transform="translateX(-2vw)"
        setTimeout(() => {
            document.querySelector(`.s${j}`).style.transform="translateX(3vw)"
            setTimeout(() => {
                document.querySelector(`.s${j}`).style.transform="translateX(0vw)"
            }, 200);
        }, 200);   
    }
}

function next(){
    if(j<max1){
        document.querySelector(`.s${j}`).style.opacity=0;
        document.querySelector(`.s${j}`).style.transform="translateX(-100vw)";
        document.querySelector(`.s${j+1}`).style.opacity=1;
        document.querySelector(`.s${j+1}`).style.transform="translateX(0vw)";
        j++;
        control();
    }else if(j==max1){
        document.querySelector(`.s${j}`).style.transform="translateX(2vw)"
        setTimeout(() => {
            document.querySelector(`.s${j}`).style.transform="translateX(-3vw)"
            setTimeout(() => {
                document.querySelector(`.s${j}`).style.transform="translateX(0vw)"
            }, 200);
        }, 200);
    }
}

function control(){
    if(j==0){
        document.querySelector(".btnBack").style.backgroundColor = "grey";
        document.querySelector(".btnBack").style.opacity=0.2;
    }
    if(j>0){
        document.querySelector(".btnBack").style.backgroundColor = "#0077ff";
        document.querySelector(".btnBack").style.opacity=1;
    }
    if(j==max1){
        document.querySelector(".btnNext").style.backgroundColor = "grey";
        document.querySelector(".btnNext").style.opacity=0.2;
    }
    if(j<max1){
        document.querySelector(".btnNext").style.backgroundColor = "#0077ff";
        document.querySelector(".btnNext").style.opacity=1;
    }
}

function goHome(){
    document.querySelector(".title").style.opacity=0;
    document.querySelector(".content").style.opacity=0;
    document.querySelector("#btnHome").style.opacity=0;

    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 500);
};