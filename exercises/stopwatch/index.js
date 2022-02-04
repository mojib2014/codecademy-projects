let secondCount = 0;
let stopwatch;
const displayStopwatch = () => {
  const clock = document.querySelector(".clock");
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60);
  let seconds = Math.floor(secondCount % 60);

  // Display a leading zero if the value are less than 10
  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the current stopwatch
  clock.textContent =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;

  secondCount++;
};

// Store references to the buttons in contstants
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

// When the start button is pressed start running stopwatch() once per second using setInterval()
startBtn.addEventListener("click", () => {
  stopwatch = setInterval(displayStopwatch, 1000);
  startBtn.disabled = true;
});

// When the stop button is pressed, clear the interval to stop the stopwatch and enable the start button
stopBtn.addEventListener("click", () => {
  clearInterval(stopwatch);
  startBtn.disabled = false;
});

// When the reset button is clicked, set
resetBtn.addEventListener("click", () => {
  clearInterval(stopwatch);
  startBtn.disabled = false;
  secondCount = 0;
  displayStopwatch();
});
displayStopwatch();
