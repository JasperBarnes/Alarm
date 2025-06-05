const timerEl = document.getElementById("timer");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let runningTime = false;
var pressedTime = 0;
var continueTime = false;

timerEl.textContent = "Stop";

function startStopwatch() {
    pressedTime = new Date().getTime();
    if (continueTime) {
        pressedTime -= continueTime;
        continueTime = false;
    }
    runningTime = true;
}

function stopStopwatch() {
    continueTime = new Date().getTime() - pressedTime;
    runningTime = false;
}

function resetStopwatch() {
    continueTime = false;
    timerEl.textContent = "0";
}


startButton.onclick = startStopwatch;
stopButton.onclick = stopStopwatch;
resetButton.onclick = resetStopwatch;

setInterval(() => {
    if (runningTime) {
        timerEl.textContent = (new Date().getTime() - pressedTime) / 1000;
    }
},10)  

