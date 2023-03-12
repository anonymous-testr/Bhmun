// Variables
var maxSlides = 20;
var slideIndex = 1;
var autoSlideController;
var screenHeight;
var now;
var conferenceDate;
var remainingTime;
var dayP;
var hourP;
var minuteP
var secondP;
var day;
var hour;
var minute;
var second;
var dayStr;
var hourStr;
var minuteStr;
var secondStr;
var trailerBox;
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

// Start countdown
conferenceDate = new Date( "Jul 13, 2021 16:00:00").getTime();
dayP = document.getElementById( "dayP");
hourP = document.getElementById( "hourP");
minuteP = document.getElementById( "minuteP");
secondP = document.getElementById( "secondP");
startCountdown();

// Trailer box listener
trailerBox = document.getElementById( "trailerBox");
trailerBox.addEventListener( 'click', function( evt) {
    if ( evt.target != this ) return false;
    hideVideoBox();
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
function nextSlide( n) {
    document.getElementById( "slideB").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('res/slides/home/" + slideIndex + ".jpeg')";
    document.getElementById( "slideF").style.opacity = "0";
    loadSlide(slideIndex = slideIndex + n, true);
}

function showSlide( n) {
    document.getElementById( "slideB").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('res/slides/home/" + slideIndex + ".jpeg')";
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
    document.getElementById( "slideF").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('res/slides/home/" + slideIndex + ".jpeg')";
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

function startCountdown() {
    updateTime();
    var interval = setInterval(function() {
        updateTime();
    }, 1000);
}

function updateTime() {
    now = new Date().getTime();
    remainingTime = conferenceDate - now;

    if ( remainingTime <= 0) {
        // Hide countdown
        document.getElementById( "countdownT").style.display = "none";
        document.getElementById( "countdownMessage").style.display = "block";
    }
    else {
        // Show countdown
        document.getElementById( "countdownT").style.display = "block";
        document.getElementById( "countdownMessage").style.display = "none";

        day = Math.floor( remainingTime / ( 1000 * 60 * 60 * 24));
        hour = Math.floor(( remainingTime % ( 1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
        minute = Math.floor(( remainingTime % ( 1000 * 60 * 60)) / ( 1000 * 60));
        second = Math.floor(( remainingTime % ( 1000 * 60)) / 1000);

        dayStr = day.toString();
        hourStr = hour.toString();
        minuteStr = minute.toString();
        secondStr = second.toString();

        if ( dayStr.length == 1 ) { dayStr = "0" + dayStr; }
        if ( hourStr.length == 1 ) { hourStr = "0" + hourStr; }
        if ( minuteStr.length == 1 ) { minuteStr = "0" + minuteStr; }
        if ( secondStr.length == 1 ) { secondStr = "0" + secondStr; }

        dayP.innerHTML = dayStr;
        hourP.innerHTML = hourStr;
        minuteP.innerHTML = minuteStr;
        secondP.innerHTML = secondStr;
    }
}

function showVideoBox() {
    var videoBox = document.getElementById( "trailerBox");
    var video = document.getElementById( "mainVideo");
    videoBox.style.display = "block";
    video.play();
    document.body.style.overflow = 'hidden';
}

function hideVideoBox() {
    var videoBox = document.getElementById( "trailerBox");
    var video = document.getElementById( "mainVideo");
    videoBox.style.display = "none";
    video.pause();
    document.body.style.overflow = 'visible';
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