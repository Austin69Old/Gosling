



function myTimer(seconds) {
    let time = secondsgit 
    let header = document.querySelector('h2')
    const countDownEl = document.getElementById('countdown');

    let interval = setInterval(
        function () {
        if(time < 10) {
            `0 ${time}`
        }  else {time};
            countDownEl.innerHTML = `${time}`;
            header.innerHTML = 'Гослинг через'
            time--
        
        if(time < 0) {
            clearInterval(interval);
            countDownEl.innerHTML = '<img src="img/gosling.jpg">'
            header.innerHTML = ''
        }
        
    }, 1000)
}

myTimer(30)



 



