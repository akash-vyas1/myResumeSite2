console.log("Welcome to my site !");
console.log("hello from script.js");


const menu_button = document.querySelector(".header .menu .menubtn");
const body = document.getElementsByTagName('body');
var menuText = document.querySelector(".menu .menutext");

let menuopen = false;
let visible = true;
menu_button.addEventListener("click", () => {
    if (!menuopen) {
        menu_button.classList.add("open");
        menuopen = true;
        visible = true;
        menuText.innerHTML = "Close";
    } else {
        menu_button.classList.remove("open");
        menuopen = false;
        visible = false;
        menuText.innerHTML = "Menu";
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