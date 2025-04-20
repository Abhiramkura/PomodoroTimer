let timer;
let isRunning = false;
let totalSeconds = 25 * 60;
let remainingSeconds = totalSeconds;

const display = document.getElementById("timer");

const MODES = {
    short: 5 * 60,
    long: 15 * 60
};

function updateDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (remainingSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            return;
        }
        remainingSeconds--;
        updateDisplay(remainingSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;

}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 25 * 60;
    remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);
}

function setMode(mode) {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = MODES[mode];
    remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);
}


updateDisplay(remainingSeconds);
