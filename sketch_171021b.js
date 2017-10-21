function setup() {
  creatCanvas(windowWidth, windowHeight);
  background(255,0,0);
}

function draw() {
  for (var y=20; y<=80; y+=10) {
    for (var x=20; x<=y; x+=5) {
      line(x, y, x-3, y-3);
    }
  }
}