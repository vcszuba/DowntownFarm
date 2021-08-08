function hideLoader() {
    $('#loading').hide();
    $('#white-screen').hide();
}

//$(window).ready(hideLoader);
window.scrollTo(0,0);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 2500);