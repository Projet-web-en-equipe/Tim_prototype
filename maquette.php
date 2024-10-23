

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maquette | page</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="burger">
        <div class="barre"></div>
        <div class="barre"></div>
        <div class="barre"></div>
    </div>
    <div id="logo">
        <a href="index.php">
            <img src="medias/TIMLogo.png" alt="TIMLogo">
        </a>
    </div>
    <header id="nav-menu">
        <section>
            <nav>
                <ul>
                    <li><a href="maquette.php">Projets</a></li>
                    <li><a href="maquette.php">Cours</a></li>
                    <li><a href="maquette.php">Prof</a></li>
                    <li><a href="maquette.php">Évènement</a></li>
                    <li><a href="maquette.php">Emplois</a></li>
                    <li><a href="maquette.php">Vie Étudiante</a></li>
                </ul>
            </nav>
        </section>
    </header>
    <main>
        <h1 id="titre">Cours</h1>
        <div class="content-wrapper">
            <section id="carrousel">
                <?php
                // Lire le fichier profs.json
                $jsonData = file_get_contents('./admin/profs.json');
                // Décoder le JSON en tableau associatif PHP
                $profs = json_decode($jsonData, true)['profs'];

                // Pour chaque professeur, générer une bannière
                foreach ($profs as $prof) {
                    // Vérifier si l'URL de l'image est définie et non vide
                    $image = 'medias/placeholder.png';

                    echo '<div class="banniere" data-cours="' . implode(", ", $prof['cours']) . '" data-fait="' . $prof['fait'] . '">';
                    echo '<img src="' . $image . '" alt="' . $prof['prenom'] . ' ' . $prof['nom'] . '">';
                    echo '<h2>' . $prof['prenom'] . ' ' . $prof['nom'] . '</h2>';
                    echo '</div>';
                }
                ?>

            </section>
            <section id="info">
                <button id="close-info" class="close-btn">X</button>
                <h1 id="prof-name">Nom du prof</h1>
                <img id="prof-image" src="./medias/placeholder.png" alt="placeholder">
                <div class="text">
                    <p id="prof-cours">cours</p>
                    <p id="prof-fait">fait</p>
                </div>
            </section>
        </div>
    </main>
    <footer></footer>
</body>
<script src="js/animation.js"></script>

</html>