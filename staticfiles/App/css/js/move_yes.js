document.querySelectorAll(".yes").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    const x = Math.random() * 40 - 20;
    const y = Math.random() * 40 - 20;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });

  btn.addEventListener("click", () => {
  window.location.href = "/loading/";
});
});
