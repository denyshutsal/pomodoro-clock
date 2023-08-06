"use script";

const breakBtnMinus = document.querySelector(".break-btn-minus");
const breakBtnPlus = document.querySelector(".break-btn-plus");
const workBtnMinus = document.querySelector(".work-btn-minus");
const workBtnPlus = document.querySelector(".work-btn-plus");
const workTime = document.querySelector(".work-time");

const resetTimerBtn = document.querySelector(".reset-timer-btn");
const startTimerBtn = document.querySelector(".circle");
const timerText = document.querySelector(".timer");

let start = 25;
let workStartMin = 25;
let workStartSec = 0;
let endMin = 0;

// variable to store our interval
let interval;

startTimerBtn.addEventListener("click", startTimer);
resetTimerBtn.addEventListener("click", resetTimer);

workBtnMinus.addEventListener("click", function () {
  start--;
  workTime.innerHTML = start;
  workStartMin = start;
});

workBtnPlus.addEventListener("click", function () {
  start++;
  workTime.innerHTML = start;
  workStartMin = start;
});

function startTimer() {
  // check if an interval has already been set up
  if (!interval) {
    interval = setInterval(timer, 1000);
  }
}

function timer() {
  if (workStartMin === endMin && workStartSec === 0) {
    stopTimer();
    return;
  }

  if (workStartSec === 0) {
    workStartMin--;
    workStartSec = 59;
  }

  startTimerBtn.classList.toggle("ripples");
  timerText.innerHTML = `${workStartMin}:${workStartSec}`;
  workStartSec--;
}

function stopTimer() {
  clearInterval(interval);
  // release our intervalID from the variable
  interval = null;
  startTimerBtn.classList.remove("ripples");
  workStartMin = start;
  workStartSec = 0;
  timerText.innerHTML = "00:00";
}

function resetTimer() {
  clearInterval(interval);
  // release our intervalID from the variable
  interval = null;
  startTimerBtn.classList.remove("ripples");
  workStartMin = start;
  workStartSec = 0;
  timerText.innerHTML = `${workStartMin}:${workStartSec}0`;
}
