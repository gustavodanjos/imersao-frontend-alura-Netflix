const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('.icon');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        icon.textContent = '🌙'; // Altera o ícone para lua no modo claro
    } else {
        icon.textContent = '☀️'; // Altera o ícone para sol no modo escuro
    }
});
