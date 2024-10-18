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

if(leCanvas.height > window.innerHeight){
  leCanvas.y = 50;
  leCanvas.html.style.top = leCanvas.y + "px";
}

var exPosX;
var exPosY;
var mobile;
var posExtreme = 50;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  mobile = true;
}else{
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

leCanvas.html.addEventListener("touchstart", (e) => {
  leCanvas.lock = false;
  exPosX = e.touches[0].clientX;
  exPosY = e.touches[0].clientY;
});

window.addEventListener("touchend", () => {
  leCanvas.lock = true;
});

if(!mobile){
  window.addEventListener("mousemove", (e) => {
    if (!leCanvas.lock) {
      if (leCanvas.x < 0 || leCanvas.x + leCanvas.width > window.innerWidth) {
        leCanvas.x += (e.clientX - exPosX) / 2;
        if (leCanvas.x >= 0 + posExtreme) {
          leCanvas.x = 0 + posExtreme;
        }
        if (leCanvas.x + leCanvas.width + posExtreme <= window.innerWidth) {
          leCanvas.x = window.innerWidth - leCanvas.width - posExtreme;
        }
      }
      if (leCanvas.y < 0 || leCanvas.y + leCanvas.height > window.innerHeight) {
        leCanvas.y += (e.clientY - exPosY) / 2;
        if (leCanvas.y >= 0 + posExtreme) {
          leCanvas.y = 0 + posExtreme;
        }
        if (leCanvas.y + leCanvas.height + posExtreme <= window.innerHeight) {
          leCanvas.y = window.innerHeight - leCanvas.height - posExtreme;
        }
      }
      leCanvas.html.style.left = leCanvas.x + "px";
      leCanvas.html.style.top = leCanvas.y + "px";
    }
    exPosX = e.clientX;
    exPosY = e.clientY;
  });
} else {
  window.addEventListener("touchmove", (e) => {
    if (!leCanvas.lock) {
      var touch = e.touches[0] || e.changedTouches[0];
      posX = touch.clientX;
      posY = touch.clientY;
      if (leCanvas.x < 0 || leCanvas.x + leCanvas.width > window.innerWidth) {
        leCanvas.x += (posX - exPosX) / 2;
        if (leCanvas.x >= 0 + posExtreme) {
          leCanvas.x = 0 + posExtreme;
        }
        if (leCanvas.x + leCanvas.width + posExtreme <= window.innerWidth) {
          leCanvas.x = window.innerWidth - leCanvas.width - posExtreme;
        }
      }
      if (leCanvas.y < 0 || leCanvas.y + leCanvas.height > window.innerHeight) {
        leCanvas.y += (posY - exPosY) / 2;
        if (leCanvas.y >= 0 + posExtreme) {
          leCanvas.y = 0 + posExtreme;
        }
        if (leCanvas.y + leCanvas.height + posExtreme <= window.innerHeight) {
          leCanvas.y = window.innerHeight - leCanvas.height - posExtreme;
        }
      }
      leCanvas.html.style.left = leCanvas.x + "px";
      leCanvas.html.style.top = leCanvas.y + "px";
    }
    exPosX = posX;
    exPosY = posY;
    console.log(leCanvas.y);
  });
}

