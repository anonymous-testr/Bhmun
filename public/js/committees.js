// Variables
var screenHeight;
var video;
var buttonPlay;
var title;
var pageTop;
var darkMode;
var darkNavBar;
var darkDropdownMenu;
var lightNavBar;
var lightDropdownMenu;
var darkMobileNavBar;
var lightMobileNavBar;

// Program code
// Set page top height
pageTop = document.getElementById( "pageTop");
screenHeight = screen.height;
pageTop.style.height = screenHeight + "px";

// Video
window.addEventListener('load', (event) => {
    // Variables
    var videoLeftMargin;

    // Code
    video = document.getElementById( "introVideo");
    buttonPlay = document.getElementById( "buttonPlay");
    title = document.getElementById( "title");

    video.addEventListener('ended', onVideoEnd,false);
    video.addEventListener('play', onVideoPlay,false);
    video.addEventListener('pause', onVideoPause,false);
});

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
function startVideo() {
    video.play();
}

function stopVideo() {
    video.pause();
}

function onVideoEnd() {
    video.currentTime = 0;
}

function onVideoPlay() {
    pageTop.style.backgroundColor = "#000000";
    video.setAttribute( "controls","controls");
    title.style.opacity = 0;
    buttonPlay.style.opacity = 0;
}

function onVideoPause() {
    pageTop.style.backgroundColor = "#E7E6E8";
    if ( video.hasAttribute( "controls")) {
        video.removeAttribute( "controls");
    }
    title.style.opacity = 1;
    buttonPlay.style.opacity = 1;
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

        stopVideo();
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