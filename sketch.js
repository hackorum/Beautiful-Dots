var r,g,b,a,x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  a=random(20,100);
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  x=random(0,windowWidth);
  y=random(0,windowHeight);
  fill(r,g,b,a);
  noStroke();
  circle(x,y,30);
}

function mousePressed(){
 background(r,g,b);
}
