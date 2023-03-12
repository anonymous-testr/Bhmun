// Variables
var maxSlides = 10;
var slideIndex = 1;
var autoSlideController;
var screenHeight;
var darkMode;
var darkNavBar;
var darkDropdownMenu;
var lightNavBar;
var lightDropdownMenu;
var darkMobileNavBar;
var lightMobileNavBar;

// Program code
// Set page top height
screenHeight = screen.height;
document.getElementById( "pageTop").style.height = screenHeight + "px";

// Start slideshow
document.getElementById( "slideF").style.opacity = "0";
loadSlide( slideIndex, true);

// Dark/light navbar
darkMode = true;
darkNavBar = document.getElementById( "navBarDark");
darkDropdownMenu = document.getElementById( "dropdownMenuDark");
lightNavBar = document.getElementById( "navBarLight");
lightDropdownMenu = document.getElementById( "dropdownMenuLight");
lightMobileNavBar = document.getElementById( "mobileBarLight");
darkMobileNavBar = document.getElementById( "mobileBarDark");
darkNavBar.style.opacity = "1";
darkDropdownMenu.style.opacity = "1";
darkMobileNavBar.style.opacity = "1";
lightNavBar.style.opacity = "0";
lightDropdownMenu.style.opacity = "0";
lightMobileNavBar.style.opacity = "0";
window.onscroll = scrollFunction;


// Functions
function nextSlide( n) {
    document.getElementById( "slideB").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('res/slides/bhmun_history/" + slideIndex + ".jpeg')";
    document.getElementById( "slideF").style.opacity = "0";
    loadSlide(slideIndex = slideIndex + n, true);
}

function showSlide( n) {
    document.getElementById( "slideB").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('res/slides/bhmun_history/" + slideIndex + ".jpeg')";
    document.getElementById( "slideF").style.opacity = "0";
    loadSlide(slideIndex = n, true);
}

function loadSlide( n, reset) {
    // Variables
    var dots;

    // Program code
    if ( reset ) {
        resetInterval();
    }
    dots = document.getElementsByClassName( "dot");

    if ( n > maxSlides ) {
        slideIndex = 1
    }
    if ( n < 1 ) {
        slideIndex = maxSlides
    }

    for ( var i = 0; i < dots.length; i++) {
        dots[ i].className = dots[ i].className.replace( " active", "");
    }
    dots[ slideIndex-1].className += " active";
    document.getElementById( "slideF").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('res/slides/bhmun_history/" + slideIndex + ".jpeg')";
    fadeIn( document.getElementById( "slideF"));
}

function resetInterval() {
    clearInterval( autoSlideController);
    autoSlideController = setInterval( function() {
        nextSlide( 1);
    }, 5000);
    loadSlide( slideIndex);
}

function fadeIn( element) {
    // Variables
    var op = 0;
    var timer;

    // Program code
    timer = setInterval( function () {
        if ( op >= 1 ){
            clearInterval( timer);
        }
        else {
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op = op + 0.1;
        }
    }, 30);
}

function scrollFunction() {
    // Variables
    var el;
    var viewportOffset;
    var top;

    // Program code
    el = document.getElementById( "letter");
    viewportOffset = el.getBoundingClientRect();
    top = viewportOffset.top;

    if ( top > 0 ) {
        // Dark navbar
        if ( !darkMode ) {
            fadeInNavbar( darkNavBar );
            fadeInNavbar( darkDropdownMenu );
            fadeInNavbar( darkMobileNavBar );
            fadeOutNavbar( lightNavBar );
            fadeOutNavbar( lightDropdownMenu );
            fadeOutNavbar( lightMobileNavBar );
            darkMode = true;
        }
    }
    else {
        // Light navbar
        if ( darkMode ) {
            fadeInNavbar( lightNavBar );
            fadeInNavbar( lightDropdownMenu );
            fadeInNavbar( lightMobileNavBar );
            fadeOutNavbar( darkNavBar );
            fadeOutNavbar( darkDropdownMenu );
            fadeOutNavbar( darkMobileNavBar );
            darkMode = false;
        }
    }
}

function fadeInNavbar( element) {
    // Variables
    var op;
    var timer;

    // Program code
    element.style.display = "block";
    op = 0;
    timer = setInterval( function () {
        if ( op >= 1 ) {
            clearInterval( timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha( opacity = ' + op * 100 + ")";
        op = op + 0.1;
    }, 20);
}

function fadeOutNavbar( element) {
    // Variables
    var op;
    var timer;

    // Program code
    op = 1;
    timer = setInterval( function () {
        if ( op <= 0 ) {
            clearInterval( timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = 'alpha( opacity = ' + op * 100 + ")";
        op = op - 0.1;
    }, 20);
}