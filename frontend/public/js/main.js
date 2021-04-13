const mobileMenu = function() {

    const toggleButton = document.querySelector('.m-mobile-menu-toggle');
    const menu = document.querySelector('.m-mobile-menu');
    const menuItems = document.querySelector('.m-mobile-menu-items');

    if (!(toggleButton && menu)) return;
    toggleButton.addEventListener('click', function(event){
        event.preventDefault();
        toggleButton.classList.toggle('is-clicked');
        menu.classList.toggle('open-menu');
        menuItems.classList.toggle('open-menu');
    });
};

(function init() {
    mobileMenu();
})();