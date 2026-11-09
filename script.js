
// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// FECHAR MENU AO CLICAR EM UM LINK
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// ALTERNAR ENTRE TEMA ESCURO E CLARO
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "☾";
    } else {
        themeToggle.textContent = "☀";
    }
});

// ATUALIZAR ANO AUTOMATICAMENTE
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
