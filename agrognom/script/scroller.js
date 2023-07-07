window.onload = () => {
    let scrollable = true

    let slider = document.getElementById('slider')

    document.body.style.overflow = 'hidden'

    window.addEventListener('wheel', (e) => {
        if (slider.clientHeight < window.pageYOffset) {
            console.log(slider.clientHeight, window.pageYOffset)
        }
        if (slider.clientHeight > window.pageYOffset) {
            document.body.style.overflow = 'hidden'

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
        } else {

            document.body.style.overflow = ''

        }
    })


    let startPoint;
    let moved = false;
    function touch(e) {
        e.preventDefault();
        startPoint = e.changedTouches[0].pageX;
    }
    function move(e) {
        if (moved) {
            return;
        }
        e.preventDefault();
        if (e.changedTouches[0].pageX > startPoint + slider.offsetWidth / 4) {
            console.log("направо");
            moved = true;
        }
        if (e.changedTouches[0].pageX < startPoint - slider.offsetWidth / 4) {
            console.log("налево");
            moved = true;
        }
    }
    slider.addEventListener("touchmove", move);
    slider.addEventListener("touchstart", touch);
    slider.addEventListener("touchend", () => {
        setTimeout(() => {
            moved = !moved;
        }, 200);
    });
    
    slider.addEventListener('mouseover' , (e)=>{
        console.log(e)
    })
    slider.addEventListener("touchstart", (e)=>{
        console.log(e.changedTouches[0].clientY)
    });
    slider.addEventListener("touchend", (e)=>{
        console.log(e.changedTouches[0].clientY)
    });
}
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     console.log(navigator.userAgent)
// } else {
//     console.log(navigator.userAgent)
// }