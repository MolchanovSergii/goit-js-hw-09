import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let userDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log('selectedDates[0]', selectedDates[0]);
        userDate = selectedDates[0];
        console.log('userDate внутри настроеек: ', userDate)
    },
};


flatpickr('#datetime-picker', options);

console.log('userDate снаружи настроеек: ', userDate);














