var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here

  // 25x25 grid of rectangles
  // for each of the tiles generates a 3D noise value
  for (var x=0; x<25; x+=1){
    for (var y=0; y<25; y+=1){
        // 3D noise value for each of the tile’s x and y coordinate as well as the frameCount
        // the grid color changes speed depending on the x coordinate of the mouse: small mouseX, faster color changes
        var n = noise(x*stepSize/100, y*stepSize/100, frameCount/mouseX); 
        // use of lerpColor() function to fill the rectangle (https://p5js.org/reference/#/p5/lerpColor) 
        let from = color(255,0,0);
        let to = color(0,255,0);
        let inter = lerpColor(from, to, n);
        fill(inter);
        // remove the stroke
        noStroke();
        // 25x25 grid of rectangles of width and height equal to stepSize
        rect(x*stepSize, y*stepSize, stepSize, stepSize);
    }
  }
}

///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here

  // 25x25 lines 25x25 lines of length stepSize 
  // for each of the compasses generates a 3D noise value
  for (var x=0; x<25; x+=1){
    for (var y=0; y<25; y+=1){
      var compassX = x*stepSize + stepSize/2;
      var compassY = y*stepSize + stepSize/2;

      // compass’ movement speed is dependent on the x coordinate: small mouseX, faster compass rotations
      var n = noise(x/stepSize, y/stepSize, frameCount/mouseX); 

      // uses the noise value with map()
      var rotZ = map(n, 0, 1, 0, 10);

      push();
      translate(compassX, compassY);
      // use of the angle from rotZ to rotate the compass
      rotate(rotZ);
      stroke(0);
      line(0, 0, 0, -stepSize);
      pop();
    }
  }
}