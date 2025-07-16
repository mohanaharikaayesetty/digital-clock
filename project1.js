function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convert 0 to 12-hour format

  document.getElementById('hours').textContent = formatTime(hours);
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);
  document.getElementById('ampm').textContent = ampm;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call