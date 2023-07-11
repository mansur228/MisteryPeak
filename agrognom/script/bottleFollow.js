
let bottle = document.getElementById('bottle')

function setBottle() {
    bottle.style.top = window.pageYOffset + window.innerHeight / 2 - bottle.clientHeight / 2 + 'px'
}
setBottle()


window.onscroll = () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset < window.innerHeight * 2) {
        setBottle()
    }else{
        return
    }
}