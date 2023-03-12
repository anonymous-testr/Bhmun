// Program code
// Check cookies
var x = document.cookie;
if ( x.includes( "showIntroV2=false;") ) {
    hidePopup();
}
else {
    // Show popup
    var popup = document.getElementById( "popup");
    popup.style.display = "block";
    document.body.style.overflow = 'hidden';
    document.cookie = "showIntroV2=false";

    popup.addEventListener('click', function(evt) {
        if ( evt.target != this ) return false; //notice this line
        hidePopup();
    });
}

// Functions
function hidePopup() {
    var popup = document.getElementById( "popup");
    popup.style.display = "none";
    document.body.style.overflow = 'visible';
}