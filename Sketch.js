function setup() {
    createCanvas(400, 400);  
    
   
  
  }
  
  function draw() {
    background(51);
    
    
    noStroke();
    rectMode(CENTER);
    fill(255,255,100,4);
    for(i = 0; i < 100; i++){
      rect(mouseX,mouseY, i*3);
    }
    rectMode(RADIUS);
    fill(200);
   rect(mouseX,mouseY,40, 40);
   
   

}
