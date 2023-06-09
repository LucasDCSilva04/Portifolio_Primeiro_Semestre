showTitle();

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

function goHome(){
    document.querySelector(".title").style.opacity=0;
    document.querySelector(".content").style.opacity=0;
    document.querySelector("#btnHome").style.opacity=0;

    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 500);
};