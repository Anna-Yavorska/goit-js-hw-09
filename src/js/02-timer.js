import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import * as functions from './functions';

const body = document.querySelector('body');

body.style.backgroundColor = functions.getRandomHexColor();

export const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let futureDay = null;
let differenceTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const today = Date.now();
    futureDay = selectedDates[0];

    if (futureDay > Date.now()) {
      refs.start.disabled = false;
      functions.showSuccessMessage('Now you can press "Start"');
      refs.start.addEventListener('click', () => {
        const intervalId = setInterval(() => {
          calculateTime();
          if (differenceTime <= 0) {
            clearInterval(intervalId);
            functions.resetTimer();
            return;
          }
        }, 1000);
      });
    } else {
      refs.start.disabled = true;
      functions.showFailorMessage('Please choose a date in the future');
    }
  },
};

flatpickr(refs.input, options);

function calculateTime() {
  refs.start.disabled = true;
  differenceTime = futureDay - Date.now();
  const time = functions.convertMs(differenceTime);
  const { days, hours, minutes, seconds } = time;
  refs.days.textContent = functions.addLeadingZero(days);
  refs.hours.textContent = functions.addLeadingZero(hours);
  refs.minutes.textContent = functions.addLeadingZero(minutes);
  refs.seconds.textContent = functions.addLeadingZero(seconds);
}
