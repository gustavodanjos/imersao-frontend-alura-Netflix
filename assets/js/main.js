const themeCheckbox = document.getElementById('theme-checkbox');

themeCheckbox.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});
