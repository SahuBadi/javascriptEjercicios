let input = document.querySelector('input');
let counter = document.querySelector('.counter');

input.addEventListener('input', () => {
    console.log(input.dataset.validation);
    console.log(input.value.length);
    counter.textContent = input.value.length;
});