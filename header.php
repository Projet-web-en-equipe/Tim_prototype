<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Techniques d'intégration Multimédia Maisonneuve</title>
  <?php wp_head(); ?>

</head>

<body>
  <header>
    <div id="burger">
      <div class="barre"></div>
      <div class="barre"></div>
      <div class="barre"></div>
    </div>
    <div id="logo">
      <a href="<?php echo home_url(); ?>">
        <img src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/timMobile.png" alt="TIM Logo" />
      </a>
    </div>


    <section id="nav-menu">
    <nav>
        <ul>
            <li>
                <a href="<?php echo get_category_link(get_category_by_slug('cours')->term_id); ?>">Projets</a>
                <img class="icone-nav" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/Cours.png" />
            </li>
            <li>
                <a href="<?php echo get_category_link(get_category_by_slug('cours')->term_id); ?>">Cours</a>
            </li>
            <li>
                <a href="<?php echo get_category_link(get_category_by_slug('cours')->term_id); ?>">Profs</a>
                <img class="icone-nav" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/Profs.png" />
            </li>
            <li><a href="<?php echo get_category_link(get_category_by_slug('cours')->term_id); ?>">Évènements</a></li>
            <li>
                <a href="<?php echo get_category_link(get_category_by_slug('cours')->term_id); ?>">Futur</a>
                <img class="icone-nav" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/Emplois.png" />
            </li>
            <li>
                <a href="<?php echo get_category_link(get_category_by_slug('cours')->term_id); ?>">Vie Étudiante</a>
                <img class="icone-nav" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/vieEtudiante.png" />
            </li>
        </ul>
    </nav>
</section>


  </header>