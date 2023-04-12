const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
// const body = document.querySelector('body');

startBtn.addEventListener('click', onStartChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

function onStartChangeColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function onStopChangeColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
}

// changeColorBtn.addEventListener("click", () => {
//   let hexColor = getRandomHexColor();
//   document.body.style.backgroundColor = hexColor;
//   colorName.textContent = hexColor;
// });
// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 2000);
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
