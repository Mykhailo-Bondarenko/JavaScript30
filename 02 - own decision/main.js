const second = document.querySelector('.second-hand');
const minute = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

console.log(second);
function getTime() {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  second.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = time.getMinutes();
  const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minute.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = time.getHours();
  const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hour.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(getTime, 1000);
getTime();