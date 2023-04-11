import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.querySelector("input[type = 'text']");
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
const timer = document.querySelector('div.timer');
const days = document.querySelectorAll('div.field');
const values = document.querySelectorAll('span.value');
console.log(days);

timer.style.cssText = `
margin-top: 40px;
display: flex;
gap: 15px`;

days.forEach(day => {
  day.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center`;
});

values.forEach(value => {
  value.style.cssText = `
    font-size: 40px;
 color: #4f0309`;
});


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
console.log(options.defaultDate);
// console.log(selectedDates[0]);
// console.log(options.onClose().bind(options));

// if (+options.onClose(selectedDates[0]).bind(options) <= options.defaultDate) {
//   console.log('123');
// }

flatpickr(dateInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
