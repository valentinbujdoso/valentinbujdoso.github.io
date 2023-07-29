window.onload = load;

function load(e) {
  document.getElementById("animation").onchange = animation;
  document.getElementById("fontsize").onchange = fontsize;
  document.getElementById("turbo").onchange = turbo;
  document.getElementById("start").onclick = start;
  document.getElementById("stop").onclick = stop;
}

let framesToShow = undefined;
let indexOfFrames = 0;
let interval = undefined;

function tick() {
  const textArea =  document.getElementById("text-area");
  textArea.value = framesToShow[indexOfFrames];
  if (++indexOfFrames == framesToShow.length) indexOfFrames = 0;
}

function startInterval() {
  const turbo = document.getElementById("turbo").checked;
  if(turbo) {
    interval = setInterval("tick()", 50);
  } else  {
    interval = setInterval("tick()", 250);
  }
}

function start() {
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  const textArea =  document.getElementById("text-area");
  framesToShow = textArea.value.split("=====\n");
  indexOfFrames = 0;

  startInterval();
}

function stop() {
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  clearInterval(interval);
  animation();
}

function animation() {
  const animation = document.getElementById("animation").value;
  document.getElementById("text-area").value = ANIMATIONS[animation];
}

function fontsize() {
  const fontsize = document.getElementById("fontsize").value;
  document.getElementById("text-area").style.fontSize = fontsize;
}

function turbo() {
  clearInterval(interval);
  startInterval();
}
