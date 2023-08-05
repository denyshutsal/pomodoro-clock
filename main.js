"use script";

const breakBtnMinus = document.querySelector(".breakBtnMinus");
const breakBtnPlus = document.querySelector(".breakBtnPlus");
const workBtnMinus = document.querySelector(".workBtnMinus");
const workBtnPlus = document.querySelector(".workBtnPlus");
const workTime = document.querySelector(".workTime");

const resetTimerBtn = document.querySelector(".resetTimerBtn");
const startTimerBtn = document.querySelector(".circle");
const timer = document.querySelector(".timer");

let workStartMin = 0;
let workStartSec = 0;
let endMin = 25;

// variable to store our intervalID
let nIntervId;

startTimerBtn.addEventListener("click", changeColor);
resetTimerBtn.addEventListener("click", stopTextColor);
workBtnMinus.addEventListener("click", function () {
  endMin--;
  workTime.innerHTML = endMin;
});
workBtnPlus.addEventListener("click", function () {
  endMin++;
  workTime.innerHTML = endMin;
});

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  checkTime();
  timer.innerHTML = `${workStartMin}:${workStartSec}`;
  workStartSec++;
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
  workStartMin = 0;
  workStartSec = 0;
  timer.innerHTML = `${workStartMin}:${workStartSec}`;
}

function checkTime() {
  if (workStartMin === endMin) {
    stopTextColor();
  } else if (workStartSec === 60) {
    workStartMin++;
    workStartSec = 0;
  }
}
