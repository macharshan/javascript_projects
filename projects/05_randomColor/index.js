const body = document.querySelector(`body`)
const start = document.querySelector(`#start`)
const stop = document.querySelector(`#stop`)

const randomColor = function () {
    const hex =`0123456789ABCDEF`
    let color = `#`;
    for(i = 0; i < 6 ;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

console.log(randomColor());

let changeColor;

start.addEventListener(`click`, function (e) {

    changeColor = setInterval(bgChange, 100)

    function bgChange(){
        document.body.style.backgroundColor = randomColor();
    }
})

stop.addEventListener(`click`, function (e) {
    clearInterval(changeColor);
})