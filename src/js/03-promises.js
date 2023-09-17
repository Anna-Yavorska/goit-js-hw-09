import { Notify } from 'notiflix/build/notiflix-notify-aio';

const body = document.querySelector('body');
const form = document.querySelector('.form');

body.style.backgroundColor = getRandomHexColor();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let position = 1; position <= amountValue; position += 1) {
    if (position === 1) {
      createPromise(position, delayValue)
        .then(({ position, delay }) => {
          showSuccessMessage(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          showFailorMessage(`Rejected promise ${position} in ${delay}ms`);
        });
    } else {
      createPromise(position, delayValue + stepValue * (position - 1))
        .then(({ position, delay }) => {
          showSuccessMessage(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          showFailorMessage(`Rejected promise ${position} in ${delay}ms`);
        });
    }
    form.reset();
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function showSuccessMessage(message) {
  Notify.success(message);
}

function showFailorMessage(message) {
  Notify.failure(message);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}