(() => {
    const menuBtnRef = document.querySelector('[data-mobile-button]');
    const mobileMenuRef = document.querySelector('[data-menu-container]');
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === 'true' || false;
        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expanded', !expanded);
        document.body.classList.toggle('modal-open');
        mobileMenuRef.classList.toggle('is-open');
    });
})();