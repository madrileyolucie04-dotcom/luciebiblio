// ===============================
// MENU RESPONSIVE
// ===============================
const nav = document.querySelector("nav ul");
const navBar = document.querySelector("nav");

// Création bouton menu mobile
const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-toggle");

navBar.insertBefore(menuBtn, nav);

// Ouvrir / fermer menu
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ===============================
// LIEN ACTIF AUTOMATIQUE
// ===============================
const links = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-link");
    }
});


// ===============================
// MESSAGE DYNAMIQUE HERO
// ===============================
const heroTitle = document.querySelector(".hero h1");

setTimeout(() => {
    heroTitle.textContent = "Bienvenue chez Flori Car 🚗";
}, 2000);


// ===============================
// ANIMATION BOUTON
// ===============================
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "0.3s";
});

btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
});


// ===============================
// ANNÉE AUTOMATIQUE FOOTER
// ===============================
const footerText = document.querySelector("footer p");
const year = new Date().getFullYear();

footerText.innerHTML = `© ${year} Rach-Mode vous souhaite la Bienvenue.`;