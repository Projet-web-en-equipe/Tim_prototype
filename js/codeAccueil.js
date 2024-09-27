var leCanvas = {
  html: document.querySelector("canvas"),
  x: 0,
  y: 0,
  width: 800,
  height: 800,
  lock: true,
};

leCanvas.x = window.innerWidth / 2 - leCanvas.width / 2;
leCanvas.y = window.innerHeight / 2 - leCanvas.height / 2;
leCanvas.html.style.left = leCanvas.x + "px";
leCanvas.html.style.top = leCanvas.y + "px";

var exPosX;
var exPosY;
var mobile;
if (navigator.maxTouchPoints > 0) {
  mobile = true;
} else {
  mobile = false;
}

window.addEventListener("resize", () => {
  leCanvas.x = window.innerWidth / 2 - leCanvas.width / 2;
  leCanvas.y = window.innerHeight / 2 - leCanvas.height / 2;
  leCanvas.html.style.left = leCanvas.x + "px";
  leCanvas.html.style.top = leCanvas.y + "px";
});

leCanvas.html.addEventListener("mousedown", () => {
  leCanvas.lock = false;
});

window.addEventListener("mouseup", () => {
  leCanvas.lock = true;
});

window.addEventListener("mousemove", (e) => {
  if (!leCanvas.lock) {
    if (leCanvas.x < 0 || leCanvas.x + leCanvas.width > window.innerWidth) {
      leCanvas.x += (e.clientX - exPosX) / 2;
      if (leCanvas.x >= 0) {
        leCanvas.x = 0;
      }
      if (leCanvas.x + leCanvas.width <= window.innerWidth) {
        leCanvas.x = window.innerWidth - leCanvas.width;
      }
    }
    if (leCanvas.y < 0 || leCanvas.y + leCanvas.height > window.innerHeight) {
      leCanvas.y += (e.clientY - exPosY) / 2;
      if (leCanvas.y >= 0) {
        leCanvas.y = 0;
      }
      if (leCanvas.y + leCanvas.height <= window.innerHeight) {
        leCanvas.y = window.innerHeight - leCanvas.height;
      }
    }
    leCanvas.html.style.left = leCanvas.x + "px";
    leCanvas.html.style.top = leCanvas.y + "px";
  }
  exPosX = e.clientX;
  exPosY = e.clientY;
});
