const monsters = [
    '/monsters/minotaur.html',
    '/monsters/hydra.html',
    '/monsters/chimera.html',
    '/monsters/fenrir.html',
    '/monsters/kappa.html',
    '/monsters/sphinx.html',
    '/monsters/wendigo.html'
];

function goToRandomMonster() {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    window.location.href = monsters[randomIndex];
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    // Save preference to LocalStorage
    localStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
});