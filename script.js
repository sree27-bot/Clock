// Update digital clock
function updateClock() {
    const clockElement = document.getElementById("clock");
  
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update date
  function updateDate() {
    const dateElement = document.getElementById("date");
  
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
  
    dateElement.textContent = dateString;
  }
  
  // Draw analog clock
  function drawAnalogClock() {
    const canvas = document.getElementById("analog-clock");
    const ctx = canvas.getContext("2d");
    const now = new Date();
  
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = centerX - 10;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Clock face
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  
    // Hour hand
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + radius * 0.5 * Math.cos(((hour + minute / 60) * Math.PI) / 6 - Math.PI / 2),
      centerY + radius * 0.5 * Math.sin(((hour + minute / 60) * Math.PI) / 6 - Math.PI / 2)
    );
    ctx.stroke();
  
    // Minute hand
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + radius * 0.7 * Math.cos(((minute + second / 60) * Math.PI) / 30 - Math.PI / 2),
      centerY + radius * 0.7 * Math.sin(((minute + second / 60) * Math.PI) / 30 - Math.PI / 2)
    );
    ctx.stroke();
  
    // Second hand
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + radius * 0.9 * Math.cos((second * Math.PI) / 30 - Math.PI / 2),
      centerY + radius * 0.9 * Math.sin((second * Math.PI) / 30 - Math.PI / 2)
    );
    ctx.stroke();
  }
  
  // Theme toggle functionality
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  
  // Initialize and update all components
  function updateClockAndDate() {
    updateClock();
    updateDate();
    drawAnalogClock();
  }
  
  setInterval(updateClockAndDate, 1000);
  updateClockAndDate();
  