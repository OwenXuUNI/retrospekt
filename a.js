let lightModel

function preload() {
  lightModel = loadModel('models/light.obj', true);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  orbitControl(1, 1, 1);
  
  normalMaterial();
  fill(0,255,0,100);
  scale(3);
  model(lightModel);
}