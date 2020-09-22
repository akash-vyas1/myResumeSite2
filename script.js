console.log("Welcome to my site !");

const menu_button = document.querySelector(".header .menu .menubtn");
let menuopen = false;
let visible = true;
menu_button.addEventListener("click", () => {
    if (!menuopen) {
        menu_button.classList.add("open");
        menuopen = true;
        visible = true;
    } else {
        menu_button.classList.remove("open");
        menuopen = false;
        visible = false;
    }
});

const menuLinkClick = document.querySelector(".menu .links");
menuLinkClick.addEventListener("click", () => {
    menu_button.classList.remove("open");
    menuopen = false;
    visible = false;
});


const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    if (visible) {
        let links = document.querySelector(".menu .links");
        links.style.display = "block";
    } else {
        let links = document.querySelector(".menu .links");
        links.style.display = "none";
    }
});