//les variables de bases
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
//variable des coorconnees
var listePoints = [
  {
    x: 650,
    y: 200,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
  },
  {
    x: 900,
    y: 350,
    rayon: 13,
    couleur: "rgb(255, 0, 0)"
  },
  {
    x: 650,
    y: 500,
    rayon: 13,
    couleur: "rgb(255, 0, 0)"
  },
  {
    x: 400,
    y: 350,
    rayon: 13,
    couleur: "rgb(255, 0, 0)"
  },
]
//variable du personnage
var perso = {
  img: new Image(),
  urlImage: "medias/inshallah.png",
  x: 650,
  y: 350,
  largeur: 50,
  hauteur: 50,
  vitesse: 5,
  pos: 0,
};
perso.img.src = perso.urlImage;
//position init perso
perso.x = listePoints[perso.pos].x;
perso.y = listePoints[perso.pos].y;
//le guide
var guide = {
  img: new Image(),
  urlImage: "medias/GUIDE.png",
};
guide.img.src = guide.urlImage;
/////////prog pour que le l'ile fonctionne/////////
var render = setInterval(renderer, 1000 / 60);
var isGuide = true;
var enMouvement = false;
var cheminPerso = []
var destination = 0;
//detecter les clicks
canvas.addEventListener("click", (event) =>{
  const pos = {
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
  }
  listePoints.forEach((point) =>{
      if(intersecte(pos, point) && listePoints.indexOf(point) != perso.pos){
         cheminPerso = trouverChemin(listePoints.indexOf(point));
        enMouvement = true;
      }
  })
});

//fonction qui render l'ile
function renderer() {
  // tout effacer
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //dessiner les cercles
  listePoints.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.rayon, 0, 2 * Math.PI);
    ctx.fillStyle = circle.couleur;
    ctx.fill()
  });
  //dessiner perso
  ctx.drawImage(perso.img, perso.x - perso.largeur/2, perso.y - perso.hauteur/2);
  //dessiner guide
  if (isGuide) {
    ctx.drawImage(guide.img, 0, 0);
  }
  //detecter si le perso doit bouger
  if(enMouvement){
    bougerPerso();
  }
}

function trouverChemin(nouvellePosition){
  var chemin = [];
  var futurPos = perso.pos;
  while(futurPos != nouvellePosition){
    futurPos++
    if(futurPos >= listePoints.length){
      futurPos = 0;
    }
    chemin.push(futurPos);
  }
  return chemin;
}

function bougerPerso(){
  console.log(perso.pos);
  if(listePoints[perso.pos].x < listePoints[cheminPerso[destination]].x){
    perso.x += perso.vitesse;
  } else {
    perso.x -= perso.vitesse;
  }
  perso.y = trouverFonctionA(
    listePoints[perso.pos].x, 
    listePoints[perso.pos].y, 
    listePoints[cheminPerso[destination]].x, 
    listePoints[cheminPerso[destination]].y
  ) * perso.x + trouverFonctionB(
      listePoints[perso.pos].x, 
      listePoints[perso.pos].y, 
      listePoints[cheminPerso[destination]].x, 
      listePoints[cheminPerso[destination]].y
    );
    if(perso.x == Math.round(listePoints[cheminPerso[destination]].x) && perso.y == Math.round(listePoints[cheminPerso[destination]].y)){
      perso.pos = cheminPerso[destination];
      perso.x = listePoints[cheminPerso[destination]].x;
      perso.y = listePoints[cheminPerso[destination]].y;
      console.log(perso.pos);
      if(cheminPerso[cheminPerso.length-1] == perso.pos){
        enMouvement = false;
        destination = 0
      } else{
        destination += 1;
      }
    }
};

//fonction pour detecter un click dans un cercle
function intersecte(click, cercle){
  return Math.sqrt((click.x-(cercle.x)) ** 2 + (click.y - (cercle.y)) ** 2) < cercle.rayon;
}

//fonction pour trouver le a dans la fonction lineaire d'une collision
function trouverFonctionA(cx1, cy1, cx2, cy2) {
  var a = (cy2 - cy1) / (cx2 - cx1);
  return a;
}

//fonction pour trouver le b dans la fonction lineaire d'une collision
function trouverFonctionB(cx1, cy1, cx2, cy2) {
  var a = (cy2 - cy1) / (cx2 - cx1);
  var b = cy1 - a * cx1;
  return b;
}