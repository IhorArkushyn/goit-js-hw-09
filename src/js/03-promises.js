import { Notify } from 'notiflix/build/notiflix-notify-aio';

const submitForm = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amountPromise = document.querySelector('[name="amount"]');

submitForm.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();

  const valueFirstDelay = Number(firstDelay.value);
  const valueStep = Number(delayStep.value);
  const valueAmount = Number(amountPromise.value);

  for (let i = 1; i <= valueAmount; i += 1) {
    let promiseDelay = valueFirstDelay + valueStep * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
