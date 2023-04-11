
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
startBtn.addEventListener("click", onStartChange);

function onStartChange() {
    setInterval(() => {let hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;}, 1000)
}
if(onStartChange()) {
    startBtn.style
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
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
