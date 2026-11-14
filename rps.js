var userchoice = "";

var compchoice = "";



function clickpaper(){
    userchoice = "paper";
    document.getElementById("Paperuser").classList.add("clickpaper");
    compturn();
}

function clickscis(){
    userchoice = "scis";
    document.getElementById("Scisuser").classList.add("clickscis");
    compturn();
}

function clickrock(){
    userchoice = "rock";
    document.getElementById("Rockuser").classList.add("clickrock");

    document.getElementsByClassName("result")[0].textContent = "Error";
    compturn();
}


function compturn(){
    var rn = Math.random();
    console.log(rn);
    var no = 2;
    if(rn < 0.33333333){
        no = 1;
    }
    else if(rn > 0.6666666666){
        no = 3;
    }
    console.log(no);
    if(no == 1){
        compchoice = "rock";
        document.getElementById("comprock").classList.add("comprock");
    }
    else if(no == 2){
        compchoice = "scis";
        document.getElementById("compScis").classList.add("compscis");
    }
    else if(no == 3){
        compchoice = "paper";
        document.getElementById("comppaper").classList.add("comppaper");
    }
    
    if(compchoice == userchoice){
        document.getElementsByClassName("result")[0].textContent = "TIE";
    }
    else if(userchoice == "rock"){

        if(compchoice == "scis"){
            document.getElementsByClassName("result")[0].textContent = "You Won";
        }
         else{
            document.getElementsByClassName("result")[0].textContent = "You Lost";
        }

    }

        else if(userchoice == "paper"){

        if(compchoice == "scis"){
            document.getElementsByClassName("result")[0].textContent = "You Lost";
        }
         else{
            document.getElementsByClassName("result")[0].textContent = "You Won";
        }

    }

        else if(userchoice == "scis"){

        if(compchoice == "paper"){
            document.getElementsByClassName("result")[0].textContent = "You Won";
        }
         else{
            document.getElementsByClassName("result")[0].textContent = "You Lost";
        }

    }
    document.getElementsByClassName("result")[0].style.opacity = "1";
    document.getElementsByClassName("RESTART")[0].style.opacity = "1";
    document.getElementsByClassName("result")[0].classList.add("showresult");
}


function restart(){
    console.log("Restart");
    document.getElementById("comprock").classList.remove("comprock");
    document.getElementById("compScis").classList.remove("compscis");
    document.getElementById("comppaper").classList.remove("comppaper");

    document.getElementById("Paperuser").classList.remove("clickpaper");
    document.getElementById("Scisuser").classList.remove("clickscis");
    document.getElementById("Rockuser").classList.remove("clickrock");

    document.getElementsByClassName("result")[0].style.opacity = "0";
    document.getElementsByClassName("RESTART")[0].style.opacity = "0";
    document.getElementsByClassName("result")[0].classList.remove("showresult");

}