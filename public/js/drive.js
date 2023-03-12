// Variables
var darkMode;
var darkNavBar;
var darkDropdownMenu;
var lightNavBar;
var lightDropdownMenu;
var darkMobileNavBar;
var lightMobileNavBar;

// Program code
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
function scrollFunction() {
    // Variables
    var el;
    var viewportOffset;
    var top;

    // Program code
    el = document.getElementById( "layoutDrive");
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