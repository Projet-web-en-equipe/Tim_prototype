//////////////////////////////////////////////////////////////
/////////////////OLD SHIT DO NOT TOUCH!!!!!!!!!!!!!!!/////////
//////////////////////////////////////////////////////////////

//les variables de bases
var leCanvas = document.querySelector("canvas");
var ctx = leCanvas.getContext("2d");
//variable du personnage
var perso = {
  img: new Image(),
  urlImage: "medias/inshallah.png",
  x: 650,
  y: 300,
  newx: 650,
  newy: 300,
  largeur: 50,
  hauteur: 50,
  vitesse: 3,
};
perso.img.src = perso.urlImage;
//dimentions bord ile
var bordIle = {
  haut: { x: 650, y: 100 },
  bas: { x: 650, y: 600 },
  gauche: { x: 250, y: 350 },
  droite: { x: 1050, y: 350 },
};
//les obstacles
var listeObstacle = [
  {
    img: new Image(),
    urlImage: "medias/roche.png",
    x: 500,
    y: 400,
    largeur: 40,
    hauteur: 38,
    haut: { x: 520, y: 400 },
    bas: { x: 520, y: 438 },
    gauche: { x: 500, y: 419 },
    droite: { x: 540, y: 419 },
  },
];
listeObstacle.forEach((obstacle) => {
  obstacle.img.src = obstacle.urlImage;
});
//le guide
var guide = {
  img: new Image(),
  urlImage: "medias/GUIDE.png",
};
guide.img.src = guide.urlImage;
/////////prog pour que le l'ile fonctionne/////////
document.addEventListener("keydown", touche);
var render = setInterval(renderer, 1000 / 60);

var isGuide = false;
//fonction qui render l'ile
function renderer() {
  // tout effacer et redessiner le personnage
  ctx.clearRect(0, 0, leCanvas.width, leCanvas.height);
  ctx.drawImage(perso.img, perso.x, perso.y, perso.largeur, perso.hauteur);
  listeObstacle.forEach((obstacle) => {
    ctx.drawImage(obstacle.img, obstacle.x, obstacle.y);
  });
  if (isGuide) {
    ctx.drawImage(guide.img, 0, 0);
  }
  //verifier si le perso est au bord
  if (
    estIlAuBordPrecis(
      perso.newx,
      perso.newy,
      perso.largeur,
      perso.hauteur,
      bordIle
    )
  ) {
    //si le perso n'est pas au bord, les coordonnees temporaires sont valides et deviennent les vrais coordonnees
    perso.x = perso.newx;
    perso.y = perso.newy;
  }
  //reset les coordonnees temporaires
  perso.newx = perso.x;
  perso.newy = perso.y;
}
//fonction pour detecter les touches
function touche(event) {
  switch (event.key) {
    case "ArrowUp":
      perso.newy -= perso.vitesse;
      break;
    case "ArrowDown":
      perso.newy += perso.vitesse;
      break;
    case "ArrowLeft":
      perso.newx -= perso.vitesse;
      break;
    case "ArrowRight":
      perso.newx += perso.vitesse;
      break;
    case "g":
      isGuide = !isGuide;
  }
}

// function estIlAuBord(px, py, lx, hy) {
//   if (
//     py < -0.625 * px + 506.25 ||
//     py < 0.625 * (px + lx) - 306.25 ||
//     py + hy > 0.625 * px + 193.75 ||
//     py + hy > -0.625 * (px + lx) + 1006.25
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }
//fonction qui permet de savoir si le personnage est au bord
// px == perso.x, py == perso.y, lx == perso.longueur hy = perso.hauteur collision = l'objet qui compose les edges de l'ile
function estIlAuBordPrecis(px, py, lx, hy, collision) {
  if (
    py <
      trouverFonctionA(
        collision.haut.x,
        collision.haut.y,
        collision.droite.x,
        collision.droite.y
      ) *
        (px + lx) +
        trouverFonctionB(
          collision.haut.x,
          collision.haut.y,
          collision.droite.x,
          collision.droite.y
        ) ||
    py + hy >
      trouverFonctionA(
        collision.bas.x,
        collision.bas.y,
        collision.droite.x,
        collision.droite.y
      ) *
        (px + lx) +
        trouverFonctionB(
          collision.bas.x,
          collision.bas.y,
          collision.droite.x,
          collision.droite.y
        ) ||
    py + hy >
      trouverFonctionA(
        collision.gauche.x,
        collision.gauche.y,
        collision.bas.x,
        collision.bas.y
      ) *
        px +
        trouverFonctionB(
          collision.gauche.x,
          collision.gauche.y,
          collision.bas.x,
          collision.bas.y
        ) ||
    py <
      trouverFonctionA(
        collision.gauche.x,
        collision.gauche.y,
        collision.haut.x,
        collision.haut.y
      ) *
        px +
        trouverFonctionB(
          collision.gauche.x,
          collision.gauche.y,
          collision.haut.x,
          collision.haut.y
        )
  ) {
    return false;
  } else {
    return true;
  }
}

function collisionObstacle(px, py, lx, hy, collision) {
  if (
    py >
      trouverFonctionA(
        collision.haut.x,
        collision.haut.y,
        collision.droite.x,
        collision.droite.y
      ) *
        (px + lx) +
        trouverFonctionB(
          collision.haut.x,
          collision.haut.y,
          collision.droite.x,
          collision.droite.y
        ) ||
    py + hy <
      trouverFonctionA(
        collision.bas.x,
        collision.bas.y,
        collision.droite.x,
        collision.droite.y
      ) *
        (px + lx) +
        trouverFonctionB(
          collision.bas.x,
          collision.bas.y,
          collision.droite.x,
          collision.droite.y
        ) ||
    py + hy <
      trouverFonctionA(
        collision.gauche.x,
        collision.gauche.y,
        collision.bas.x,
        collision.bas.y
      ) *
        px +
        trouverFonctionB(
          collision.gauche.x,
          collision.gauche.y,
          collision.bas.x,
          collision.bas.y
        ) ||
    py >
      trouverFonctionA(
        collision.gauche.x,
        collision.gauche.y,
        collision.haut.x,
        collision.haut.y
      ) *
        px +
        trouverFonctionB(
          collision.gauche.x,
          collision.gauche.y,
          collision.haut.x,
          collision.haut.y
        )
  ) {
    console.log("collision true");
    return false;
  } else {
    console.log("collision false");
    return true;
  }
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
