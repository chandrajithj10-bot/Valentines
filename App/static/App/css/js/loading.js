const msgs = [
  "Processing your feelings… 💘",
  "Checking compatibility… 💞",
  "Almost there… 🥺",
  "Finalizing love contract… ❤️"
];

let i = 0;
const text = document.getElementById("msg");

const interval = setInterval(() => {
  text.innerText = msgs[i];
  i++;
  if (i === msgs.length) clearInterval(interval);
}, 1000);

// mood flip + redirect
setTimeout(() => {
  document.body.style.background = "#000";
  text.innerText = "Something went wrong… 💔";
}, 4200);

setTimeout(() => {
  window.location.href = "/sorry/";
}, 5200);
