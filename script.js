const hourHand = document.getElementById("hour")
const minuteHand = document.getElementById("minute")
const secHand = document.getElementById("sec")


function getTime(){
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now. getSeconds();
console.log(now, hours, minutes, seconds)

const hourDegree = ((hours/12)*360);
const minutesDegree = ((minutes/60)*360)
const secondsDegree = ((seconds/60)*360)

hourHand.style.transform =`rotate(${hourDegree}deg)`;
minuteHand.style.transform =`rotate(${minutesDegree}deg)`;
secHand.style.transform =`rotate(${secondsDegree}deg)`
}


setInterval(getTime,1000);



