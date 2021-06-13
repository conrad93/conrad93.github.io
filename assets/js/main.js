var switchInput = document.getElementsByClassName("switch-input");
var loader = document.getElementsByClassName("loader");
var main = document.getElementsByClassName("main");

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