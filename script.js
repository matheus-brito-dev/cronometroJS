let startTime;
let elapsedTime = 0;
let interval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateTime, 1000);
  }
});

pauseBtn.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    elapsedTime += Date.now() - startTime;
    interval = null;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  display.textContent = "00:00:00";
});
