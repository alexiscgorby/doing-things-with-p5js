let x=0
let y= 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  stroke(50);
  fill("red");
  circle(60, y, 60, 30);

  stroke(50);
  fill("pink");
  circle(90, y, 60, 30);

  stroke(50);
  fill("blue");
  circle(120, y, 60, 30);

  stroke(50);
  fill("yellow");
  circle(150, y, 60, 30);

  stroke(50);
  fill("black");
  circle(180, y, 60, 30);

  stroke(50);
  fill("green");
  circle(210, y, 60, 30);

  stroke(50);
  fill("white");
  circle(240, y, 60, 60);

  stroke(50);
  fill("brown");
  circle(270, y, 60, 30);

  stroke(50);
  fill("purple");
  circle(300, y, 60, 30);



  
  x = x + 1;
 
  y = y - 1;
  
  if (y < 0) {
    y = height;
  }
}
