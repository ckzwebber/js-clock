const clock = document.getElementById("clock");
const date = document.getElementById("date");

function showTimeAndDate() {
  const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const now = new Date();

  const formatNumber = (number) => String(number).padStart(2, "0");

  const hours = formatNumber(now.getHours());
  const minutes = formatNumber(now.getMinutes());
  const seconds = formatNumber(now.getSeconds());
  const day = formatNumber(now.getDate());
  const month = formatNumber(now.getMonth() + 1);
  const year = now.getFullYear();
  const dayOfWeek = daysOfWeek[now.getDay()];

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  date.textContent = `${dayOfWeek}, ${day}/${month}/${year}`;
}

setInterval(showTimeAndDate, 1000);
