const themeCheckbox = document.getElementById('theme-checkbox');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeCheckbox) themeCheckbox.checked = true;
}

if (themeCheckbox) {
    themeCheckbox.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Salvar perfil selecionado no localStorage para usar na página de catálogo
const profiles = document.querySelectorAll('.user-profile');

profiles.forEach(profile => {
    profile.addEventListener('click', function() {
        const name = this.querySelector('figcaption').textContent;
        const rawImg = this.querySelector('img').getAttribute('src');
        const imgPath = rawImg.replace('./assets', '../assets');
        
        localStorage.setItem('perfilAtivoNome', name);
        localStorage.setItem('perfilAtivoImagem', imgPath);
    });
});
