import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

const nomePerfil = localStorage.getItem('perfilAtivoNome');
const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

if (nomePerfil && imagemPerfil) {
    const kidsLink = document.querySelector('.kids-link');
    const profileIcon = document.querySelector('.profile-icon');
    
    if (kidsLink) kidsLink.textContent = nomePerfil;
    if (profileIcon) profileIcon.src = imagemPerfil;
} else {
    window.location.href = '../index.html';
}

const container = document.getElementById('main-content');

// Função para embaralhar um array de forma determinística baseada em uma string (seed)
function shuffleArray(array, seedStr) {
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) {
        seed += seedStr.charCodeAt(i);
    }

    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const random = Math.sin(seed++) * 10000;
        const j = Math.floor((random - Math.floor(random)) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

if (container) {
    const profileName = nomePerfil || 'default';
    
    // Embaralhar os itens dentro de cada categoria baseado no nome do usuário
    const personalizedCategories = categories.map(category => ({
        ...category,
        items: shuffleArray(category.items, profileName + category.title)
    }));
    
    // Opcional: Embaralhar também a ordem das categorias
    const finalCategories = shuffleArray(personalizedCategories, profileName);

    finalCategories.forEach(category => {
        const carousel = createCarousel(category);
        container.appendChild(carousel);
    });
}
