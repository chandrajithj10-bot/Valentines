setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-10px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animation = "fall 4s linear";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}`;
document.head.appendChild(style);
