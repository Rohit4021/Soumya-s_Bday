const swipeContainer = document.body

const moonDiv = document.getElementById("moon");
moonDiv.addEventListener('click', (e) => {
    document.getElementById('section2').classList.add('moon-rotate')
    moonDiv.style.zIndex = '-1'
    moonDiv.style.backgroundImage = 'radial-gradient(circle at 50% 50%, rgba(185,168,255, 0.75), transparent 80%)'
    document.getElementById('bday_wish').classList.add('bday_wish')
    document.getElementsByTagName('h2')[0].classList.add('surprise')
    document.getElementsByTagName('h2')[1].classList.add('surprise')
})

const swipeHint = document.getElementById('swipeSVG');

document.querySelector('#section1 h1:nth-child(3)')
    .addEventListener('animationend', (e) => {
        if (e.animationName === 'textUp') {
            swipeHint.classList.add('swipe-toggle');
        }
    });

document.querySelector('#section2 h1')
    .addEventListener('animationend', (e) => {
        if (e.animationName === 'name-reveal') {
            setTimeout(() => {
                swipeHint.classList.add('swipe-toggle');
            }, 3000)
        }
    })

let touchStartY = 0
let touchEndY = 0

const SWIPE_THRESHOLD = 50

swipeContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, {passive: true})

swipeContainer.addEventListener('touchmove', (e) => {
    touchEndY = e.touches[0].clientY;
    handleSwipe()
}, {passive: true})

const handleSwipe = () => {
    const distanceY = touchStartY - touchEndY

    if (distanceY > SWIPE_THRESHOLD) {
        onSwipeUp()
    }
}

const fadingScreen = document.getElementById("fading-screen");

const onSwipeUp = () => {
    if (swipeContainer.classList[0] === 'page_1') {

        fadingScreen.classList.add("fade-out");
        swipeContainer.classList.remove('page_1')

        setTimeout(() => {
            document.getElementById('section1').remove();
            swipeContainer.classList.add('page_2')
            document.getElementById('section2').style.display = 'flex';
            swipeHint.classList.remove('swipe-toggle')
        }, 1000)

        setTimeout(() => {
            fadingScreen.classList.remove("fade-out");
        }, 2000)

    } else if (swipeContainer.classList[0] === 'page_2' && window.getComputedStyle(document.getElementById('bday_wish')).scale === '1') {
        fadingScreen.classList.add("fade-out");
        swipeContainer.classList.remove('page_2')

        setTimeout(() => {
            document.getElementById('section2').remove();
            swipeContainer.classList.add('page_3')
            document.getElementById('section3').style.display = 'flex';
            swipeHint.classList.remove('swipe-toggle')
        }, 1000)

        setTimeout(() => {
            fadingScreen.classList.remove("fade-out");
        }, 2000)
    }
}

document.getElementById('continue').addEventListener('click', (e) => {
    fadingScreen.classList.add("fade-out");
    swipeContainer.classList.remove('page_3')

    setTimeout(() => {
        document.getElementById('section3').remove();
        swipeContainer.classList.add('page_4')
        swipeContainer.style.backgroundImage = 'url("/ty-soumya.svg")'
        swipeHint.classList.remove('swipe-toggle')
    }, 1000)

    setTimeout(() => {
        fadingScreen.classList.remove("fade-out");
    }, 2000)


})

document.querySelector('#envelope').onclick = function () {
    this.classList.add('open');

    setTimeout(function () {
        document.getElementById('envelope').remove()
        document.getElementById('cotl').remove()

        document.getElementById('bday_wish_msg').style.display = 'flex';
        document.getElementById('bday_wish_msg').classList.toggle('wish-appear');
    }, 1700)

    setTimeout(function () {
        document.getElementById('paper-overlay').remove()
    }, 2700)
}
