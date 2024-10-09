var pseudoPerso =  document.getElementById("perso");
var pseudoVitesse = 3;
var pseudoVal = -1600;
var pseudoCanvas = document.querySelector("canvas");

var tempsAnim = setInterval(fonctionAnim, 1000 / 60);

function fonctionAnim(){
    if(pseudoVal <= 0){
        pseudoVal += pseudoVitesse;
        pseudoPerso.style.transform = "translate(" + checkXPerso() + "px , " + (checkYPerso() + pseudoVal )+ "px) RotateZ(" + pseudoVal + "deg)"
    } else {
        pseudoVal = 0;
        pseudoPerso.style.transform = "translate(" + checkXPerso() + "px , " + (checkYPerso() + pseudoVal )+ "px) RotateZ(" + pseudoVal + "deg)"
        clearInterval(tempsAnim);
    }
}

function checkXPerso(){
    var bhay = ((window.innerWidth - pseudoCanvas.width) / 2 + perso.x) - perso.largeur / 2;
    return bhay;
}

function checkYPerso(){
    var bhay2 = ((window.innerHeight - pseudoCanvas.height) / 2 + perso.y) - perso.hauteur;
    return bhay2;
}