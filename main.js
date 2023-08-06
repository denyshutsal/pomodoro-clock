"use script";

// raname functions!----------------------------------

const breakBtnMinus = document.querySelector(".break-btn-minus");
const breakBtnPlus = document.querySelector(".break-btn-plus");
const workBtnMinus = document.querySelector(".work-btn-minus");
const workBtnPlus = document.querySelector(".work-btn-plus");
const workTime = document.querySelector(".work-time");

const resetTimerBtn = document.querySelector(".reset-timer-btn");
const startTimerBtn = document.querySelector(".circle");
const timer = document.querySelector(".timer");

let start = 25;
let workStartMin = 25;
let workStartSec = 0;
let endMin = 0;

// variable to store our intervalID
let nIntervId;

startTimerBtn.addEventListener("click", changeColor);
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

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  if (workStartMin === endMin && workStartSec === 0) {
    stopTextColor();
    return;
  }

  if (workStartSec === 0) {
    workStartMin--;
    workStartSec = 59;
  }

  startTimerBtn.classList.toggle("ripples");
  timer.innerHTML = `${workStartMin}:${workStartSec}`;
  workStartSec--;
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
  startTimerBtn.classList.remove("ripples");
  workStartMin = start;
  workStartSec = 0;
  timer.innerHTML = "00:00";
}

function resetTimer() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
  startTimerBtn.classList.remove("ripples");
  workStartMin = start;
  workStartSec = 0;
  timer.innerHTML = `${workStartMin}:${workStartSec}0`;
}
