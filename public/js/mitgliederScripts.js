// To have the active card always in the middle set shuffle to true 
var shuffle = false;
if (window.innerWidth < 900 && shuffle === false) {
    shuffle = true;
} else if (window.innerWidth >= 900 && shuffle === true) {
    shuffle = false;
}

window.addEventListener("resize", function (event) {
    if (window.innerWidth < 900 && shuffle === false) {
        shuffle = true;
        activateSlide($q(".carousel__item")[2])
    } else if (window.innerWidth >= 900 && shuffle === true) {
        shuffle = false;
    }
})

const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);
const $prev = $g(".prev");
const $next = $g(".next");
const $list = $g(".carousel__list");
let auto;
let pauser;
let currentActiveIndex

const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return getSlideIndex($active);
}

const getSlideIndex = ($slide) => {
    return [...$q(".carousel__item")].indexOf($slide);
}

const prevSlide = (shuffle) => {
    const index = getActiveIndex();
    if (shuffle) {
        const $slides = $q(".carousel__item");
        const $last = $slides[$slides.length - 1];
        $last.remove();
        $list.prepend($last);
        activateSlide($q(".carousel__item")[index]);
    } else {
        activateSlide($q(".carousel__item")[index - 1]);
    }
}

const prev2Slide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    var $last = $slides[$slides.length - 1];
    $last.remove();
    $list.prepend($last);
    var $last = $slides[$slides.length - 2];
    $last.remove();
    $list.prepend($last);
    activateSlide($q(".carousel__item")[index]);
}

const nextSlide = () => {
    const index = getActiveIndex();
    if (shuffle) {
        const $slides = $q(".carousel__item");
        const $first = $slides[0];
        $first.remove();
        $list.append($first);
        activateSlide($q(".carousel__item")[index]);
    } else {
        activateSlide($q(".carousel__item")[index + 1]);
    }
}

const next2Slide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    var $first = $slides[0];
    $first.remove();
    $list.append($first);
    var $first = $slides[1];
    $first.remove();
    $list.append($first);
    activateSlide($q(".carousel__item")[index]);
}

const chooseSlide = (e) => {
    // const max = (window.matchMedia("screen and ( max-width: 600px)").matches) ? 1 : 5;
    const $slide = e.target.closest(".carousel__item");
    const index = getSlideIndex($slide);
    if (index != currentActiveIndex) {
        $(".card").removeClass("active");
    }
    currentActiveIndex = index;
    console.log(currentActiveIndex);
    if (shuffle) {
        if (index === 2) return;
        if (index === 4) next2Slide();
        if (index === 3) nextSlide(shuffle);
        if (index === 1) prevSlide(shuffle);
        if (index === 0) prev2Slide();
    }
    activateSlide($slide);
}

const activateSlide = ($slide) => {
    if (!$slide) return;
    const $slides = $q(".carousel__item");
    $slides.forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute('data-active', true);
    $slide.focus();
}

const autoSlide = () => {
    nextSlide();
}

const pauseAuto = () => {
    clearInterval(auto);
    clearTimeout(pauser);
}

const handleNextClick = (e) => {
    pauseAuto();
    nextSlide(e);
}

const handlePrevClick = (e) => {
    pauseAuto();
    prevSlide(e);
}

const handleSlideClick = (e) => {
    pauseAuto();
    chooseSlide(e);
}

const handleSlideKey = (e) => {
    if (window.innerWidth >= 900) {
        shuffle = false;
    } else {
        shuffle = true;
    }
    switch (e.keyCode) {
        case 37:
        case 65:
            handlePrevClick(shuffle);
            break;
        case 39:
        case 68:
            handleNextClick();
            break;
    }
}
const startAuto = () => {
    auto = setInterval(autoSlide, 3000);
}
// startAuto();
// $next.addEventListener("click", handleNextClick);
// $prev.addEventListener("click", handlePrevClick);
$list.addEventListener("click", handleSlideClick);
$list.addEventListener("focusin", handleSlideClick);
$list.addEventListener("keyup", handleSlideKey);


$list.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

$list.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);


function handleGesture(e) {
    console.log(touchstartX);
    console.log(touchendX);
    if (Math.abs(touchendX - touchstartX) > 30) {
        if (touchendX < touchstartX) {
            const $slides = $q(".carousel__item");
            const $first = $slides[0];
            $first.remove();
            $list.append($first);
            activateSlide($q(".carousel__item")[2]);
        }

        if (touchendX > touchstartX) {
            const $slides = $q(".carousel__item");
            const $last = $slides[$slides.length - 1];
            $last.remove();
            $list.prepend($last);
            activateSlide($q(".carousel__item")[2]);
        } else {}
    }

    if (touchendX === touchstartX) {
        console.log('Tap');
    }
}