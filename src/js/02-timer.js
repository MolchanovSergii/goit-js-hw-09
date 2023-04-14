import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const startCountDate = Date.now();
        const endCountDate = selectedDates[0].getTime();
        const deltaCount = endCountDate - startCountDate;

        if (deltaCount <= 0) {
            window.alert("Please choose a date in the future");
        }

        startBtn.disabled = false;

        startBtn.addEventListener('click', onStart);
        
        function onStart() {

            const intervalId = setInterval(() => {
                
                const { days, hours, minutes, seconds } = convertMs(deltaCount);
                day.textContent = days;
                hour.textContent = hours;
                minute.textContent = minutes;
                second.textContent = seconds;
                deltaCount -= 1000;

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

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}













