var pseudoPerso =  document.getElementById("perso");
var pseudoVitesse = 3;
var pseudoPosX = perso.x;
var pseudoPosY = -600;
var pseudoRot = 0;
var pseudoCanvas = document.querySelector("canvas");

var tempsAnim = setInterval(fonctionAnim, 1000 / 60);

function fonctionAnim(){
    if(pseudoPosY < checkYPerso()){
        console.log("ok")
        pseudoPosY += pseudoVitesse;
        pseudoRot += 5;
        pseudoPerso.style.transform = "translate(" + checkXPerso() + "px , " + pseudoPosY + "px) RotateZ(" + pseudoRot + "deg)"
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