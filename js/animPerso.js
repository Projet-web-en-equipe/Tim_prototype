var perso =  document.getElementById("inshallah");
var pos = -200;

var tempsAnim = setInterval(fonctionAnim, 1000 / 60);

function fonctionAnim(){
    if(perso.style.transform != "translateY(350px)"){
        pos++;
        perso.style.transform = "translateY(" + pos +  "px)"
    }
}