setInterval(updateTime, 1000)

function updateTime(){
    // console.log('it is working or not')
    var d = new Date();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var h = d.getHours();

    var secondNiddle = document.querySelector('.hand-second')
    var minuteNiddle = document.querySelector('.hand-minute')
    var hoursNiddel = document.querySelector('.hand-hours')

    var hoursRotate =  h * 30 + m /2;
    var minuteRotate = m * 6 + s / 10;
    var secondRotate = s * 6

    rotateNiddle(secondNiddle,secondRotate)
    rotateNiddle(minuteNiddle,minuteRotate)
    rotateNiddle(hoursNiddel,hoursRotate)
}


function rotateNiddle(element,deg){
    element.style.transform = 'rotateZ('+deg+'deg)';
}