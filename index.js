const button = document.createElement('button');
button.textContent = 'Click Me';
Object.assign(button.style, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer'
});

button.addEventListener('click', () => {
  alert('clicked');
});

document.body.appendChild(button);
