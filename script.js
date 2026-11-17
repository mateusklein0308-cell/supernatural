
// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const menuAberto = navLinks.classList.contains("active");

    menuToggle.textContent = menuAberto ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});


// FECHAR MENU AO CLICAR EM UM LINK
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});


// ALTERNAR ENTRE TEMA ESCURO E CLARO
const themeToggle = document.getElementById("themeToggle");

// Recuperar tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {

    document.body.classList.add("light-theme");

    themeToggle.textContent = "☾";

} else {

    themeToggle.textContent = "☀";

}


// Botão de troca de tema
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const temaClaro = document.body.classList.contains("light-theme");

    if (temaClaro) {

        themeToggle.textContent = "☾";

        localStorage.setItem("tema", "claro");

    } else {

        themeToggle.textContent = "☀";

        localStorage.setItem("tema", "escuro");

    }

});


// ATUALIZAR ANO AUTOMATICAMENTE
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
