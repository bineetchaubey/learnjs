
/**
 *  Program to calclate difference beteen hours and minutes
 * 
 */

function minumumValue(x,y) {
    return x<y ? x : y
}
function getAngle (h,m){

    if(m<0 || m > 60 || h< 0 || h> 12){
        return 
    }

    if(m==60){

        m=0;
        h += 1;
        if(h > 12){
            h = h-12
        }
    }

    var hoursAngle = h*30 + m/2
    var minuteAngle = m * 6

    var anglediff  = Math.abs(hoursAngle-minuteAngle)
    var actualAngle = minumumValue(360-anglediff,anglediff)
    return actualAngle
   
}

console.log('diffrence betwwen 1 hours and 50 minute',getAngle(1,50));
