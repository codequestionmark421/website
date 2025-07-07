const button = document.createElement('button');
button.textContent = 'Click Me';
Object.assign(button.style, {
  position: 'absolute',
  top: '50px',
  left: '50px',
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
});

button.addEventListener('click', () => {
  alert('cheater');
});

document.body.appendChild(button);

const maxX = window.innerWidth - button.offsetWidth;
const maxY = window.innerHeight - button.offsetHeight;

setInterval(() => {
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}, 500);
