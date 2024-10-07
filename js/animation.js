const burger = document.getElementById('burger');
const barres = document.querySelectorAll('#burger .barre');
const navSection = document.getElementById('nav-menu');
const infoSection = document.querySelector('section#info');
const closeBtn = document.getElementById('close-info');

if (window.innerWidth <= 1025) {
    // Fonction pour afficher la section info et désactiver le défilement du body
    function showInfo() {
        infoSection.classList.remove('hide');
        infoSection.classList.add('show');
        infoSection.style.display = 'block'; // Assurez-vous que la section est visible
        document.body.style.overflow = 'hidden'; // Empêche le body de défiler
    }

    // Fonction pour cacher la section info après l'animation
    function hideInfo() {

        infoSection.classList.remove('show');
        infoSection.classList.add('hide');

        // Ajouter un délai avant de cacher complètement la section
        setTimeout(() => {
            infoSection.style.display = 'none';
            document.body.style.overflow = 'auto'; // Permet de nouveau au body de défiler
        }, 500); // Correspond à la durée de l'animation
    }
}
// Gestion du menu burger
burger.addEventListener('click', () => {
    // Alterne l'état des barres du menu burger
    barres.forEach(barre => {
        barre.classList.toggle('active');
    });

    // Alterne l'apparition du menu
    navSection.classList.toggle('active');
});

// Gestion de l'affichage de la section info lorsque la bannière est cliquée
document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelectorAll('main section .banniere');

    banners.forEach(banner => {
        banner.addEventListener('click', showInfo);
    });

    // Ajouter l'événement de clic pour le bouton de fermeture
    closeBtn.addEventListener('click', hideInfo);
});