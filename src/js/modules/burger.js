const burger = (menuSelector, burgerSelector) => {
    const menuEl = document.querySelector(menuSelector),
          burgerBtn = document.querySelector(burgerSelector);

    menuEl.style.display = 'none';      

    burgerBtn.addEventListener('click', () => {
        if (menuEl.style.display = 'none' && window.screen.availWidth < 993) {
            menuEl.style.display = 'block';
        } else {
            menuEl.style.display = 'none'
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuEl.style.display = 'none';
        }
    });
};

export default burger;