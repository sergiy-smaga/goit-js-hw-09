const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stop.disabled = true;
let intervalID = null;

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);

function onStartClick() {
  start.disabled = true;
  stop.disabled = false;
  body.style.backgroundColor = getRandomHexColor();
  intervalID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(intervalID);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
