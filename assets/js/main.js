function getTheme(){
    let theme = localStorage.getItem("theme");
    if(!(theme && theme.match(/(light-theme|dark-theme)/))){
        theme = "light-theme";
    }
    return theme;
}

$(document).ready(function(){
    let theme = getTheme();
    $("body").removeClass("light-theme dark-theme");
    $("body").addClass(theme);
    
    setTimeout(() => {
        $(".loader-container").fadeOut(500);
        $(".main").fadeIn(500);
    }, 500);
});