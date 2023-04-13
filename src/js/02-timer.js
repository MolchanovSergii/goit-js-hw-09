import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log('почему обновляется?', selectedDates[0]);   
    },
};


const calendar = flatpickr('#datetime-picker', options);

console.log('как его достать? ', calendar.selectedDates[0]);




// function dateSetting(userDate) {
//     const start = new Date();
//     const startTime = start.getTime();
//     const endTime = userDate.getTime();
//     let rangeTime = endTime - startTime;

//     if (rangeTime <= 0) {
//         window.alert('Please choose a date in the future');
//     } else {
//         startBtn.disabled = false;
//     }
// }













