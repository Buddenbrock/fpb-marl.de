var isOpen = false;
var isAnimating = false;
var openMenu = function() {
    if (isAnimating) {
        return ;
    }
    isAnimating = true;
    $('#nav').animate({top:'80px'},850,function() {
        isOpen = true;
        isAnimating = false;
    });
    $('#main').animate({marginTop:'380px'},900);
    
};
var closeMenu = function() {
    if (isAnimating) {
        return ;
    }
    isAnimating = true;
    $('#nav').animate({top:'-320px'},900,function() {
        isOpen = false;
        isAnimating = false;
    });
    $('#main').animate({marginTop:'80px'},850);
};
$(function() {
    $('#menu_button').click(function() {
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
});