<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Favicon links pour chaque resolution... on dirait qu'y sont stretched... -->
    <link
      rel="icon"
      href="medias/favicon16px.png"
      sizes="16x16"
      type="image/png"
    />
    <link
      rel="icon"
      href="medias/favicon32px.png"
      sizes="32x32"
      type="image/png"
    />
    <link
      rel="icon"
      href="medias/favicon48px.png"
      sizes="48x48"
      type="image/png"
    />

    <!--Rajout des icônes Google -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=visibility"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=close"
    />

    <link rel="stylesheet" href="normalize.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://use.typekit.net/hez6hsh.css" />
    <title>Techniques d'intégration Multimédia Maisonneuve</title>
    <!--Rajout Polices adobe -->
    <link rel="stylesheet" href="https://use.typekit.net/nih6pil.css" />
  </head>

  <body id="main">
    <header>
      <div id="burger">
        <div class="barre"></div>
        <div class="barre"></div>
        <div class="barre"></div>
      </div>

      <div id="logo">
        <a href="index.php">
          <img src="medias/timMobile.png" alt="TIM Logo" />
        </a>
      </div>

      <section id="nav-menu">
        <nav>
          <ul>
            <li>
              <a href="maquette.php">Projets</a>
              <img class="icone-nav" src="medias/Cours.png" />
            </li>
            <li>
              <a href="maquette.php">Cours</a>
            </li>
            <li>
              <a href="maquette.php">Profs</a>
              <img class="icone-nav" src="medias/Profs.png" />
            </li>
            <li><a href="maquette.php">Évènements</a></li>
            <li>
              <a href="maquette.php">Futur</a>
              <img class="icone-nav" src="medias/Emplois.png" />
            </li>
            <li>
              <a href="maquette.php">Vie Étudiante</a>
              <img class="icone-nav" src="medias/vieEtudiante.png" />
            </li>
          </ul>
        </nav>
      </section>
    </header>
    <!-- <div id="ctnAnim">
      <div id="ctnTitre">
        <h1 class="titreH2 anim1">Bienvenue</h1>
        <h1 class="titreH2 anim2">au</h1>
        <h1 class="titreH1 anim3">TIM</h1>
      </div>
      <h3 class="titreH3 anim4">Maisonneuve</h3>
    </div> -->
    <!-- <img src="medias/inshallah.png" alt="inshallah" id="inshallah" /> -->
    <canvas width="800" height="800"></canvas>
    <input type="checkbox" name="checkboxFooter" id="checkFoot" />
    <label for="checkFoot">
      <footer>
        <div class="conteneurSousTitre">
          <span class="material-symbols-rounded"> close </span>
          <h3>
            <span class="material-symbols-outlined"> visibility </span>Click ici
            pour plus d'infos!
          </h3>
        </div>

        <div class="liens">je suis fuckin tanner</div>
        <div class="sociaux">jai besoin de drogues</div>
        <div class="equipe">de la part de toute lequipe</div>
      </footer>
    </label>
  </body>
  <script src="js/codeAccueil.js"></script>
  <script src="js/codeCanvas.js"></script>
  <script src="js/animation.js"></script>
  <script src="js/fermetureMenus.js"></script>
  <!-- <script src="js/animPerso.js"></script> -->
</html>
