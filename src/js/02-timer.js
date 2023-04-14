import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

Notiflix.Notify.init({
  position: 'left-bottom',
  timeout: 3000,
  width: '100%',
});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const startCountDate = Date.now();
        const endCountDate = selectedDates[0].getTime();
        let deltaCount = endCountDate - startCountDate;

        if (deltaCount <= 0) {
            Notiflix.Notify.failure('Please choose a date in the future');
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }

        startBtn.addEventListener('click', onStart);
        
        function onStart() {

            const intervalId = setInterval(() => {
                const { days, hours, minutes, seconds } = convertMs(deltaCount);
                day.textContent = days;
                hour.textContent = hours;
                minute.textContent = minutes;
                second.textContent = seconds;
                deltaCount -= 1000;

                if (deltaCount <= 0) {
                    clearInterval(intervalId);
                }
            }, 1000)
        }   
    },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0 ')
};













