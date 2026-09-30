// Keep navigation accessible while CSS handles the responsive layout.
const siteNav = document.getElementById('site-nav');
const menuButton = siteNav.querySelector('button');
const menu = document.getElementById('site-navigation');

function closeMenu() {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', event => {
    if (!siteNav.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
    }
});
window.matchMedia('(max-width: 1000px)').addEventListener('change', closeMenu);
