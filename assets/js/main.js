var home = document.getElementById('home');
var about = document.getElementById('about');
var skills = document.getElementById('skills');
var contact = document.getElementById('contact');
var footer = document.getElementsByTagName("footer");
var navbarItem = document.getElementsByClassName("navbar-item");
var switchInput = document.getElementsByClassName("switch-input");
var loader = document.getElementsByClassName("loader");
var main = document.getElementsByClassName("main");

function pageNav(id) {
    var offsetTop;
    if (id == "about") {
        offsetTop = about.offsetTop - 75;
    } else if (id == "skills") {
        offsetTop = skills.offsetTop - 75;
    } else if (id == "contact") {
        offsetTop = contact.offsetTop - 75;
    } else if (id == "top") {
        offsetTop = 0;
    }
    document.body.scrollTop = offsetTop;
    document.documentElement.scrollTop = offsetTop;
}

window.addEventListener("scroll", () => {
    var pageYOffset = window.pageYOffset;
    if ((about.offsetTop - 150) <= pageYOffset && (skills.offsetTop - 150) > pageYOffset) {
        navbarItem[0].children[0].classList.add("active");
        navbarItem[0].children[1].classList.remove("active");
        navbarItem[0].children[2].classList.remove("active");
    } else if ((skills.offsetTop - 150) <= pageYOffset && (contact.offsetTop - contact.offsetHeight - 127) > pageYOffset) {
        navbarItem[0].children[0].classList.remove("active");
        navbarItem[0].children[1].classList.add("active");
        navbarItem[0].children[2].classList.remove("active");
    } else if ((contact.offsetTop - contact.offsetHeight - 127) <= pageYOffset) {
        navbarItem[0].children[0].classList.remove("active");
        navbarItem[0].children[1].classList.remove("active");
        navbarItem[0].children[2].classList.add("active");
    } else if ((about.offsetTop - 150) > pageYOffset) {
        navbarItem[0].children[0].classList.remove("active");
        navbarItem[0].children[1].classList.remove("active");
        navbarItem[0].children[2].classList.remove("active");
    }
});

switchInput[0].addEventListener('change', () => {
    main[0].classList.toggle('dark-theme');
    main[0].classList.toggle('light-theme');
});

function loaderFunction() {
    setTimeout(() => {
        loader[0].style.opacity = 0;        
        loader[0].style.display = "none";
        main[0].style.display = "block";
        setTimeout(() => {
            main[0].style.opacity = 1;
        }, 50);        
    }, 500);
}

window.addEventListener('load', loaderFunction);