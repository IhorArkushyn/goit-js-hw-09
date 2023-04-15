import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startTimerBtn = document.querySelector('[data-start]');
const dateInput = document.querySelector("input[type = 'text']");
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
const timer = document.querySelector('div.timer');
const days = timer.children;
const values = document.querySelectorAll('span.value');
const labels = document.querySelectorAll('span.label');

startTimerBtn.disabled = true;

document.body.style.backgroundColor = '#ece5da';

startTimerBtn.style.cursor = 'pointer';

timer.style.cssText = `
margin-top: 40px;
display: flex;
gap: 15px`;

for (const day of days) {
  day.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center`;
}

values.forEach(value => {
  value.style.cssText = `
    font-size: 40px;
    color: #231852`;
});

labels.forEach(label => {
  label.style.cssText = `
   color: #231852;
   text-transform: uppercase`;
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    } else if (selectedDates[0] > Date.now()) {
      startTimerBtn.disabled = false;
    }
  },
};
flatpickr(dateInput, options);

let deltaDate = 1;

let id = null;
const onStartBtn = () => {
  const startData = new Date(dateInput.value);
  id = setInterval(() => {
    const currentData = Date.now();
    deltaDate = startData - currentData;
    const { days, hours, minutes, seconds } = convertMs(deltaDate);
    timerDays.textContent = `${days}`;
    timerHours.textContent = `${hours}`;
    timerMinutes.textContent = `${minutes}`;
    timerSeconds.textContent = `${seconds}`;
    if (deltaDate < 1000) {
      clearInterval(id);
      startTimerBtn.disabled = true;
      return;
    }
  }, 1000);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
startTimerBtn.addEventListener('click', onStartBtn);


