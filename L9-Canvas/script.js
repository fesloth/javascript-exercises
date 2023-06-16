var canvas = document.getElementById("myCanvas");

canvas.width = 400;
canvas.height = 320;

var context = canvas.getContext("2d");

var x = 0;
var y = canvas.height / 2;
var radius = 7;
var direction = 1;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "green";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "white";
  context.fill();

  x += 2 * direction;
  if (x + radius > canvas.width) {
    direction *= -1;
  } else if (x - radius < 0) {
    direction = 1;
  }

  requestAnimationFrame(draw);
}

draw();
