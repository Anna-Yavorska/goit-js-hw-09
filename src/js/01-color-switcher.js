import { getRandomHexColor } from "./functions";

const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

body.style.backgroundColor = getRandomHexColor();

start.addEventListener('click', changeColor);
stop.addEventListener('click', stopChanging);

let intervalId = null;

function changeColor() {
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        start.disabled = true;
    }, 1000);
};

function stopChanging() {
    clearInterval(intervalId);
    start.disabled = false;
};