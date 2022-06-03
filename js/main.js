console.info('frontend200tb coffee shop start');

const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        console.info('click on menu link');
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock =document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__menu').offsetHeight;

            if (iconMenu.classList.contains('header__active')){
                document.body.classList.remove('lock');
                iconMenu.classList.remove('header__active');
                menuBody.classList.remove('header__active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

const onBurgerMenuClick = () => {
    console.info('click on burger menu');
    if (iconMenu.classList.contains('header__active')){
        document.body.classList.remove('lock');
        iconMenu.classList.remove('header__active');
        menuBody.classList.remove('header__active');
    } else {
        iconMenu.classList.add('header__active');
        menuBody.classList.add('header__active');        
    }   
}
iconMenu.addEventListener('click', onBurgerMenuClick);

console.info('frontend200tb coffee shop end');
