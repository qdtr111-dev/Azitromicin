const resultGmail = document.querySelector('#gmail_result');
const btnGmail = document.querySelector('#gmail_button');
const inputGmail = document.querySelector('#gmail_input');

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

btnGmail.addEventListener('click', () => {
    if(regex.test(inputGmail.value)){
        resultGmail.style.color = 'green';
        resultGmail.innerHTML = 'Gmail is valid';
    }else{
        resultGmail.style.color = 'red'
        resultGmail.innerHTML = 'Gmail is not valid'
    }
});

const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

let positionX = 0, positionY = 0;

const startAnimation = () => {
    
    const toRight = parent.clientWidth - child.clientWidth;
    const toBottom = parent.clientHeight - child.clientHeight;

    const moveBlock = () => {
        child.style.top = `${positionY}px`;
        child.style.left = `${positionX}px`;

        if (positionX < toRight && positionY === 0) {
            positionX++;
        } else if (positionX >= toRight && positionY < toBottom) {
            positionY++;
        } else if (positionY >= toBottom && positionX > 0) {
            positionX--;
        } else if (positionX === 0 && positionY > 0) {
            positionY--;
        }

        requestAnimationFrame(moveBlock);
    };

    moveBlock();
};

window.onload = startAnimation;



const secondsDisplay = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let totalSeconds = 0;
let timer = null;

const format = (time) => (time < 10 ? `0${time}` : time);

const updateTime = () => {
    totalSeconds++;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    secondsDisplay.innerHTML = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};

startButton.onclick = () => {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
};

stopButton.onclick = () => {
    clearInterval(timer);
    timer = null;
};

resetButton.onclick = () => {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    secondsDisplay.innerHTML = '00:00:00';
}; 