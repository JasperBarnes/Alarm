const timerEl = document.getElementById("timer");

var pressedTime = Temporal.Now.instant().epochMilliseconds;
timerEl.textContent = "Stop";

setInterval(() => {
    timerEl.textContent = Temporal.Now.instant().epochMilliseconds - pressedTime;
},1)  

const locked = false 
if (locked = true){

}