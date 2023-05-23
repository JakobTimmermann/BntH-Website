const navLinks = $(".nav-link");
console.log(navLinks);
navLinks.on('click', function () {
    console.log("Hit it")
    window.addEventListener('scroll', showNavOnClick, false);
});

function showNavOnClick() {
    var timer = null;
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        console.log("waited");
        $("#mainNav").removeClass("is-fixed")
    }, 1000);
    if (!$("#mainNav").hasClass("is-fixed")) {
        window.removeEventListener('scroll', showNavOnClick, false);
    }
};