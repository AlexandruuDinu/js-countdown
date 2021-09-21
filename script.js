const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const endDate = '31 Dec 2021';

function countdown() {
    const birthdayDate = new Date(endDate);
    const currentDate = new Date();

    const diffInMilliseconds = birthdayDate.getTime() - currentDate.getTime();

    const totalSeconds = diffInMilliseconds / 1000;

    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);

countdown();