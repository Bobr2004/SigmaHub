window.addEventListener('scroll',()=> {
    let current_scroll = window.scrollY;
    console.log(current_scroll);
    if (current_scroll > 20) {
        document.querySelector(".header__wrapper").classList.add("active-header");
    }
    else {
        document.querySelector(".header__wrapper").classList.remove("active-header");
    }
})