document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se já existe uma preferência de tema salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        themeToggle.checked = savedTheme === 'dark-theme';
    } else {
        // Define o tema claro como padrão se nada estiver salvo
        body.classList.add('light-theme');
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});

// Alternar tema claro/escuro
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme", themeToggle.checked);
    document.body.classList.toggle("light-theme", !themeToggle.checked);
});

// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
