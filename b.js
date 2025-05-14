let touchModel

function preload() {
  touchModel = loadModel('/models/touch.obj', true);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  orbitControl(1, 1, 1);
  
  push();
  noStroke();

  normalMaterial();
  fill(0,255,0,100);
  push();
  scale(3);
  translate(0, 0, 0);
  model(touchModel);
  pop();
  
}