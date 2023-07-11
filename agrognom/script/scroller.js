
document.body.style.overflow = 'hidden'
let isScrolling = true;
let slides = document.getElementsByClassName('slide')
let slider = document.getElementById('slider')
let page = 0
let pageHeight = window.innerHeight

function scrollTo() {
    window.scrollTo({
        top: page * pageHeight,
        behavior: 'smooth'
    })
}

scrollTo()

window.addEventListener('resize', () => {
    if (page <= slides.length) {
        pageHeight = window.innerHeight
        window.scrollTo({
            top: page * pageHeight,
        })
    }
})
window.addEventListener('wheel', function (e) {
    if (isScrolling) {
        if (page >= slides.length) {
            if (slider.offsetHeight > window.pageYOffset) {
                page--
                isScrolling = false

                scrollTo()

                setTimeout(() => {
                    isScrolling = true
                }, 1000)
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
            console.log(page)
        } else {
            if (e.deltaY > 0 && page < slides.length) {
                document.body.style.overflow = 'hidden'
                page++
            } else if (e.deltaY < 0 && page !== 0) {
                document.body.style.overflow = 'hidden'
                page--
            }
            isScrolling = false

            scrollTo()

            setTimeout(() => {
                isScrolling = true
            }, 1000)
        }
    }
});

let touches = {
    start: 0,
    end: 0,
}
window.addEventListener('touchstart', (e) => {
    touches.start = e.changedTouches[0].clientY
})
window.addEventListener('touchend', (e) => {
    touches.end = e.changedTouches[0].clientY
    let touch = touches.start - touches.end

    if (isScrolling) {
        if (page >= slides.length) {
            if (slider.offsetHeight > window.pageYOffset) {
                page--
                isScrolling = false

                scrollTo()

                setTimeout(() => {
                    isScrolling = true
                }, 1000)
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
            console.log(page)
        } else {
            if (touch > window.innerHeight / 4 && page < slides.length) {
                document.body.style.overflow = 'hidden'
                page++
            } else if (touch < window.innerHeight / 4 && page !== 0) {
                document.body.style.overflow = 'hidden'
                page--
            }
            isScrolling = false

            scrollTo()

            setTimeout(() => {
                isScrolling = true
            }, 1000)
        }
    }
})


