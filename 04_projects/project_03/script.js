const clock = document.querySelector('#clock')

setInterval(function(params) {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
