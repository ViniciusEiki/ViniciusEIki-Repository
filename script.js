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