let clock = document.getElementById("clock");
let date = document.getElementById("date");

function showTimeAndData() {
  const daysOfWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const dayOfWeek = now.getDay();
  clock.textContent = `${hours}:${minutes}:${seconds}`;
  date.textContent = `${daysOfWeek[dayOfWeek]}, ${day}/${month}/${year}`;
}

const interval = setInterval(showTimeAndData, 1);
