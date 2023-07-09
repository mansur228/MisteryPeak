window.onload = () => {
    let scrollable = true

    let slider = document.getElementById('slider')

    document.body.style.overflow = 'hidden'

    window.addEventListener('wheel', (e) => {
        console.log()
        if (scrollable) {

            scrollable = false

            if (e.deltaY > 0) {
                window.scrollBy({ top: +window.innerHeight, behavior: "smooth" })

            } else {

                window.scrollBy({ top: -window.innerHeight, behavior: "smooth" })

            }

            setTimeout(() => {

                scrollable = true

            }, 600)
        }
    })


    let StartToEnd = {
        start: null,
        end: null,
    }

    slider.addEventListener("touchstart", (e) => {
        StartToEnd.start = e.changedTouches[0].clientY
    });
    slider.addEventListener("touchend", (e) => {
        StartToEnd.end = e.changedTouches[0].clientY
        if (scrollable) {
            if (StartToEnd.end < StartToEnd.start) {
                scrollable = false
                if (StartToEnd.start - StartToEnd.end > window.innerHeight / 5) {
                    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
                    setTimeout(() => {
                        scrollable = true
                    }, 600)
                }
            } else {
                scrollable = false
                if (StartToEnd.end - StartToEnd.start > window.innerHeight / 5) {
                    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" })
                    setTimeout(() => {
                        scrollable = true
                    }, 600)
                }
            }
        }
    });
}