document.addEventListener("DOMContentLoaded", () => {
  const checkFoot = document.getElementById("checkFoot"); // ma chercher le checker
  const labelForFooter = document.querySelector('label[for="checkFoot"]'); // ensuite je vais get le label
  const footer = labelForFooter.querySelector("footer"); // et aussi le footer

  // ici je m'attaque au menu nav

  const navMenu = document.getElementById("nav-menu");
  const burger = document.getElementById("burger");

  // si je click en dehors, on peut aussi fermer le menu
  function fermerMenus(event) {
    // avec cette formule je vais ignorer les règles du checkbox et du label
    if (event.target === checkFoot || event.target === labelForFooter) {
      return;
    }
    // maintenant si je click en dehors du footer et le checkbox est deja ccheked
    if (!footer.contains(event.target) && checkFoot.checked) {
      checkFoot.checked = false; // je ferme le footer
    }

    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(event.target) &&
      !burger.contains(event.target)
    ) {
      navMenu.classList.remove("active");
    }
  }

  // ici je veux savoir si on click en dehors
  document.addEventListener("click", fermerMenus);
});
