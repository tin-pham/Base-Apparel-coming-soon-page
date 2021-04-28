const form = document.getElementById('form');
const button = document.getElementById('arrow');
const message = document.getElementById('message');
const input = document.querySelector('input');

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
form.addEventListener('submit', (e) => {
  if (!input.value.match(pattern)) {
    e.preventDefault();
    form.classList.add('invalid');
    form.classList.remove('valid');
    message.innerHTML = 'Please provide a valid email';
    console.log('stupid');
    // Style
    message.style.color = 'hsl(0, 93%, 68%)';
  } else {
    e.preventDefault();
    form.classList.remove('invalid');
    form.classList.add('valid');
    message.innerHTML = 'Submit successful';
    message.style.color = 'black';

    input.value = '';
    console.log('2');
  }
});
