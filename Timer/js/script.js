// Selectors
const playPauseBtn = document.querySelector(".btn__play");
const StopBtn = document.querySelector(".btn__pause");
const labelTimeDisplay = document.querySelector(".time_display_timer");

const inputLabelHr = document.querySelector(".times-hr");
const inputLabelMin = document.querySelector(".times-min");
const inputLabelSec = document.querySelector(".times-sec");

const warningMessage = document.querySelector(".warning");

const faPlayPause = document.querySelector(".fa-play");
// Variables
let running = false,
  timer,
  timeValue;

// Functions
const displayRemainingTime = function () {
  const hr = Number(inputLabelHr.textContent);
  const min = Number(inputLabelMin.textContent);
  const sec = Number(inputLabelSec.textContent);
  timeValue = hr * 3600 + min * 60 + sec;

  function runTimer() {
    let hrDisplay = `${Math.trunc(timeValue / 3600)}`.padStart(2, 0);
    let minDisplay = `${Math.trunc((timeValue % 3600) / 60)}`.padStart(2, 0);
    let secDisplay = `${Math.trunc((timeValue % 3600) % 60)}`.padStart(2, 0);
    labelTimeDisplay.textContent = `${hrDisplay}:${minDisplay}:${secDisplay}`;
    if (timeValue === 0) {
      clearInterval(timerCheck);
      warningMessage.textContent = "Time Over!";
      warningMessage.style.opacity = "100";
      faPlayPause.classList.add("fa-play");
      faPlayPause.classList.remove("fa-pause");
      setTimeout(() => (warningMessage.style.opacity = 0), 3000);
    }
    timeValue -= 1;
  }

  runTimer();
  const timerCheck = setInterval(runTimer, 1000);
  return timerCheck;
};

const screening = function () {
  // Checks if a timer is already runnign and clears it.
  if (timer) clearInterval(timer);
  timer = displayRemainingTime();
};

// Event Listeners
playPauseBtn.addEventListener("click", function () {
  if (
    inputLabelHr.textContent === "00" &&
    inputLabelMin.textContent === "00" &&
    inputLabelSec.textContent === "00"
  ) {
    warningMessage.textContent = "Set a time first!";
    warningMessage.style.opacity = 100;
    setTimeout(() => (warningMessage.style.opacity = 0), 3000);
  } else if (!running) {
    faPlayPause.classList.remove("fa-play");
    faPlayPause.classList.add("fa-pause");
    screening();
  } else {
    faPlayPause.classList.add("fa-play");
    faPlayPause.classList.remove("fa-pause");
    clearInterval(timer);
  }
  running = !running;
});

StopBtn.addEventListener("click", function () {
  clearInterval(timer);
  labelTimeDisplay.textContent = `00:00`;
  faPlayPause.classList.add("fa-play");
  faPlayPause.classList.remove("fa-pause");
});
