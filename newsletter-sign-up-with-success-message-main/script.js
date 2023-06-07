const form = document.querySelector('form');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card_2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    card_1.classList.add('hide');
    card_2.classList.remove('hide');
});
const button = document.querySelector('.back');
button.addEventListener('click', (i)=>{
    i.preventDefault();
    card_2.classList.add('hide');
    card_1.classList.remove('hide');
})