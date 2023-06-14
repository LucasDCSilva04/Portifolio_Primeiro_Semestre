var j=0;
var max1=9;

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

var k=0;
var max2 = 15;

function back2(){
    if(k>0){
        document.querySelector(`.c${k}`).style.opacity=0;
        document.querySelector(`.c${k}`).style.transform="translateX(+100vw)";
        document.querySelector(`.c${k-1}`).style.opacity=1;
        document.querySelector(`.c${k-1}`).style.transform="translateX(0vw)";
        k--;
        control2();
    }else if(k==0){
        document.querySelector(`.c${k}`).style.transform="translateX(-2vw)"
        setTimeout(() => {
            document.querySelector(`.c${k}`).style.transform="translateX(3vw)"
            setTimeout(() => {
                document.querySelector(`.c${k}`).style.transform="translateX(0vw)"
            }, 200);
        }, 200);
    }
}

function next2(){
    if(k<max2){
        document.querySelector(`.c${k}`).style.opacity=0;
        document.querySelector(`.c${k}`).style.transform="translateX(-100vw)";
        document.querySelector(`.c${k+1}`).style.opacity=1;
        document.querySelector(`.c${k+1}`).style.transform="translateX(0vw)";
        k++;
        control2();
    }else if(k==max2){
        document.querySelector(`.c${k}`).style.transform="translateX(2vw)"
        setTimeout(() => {
            document.querySelector(`.c${k}`).style.transform="translateX(-3vw)"
            setTimeout(() => {
                document.querySelector(`.c${k}`).style.transform="translateX(0vw)"
            }, 200);
        }, 200);
    }
}

function control2(){
    if(k==0){
        document.querySelector(".btnBack2").style.backgroundColor = "grey";
        document.querySelector(".btnBack2").style.opacity=0.2;
    }
    if(k>0){
        document.querySelector(".btnBack2").style.backgroundColor = "#0077ff";
        document.querySelector(".btnBack2").style.opacity=1;
    }
    if(k==max2){
        document.querySelector(".btnNext2").style.backgroundColor = "grey";
        document.querySelector(".btnNext2").style.opacity=0.2;
    }
    if(k<max2){
        document.querySelector(".btnNext2").style.backgroundColor = "#0077ff";
        document.querySelector(".btnNext2").style.opacity=1;
    }
}