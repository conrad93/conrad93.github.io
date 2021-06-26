var switchInput = document.getElementsByClassName("switch-input");
var loader = document.getElementsByClassName("loader");
var main = document.getElementsByClassName("main");
var cursor = document.getElementsByClassName("cursor");
var cursor1 = document.getElementById("cursor1");
var cursor2 = document.getElementById("cursor2");
var cursor3 = document.getElementById("cursor3");
var cursor4 = document.getElementById("cursor4");
var cursor5 = document.getElementById("cursor5");
var timeout;

switchInput[0].addEventListener('change', () => {
    main[0].classList.toggle('dark-theme');
    main[0].classList.toggle('light-theme');
});

function loaderFunction() {
        loader[0].style.opacity = 0;        
        loader[0].style.display = "none";
        main[0].style.display = "block";
        setTimeout(() => {
            main[0].style.opacity = 1;
        }, 50);
}

window.addEventListener('load', loaderFunction);

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor1.style.top = cursor2.style.top = cursor3.style.top = cursor4.style.top = cursor5.style.top = y + "px";
    cursor1.style.left = cursor2.style.left = cursor3.style.left = cursor4.style.left = cursor5.style.left = x + "px";
    Array.from(cursor).forEach(element => {
        element.style.display = "block";
    });
    
    function mouseStopped(){
        Array.from(cursor).forEach(element => {
            element.style.display = "none";
        });
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);

});

document.addEventListener("mouseout", () => {
    Array.from(cursor).forEach(element => {
        element.style.display = "none";
    });
});