const resultGmail = document.querySelector('#gmail_result');
const btnGmail = document.querySelector('#gmail_button');
const inputGmail = document.querySelector('#gmail_input');

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnGmail.addEventListener('click', () => {
    if(regex.test(inputGmail.value)){
        resultGmail.style.color = 'green';
        resultGmail.innerHTML = 'Gmail is valid';
    }else{
        resultGmail.style.color = 'red'
        resultGmail.innerHTML = 'Gmail is not valid'
    }
});

