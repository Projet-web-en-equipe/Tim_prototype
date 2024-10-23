// const burger = document.getElementById('burger');
// const barres = document.querySelectorAll('#burger .barre');
// const navSection = document.getElementById('nav-menu');
// const infoSection = document.querySelector('section#info');
// const closeBtn = document.getElementById('close-info');
const profName = document.getElementById('prof-name');
const profImage = document.getElementById('prof-image');
const profCours = document.getElementById('prof-cours');
const profFait = document.getElementById('prof-fait');

// Fonction pour afficher les informations d'un professeur
function showProfInfo(banner) {
    const cours = banner.getAttribute('data-cours');
    const fait = banner.getAttribute('data-fait');
    const name = banner.querySelector('h2').textContent;
    const imageSrc = banner.querySelector('img').getAttribute('src');

    // Injecter les données dans la section info
    profName.textContent = name;
    profImage.setAttribute('src', imageSrc);
    profCours.textContent = `Cours : ${cours}`;
    profFait.textContent = `Faits : ${fait}`;

    // Afficher la section info
    infoSection.classList.remove('hide');
    infoSection.classList.add('show');
    infoSection.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

if (window.innerWidth <= 1025) {
    function hideInfo() {
        infoSection.classList.remove('show');
        infoSection.classList.add('hide');
        setTimeout(() => {
            infoSection.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}

// burger.addEventListener('click', () => {
//     barres.forEach(barre => {
//         barre.classList.toggle('active');
//     });
//     navSection.classList.toggle('active');
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const banners = document.querySelectorAll('main section .banniere');

//     // Afficher les informations du premier professeur par défaut
//     if (banners.length > 0) {
//         showProfInfo(banners[0]);
//     }

//     // Gestion du clic sur les bannières
//     banners.forEach(banner => {
//         banner.addEventListener('click', function () {
//             showProfInfo(banner);
//         });
//     });

//     closeBtn.addEventListener('click', hideInfo);
// });
