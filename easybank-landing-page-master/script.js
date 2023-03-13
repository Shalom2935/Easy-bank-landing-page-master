let toggleNavMenu = undefined;
let toggleNavBg = undefined;
toggleNavMenu = document.querySelector('.navlinks');
toggleNavBg = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let openMenu = false;

menuBtn.addEventListener('click',() => {
    toggleNavMenu.classList.toggle('show-navlinks');
    toggleNavBg.classList.toggle('bg-nav');
    if(!openMenu){
        menuBtn.classList.add('close');
        openMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        openMenu = false;
    }
   
});

