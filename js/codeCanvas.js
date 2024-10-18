//les variables de bases
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
//variable des coorconnees
var listePoints = [
  {
    x: 400,
    y: 150,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
    tag: "Projets",
  },
  {
    x: 650,
    y: 300,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
    tag: "Cours",
  },
  {
    x: 600,
    y: 500,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
    tag: "Profs",
  },
  {
    x: 400,
    y: 700,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
    tag: "Emplois",
  },
  {
    x: 150,
    y: 550,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
    tag: "Évènements",
  },
  {
    x: 250,
    y: 250,
    rayon: 13,
    couleur: "rgb(255, 0, 0)",
    tag: "Vie étudiante",
  },
];
//variable du personnage
var perso = {
  img: new Image(),
  urlImage: "medias/ericG.png",
  x: 0,
  y: 0,
  largeur: 75,
  hauteur: 101,
  vitesse: 5,
  taille: 20,
  pos: 0,
  nbVignettes: 4,
  indexVignette: 0,
  sourceX: 0,
  gauche: false,
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
var render; //= setInterval(renderer, 1000 / 60);
var isGuide = false;
var enMouvement = false;
var cheminPerso = [];
var destination = 0;
//TEST
// var vPoint = 2;

//fonction qui render l'ile
function renderer() {
  // tout effacer
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //dessiner les cercles
  listePoints.forEach((circle) => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.rayon, 0, 2 * Math.PI);
    ctx.fillStyle = circle.couleur;
    ctx.fill();
  });
  //dessiner tous les tags des points
  listePoints.forEach((circle) => {
    ctx.font = "30px sans-serif";
    ctx.fillText(
      circle.tag,
      circle.x - circle.tag.replace(" ", "").length * 7.5,
      circle.y - 30
    );
  });
  //dessiner perso
  ctx.drawImage(
    perso.img,
    perso.sourceX,
    0,
    perso.largeur,
    perso.hauteur,
    perso.x - perso.largeur / 2,
    perso.y - perso.hauteur,
    perso.largeur,
    perso.hauteur
  );
  //dessiner guide
  if (isGuide) {
    ctx.drawImage(guide.img, 0, 0);
  }
  //detecter si le perso doit bouger
  if (enMouvement) {
    bougerPerso();
    animerPerso();
  }
  //TEST changer deplacement point 1
  // if (listePoints[1].x == 800) {
  //   vPoint = -2;
  // } else if (listePoints[1].x == 500) {
  //   vPoint = 2;
  // }
  // listePoints[1].x += vPoint;
}

//detecter les clicks
canvas.addEventListener("click", (event) => {
  const pos = {
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
  };
  listePoints.forEach((point) => {
    if (intersecte(pos, point)) {
      if (listePoints.indexOf(point) == perso.pos) {
        changerPage("/maquette.html");
      } else {
        cheminPerso = trouverChemin(listePoints.indexOf(point));
        enMouvement = true;
      }
    }
  });
});

function trouverChemin(nouvellePosition) {
  //declarer les variables pour checker clockwise
  var cheminGauche = [];
  var futurPosGauche = perso.pos;
  //et les var counter-clockwise
  var cheminDroite = [];
  var futurPosDroite = perso.pos;
  //accumuler le nbr de move pour arriver a destination clockwise
  while (futurPosGauche != nouvellePosition) {
    futurPosGauche++;
    if (futurPosGauche >= listePoints.length) {
      futurPosGauche = 0;
    }
    cheminGauche.push(futurPosGauche);
  }
  //accumuler le nbr de move pour arriver a destination counter-clockwise
  while (futurPosDroite != nouvellePosition) {
    futurPosDroite--;
    if (futurPosDroite < 0) {
      futurPosDroite = listePoints.length - 1;
    }
    cheminDroite.push(futurPosDroite);
  }
  //comparer les deux pour retourner celui qui est le plus petit (sils sont egaux clockwise va gagner)
  if (
    cheminGauche.length < cheminDroite.length ||
    cheminGauche.length == cheminDroite.length
  ) {
    return cheminGauche;
  } else if (cheminGauche.length > cheminDroite.length) {
    return cheminDroite;
  }
}

//fonction qui fait bouger les x et y du perso selon sa destination
function bougerPerso() {
  //trouver la direction du perso pour changer son modele
  trouverDirection(
    listePoints[perso.pos].x,
    listePoints[perso.pos].y,
    listePoints[cheminPerso[destination]].x,
    listePoints[cheminPerso[destination]].y
  );
  //trouver si le perso doit se deplacer a gauche ou a droite
  //et calculer l'angle de la fonction pour que la vitesse reste constante
  if (listePoints[perso.pos].x < listePoints[cheminPerso[destination]].x) {
    perso.x +=
      (perso.vitesse *
        trouverAngle(
          listePoints[perso.pos].x,
          listePoints[perso.pos].y,
          listePoints[cheminPerso[destination]].x,
          listePoints[cheminPerso[destination]].y
        )) /
      50;
  } else {
    perso.x -=
      (perso.vitesse *
        trouverAngle(
          listePoints[perso.pos].x,
          listePoints[perso.pos].y,
          listePoints[cheminPerso[destination]].x,
          listePoints[cheminPerso[destination]].y
        )) /
      50;
  }
  //faire monter ou descendre le perso selon une fonction lineaire pour qu'ils arrivent au point au meme moment
  perso.y =
    trouverFonctionA(
      listePoints[perso.pos].x,
      listePoints[perso.pos].y,
      listePoints[cheminPerso[destination]].x,
      listePoints[cheminPerso[destination]].y
    ) *
    perso.x +
    trouverFonctionB(
      listePoints[perso.pos].x,
      listePoints[perso.pos].y,
      listePoints[cheminPerso[destination]].x,
      listePoints[cheminPerso[destination]].y
    );
  //si le perso est arriver a sa premiere destination:
  if (arriveAuPoint(perso, listePoints[cheminPerso[destination]])) {
    //faire que la pos du perso est la meme que le point
    perso.pos = cheminPerso[destination];
    //s'assurer que les coords du perso soient les meme que celle du point
    perso.x = listePoints[cheminPerso[destination]].x;
    perso.y = listePoints[cheminPerso[destination]].y;
    //si le perso est au bon point:
    if (cheminPerso[cheminPerso.length - 1] == perso.pos) {
      enMouvement = false;
      destination = 0;
      //savoir quel direction du idle utiliser
      if(perso.gauche){
        perso.urlImage = "medias/ericG.png"
      } else {
        perso.urlImage = "medias/ericD.png"
      }
      perso.img.src = perso.urlImage;
    } else {
      //sinon il se deplace a un point supplementaire
      destination += 1;
    }
  }
}

function trouverDirection(cx1, cy1, cx2, cy2) {
  //trouver la direction du personnage
  //var haut = false;
  //var angle = trouverAngle(cx1, cy1, cx2, cy2); //testpour trouver angle
  if (listePoints[perso.pos].x > listePoints[cheminPerso[destination]].x) {
    perso.gauche = true;
  } else {
    perso.gauche = false;
  }
  if (perso.gauche) {
    perso.urlImage = "medias/ericMarcheG.png"
  } else {
    perso.urlImage = "medias/ericMarcheD.png"
  }
  perso.img.src = perso.urlImage;
  //TEST pour trouver la direction avec angle exacte
  // if (listePoints[perso.pos].y > listePoints[cheminPerso[destination]].y) {
  //   haut = true;
  // } else {
  //   haut = false;
  // }
  //
  // if (!haut && gauche && angle > 10) {
  //   perso.urlImage = "medias/inshallah1.png";
  // } else if (!haut && angle < 10) {
  //   perso.urlImage = "medias/inshallah2.png";
  // } else if (!haut && !gauche && angle > 10) {
  //   perso.urlImage = "medias/inshallah3.png";
  // } else if (gauche && angle < 10) {
  //   perso.urlImage = "medias/inshallah4.png";
  // } else if (!gauche && angle < 10) {
  //   perso.urlImage = "medias/inshallah6.png";
  // } else if (gauche && haut && angle > 10) {
  //   perso.urlImage = "medias/inshallah7.png";
  // } else if (haut && angle < 10) {
  //   perso.urlImage = "medias/inshallah8.png";
  // } else if (!gauche && haut && angle > 10) {
  //   perso.urlImage = "medias/inshallah9.png";
  // }
  // perso.img.src = perso.urlImage;
}

//fonction pour dessiner le perso
function animerPerso() {
  if (enMouvement) {
    perso.sourceX = perso.indexVignette * perso.largeur;
  } else {
    perso.sourceX = 0;
    perso.indexVignette = 0; //A SUPPRIMER
  }

  perso.indexVignette += 1;

  if (perso.indexVignette >= perso.nbVignettes) {
    perso.indexVignette = 0;
  }
}

//fonction changer de page
function changerPage(url) {
  window.location.href = url;
}

//fonction pour detecter un click dans un cercle
function intersecte(click, cercle) {
  return (
    Math.sqrt((click.x - cercle.x) ** 2 + (click.y - cercle.y) ** 2) <
    cercle.rayon
  );
}

//fonction pour detecter quand le perso est assez proche du point pour l'arreter
function arriveAuPoint(perso, cercle) {
  return (
    Math.sqrt((perso.x - cercle.x) ** 2 + (perso.y - cercle.y) ** 2) <
    perso.vitesse
  );
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

//fonction pour trouver l'angle de la fonction
function trouverAngle(cx1, cy1, cx2, cy2) {
  var coteX = Math.abs(cx1 - cx2);
  var coteY = Math.abs(cy1 - cy2);
  return (Math.atan(coteX / coteY) * 180) / Math.PI;
}
