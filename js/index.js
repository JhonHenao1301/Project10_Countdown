const months     = document.getElementById('months');
const days    = document.getElementById('days');
const hours      = document.getElementById('hours');
const minutes   = document.getElementById('minutes');
const seconds   = document.getElementById('seconds');

const newYearDate = new Date("Jan 1, 2023 00:00:00").getTime()

updateCountdown()

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearDate - now;
    console.log(gap);

    const second    = 1000;
    const minute    = second * 60;
    const hour      = minute * 60;
    const day       = hour * 24;
    const month     = day * 30.9;
    
    const s = Math.floor(( gap % minute) / second);
    const m = Math.floor(( gap % hour ) / minute);
    const h = Math.floor((gap % day) / hour);
    const d = Math.floor((gap % month) /day);
    const mo = Math.floor(gap/month);

    months.innerText = '0' + mo;
    days.innerText = '0' + d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    setTimeout(updateCountdown, 1000);

 }

