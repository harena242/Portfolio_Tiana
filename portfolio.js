
// Récupérer les boutons de langue
const btnFr = document.getElementById("btn-fr");
const btnEn = document.getElementById("btn-en");

// Fonction pour changer la langue
function changerLangue(langue) {

    // Récupérer tous les éléments qui possèdent les traductions
    const elements = document.querySelectorAll("[data-fr][data-en]");

    // Parcourir tous les éléments
    elements.forEach(element => {

        // Modifier le texte selon la langue choisie
        element.textContent = element.getAttribute("data-" + langue);

    });

    // Modifier la langue du document HTML
    document.documentElement.lang = langue;

    // Modifier le titre de la page
    document.title = langue === "fr" ? "RAKOTOARISON Tiana Avotsoa" : "RAKOTOARISON Tiana Avotsoa";

    // Indiquer le bouton de langue actif
    btnFr.setAttribute("aria-pressed", langue === "fr");
    btnEn.setAttribute("aria-pressed", langue === "en");

}

// Afficher le français par défaut
changerLangue("fr");

// Lorsque l'utilisateur clique sur FR
btnFr.addEventListener("click", function() {
    changerLangue("fr");
});

// Lorsque l'utilisateur clique sur EN
btnEn.addEventListener("click", function() {
    changerLangue("en");
});
