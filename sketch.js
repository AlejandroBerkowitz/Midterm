let posX, posY, circleSize, angle, color;

circleSize = [150, 100, 88, 394];

function setup() {
  createCanvas(400, 400);
  background('rgb(0,0,0)');
  angleMode(DEGREES);
  
  for(i=0;i<(height+circleSize[0]);i++){
    fill('rgb(0,0,255)');
    stroke('rgb(255,255,255)');
    strokeWeight(0.5);
    circle(10*sin(10*i),i,circleSize[0]);
    circle(-10*sin(10*i)+width,i,circleSize[0]);
  }

  posX = 0;
  posY = 0;
  angle = 0;
  color = 0;

}

function plant(size){
  noFill();
  stroke('rgb(255,0,255)');
  strokeWeight(size);
  arc(width/2,height,posX,posY,angle+5*(sin(5*posX))^2,angle+2+5*sin(5*posX));
}

function draw(){
  noFill();
  stroke(250,color,0);
  strokeWeight(5);
  arc(width/2,height/4,10+posX,10+posY,angle+5*sin(5*posX),angle+2+5*sin(5*posX));
  posX += 2;
  posY += 2;
  color += 2;
  noStroke();
  fill('rgb(255,0,0)');  
  circle(width/2, height/4, circleSize[1]);
  plant(1);
  
  if((10+posX) == width){
    posX = 0;
    posY = 0;
    angle += 170;
    color = 0;
  }
 
}
