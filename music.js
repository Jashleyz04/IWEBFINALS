document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("audio/jazz-classic.mp3"); 
  audio.loop = true;
  audio.volume = 0.4; 

  const btn = document.createElement("button");
  btn.textContent = "🔊";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 16px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.background = "#000";
  btn.style.color = "#fff";
  btn.style.cursor = "pointer";
  btn.style.fontFamily = "Inter, sans-serif";
  btn.style.zIndex = "1000";

  document.body.appendChild(btn);

  let isPlaying = false;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      btn.textContent = "🔇";
      isPlaying = true;
    } else {
      audio.pause();
      btn.textContent = "🔊";
      isPlaying = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.textContent = nav.classList.contains("show") ? "✖" : "☰";
  });
});
