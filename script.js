const heading = document.querySelector('#heading');
const changeColorButton = document.querySelector('#change-color');
const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink'];
let colorIndex = 0;

changeColorButton.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  heading.style.color = colors[colorIndex];
});
