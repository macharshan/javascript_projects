const time = document.querySelector(`#time`)


setInterval(function(e){
    const date = new Date()
    time.innerHTML = date.toLocaleTimeString();
}, 1000)