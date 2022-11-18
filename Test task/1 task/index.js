const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return(seconds) => {
        let i = a => (a - a % 1 + "").padStart(2, "0"),
            minutes = 60,
            hours = minutes * minutes;
        seconds += new Date / 1000;
        const intervalId = setInterval(() => {
            let time = Math.ceil(seconds - new Date / 1000)+1;
            console.log(time)
            if(time > 0) {
                timerEl.textContent = [time / hours, time % hours / minutes, time % hours % minutes].map(i).join(":");
            } else if (time === 0) {
                timerEl.textContent = [time / hours, time % hours / minutes, time % hours % minutes].map(i).join(":");
                clearInterval(intervalId)
            }

        }, 1000);
    }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event)=>{
  inputEl.value = inputEl.value.replace (/[^\+\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
