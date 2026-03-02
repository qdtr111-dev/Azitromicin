const result = document.querySelector ('#phone_result');
const btn = document.querySelector('#phone_button');
const inputPhone = document.querySelector('#phone_input');

const regex = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

btn.addEventListener('click', () => {
    if(regex.test(inputPhone.value)){
        result.style.color = 'green';
        result.innerHTML = 'Phone is valid';
    }else{
        result.style.color = 'red'
        result.innerHTML = 'Phone is not valid'
    }
})
