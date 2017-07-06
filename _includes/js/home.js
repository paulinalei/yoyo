<script type="text/javascript">
console.log("hello its linked");

var diameter;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  diameter = height - 10;
  noStroke();
  fill(234, 252, 239);
}

function draw() {
  background(255);

  var d1 = 5 + (sin(angle2) * diameter/5) + diameter/5;
  var d2 = 4 + (sin(angle1 + PI) * diameter/7) + diameter/7;
  var d3 = 7 + (sin(angle3 + PI/2) * diameter/4) + diameter/4;
  var d4 = 3 + (sin(angle2 + PI/2) * diameter/7) + diameter/7;
  var d5 = 5 + (sin(angle3 + PI/2) * diameter/5) + diameter/7;
  var d6 = 5 + (sin(angle1 + PI/2) * diameter/6) + diameter/6;

  ellipse(0, height/3, d1);
  ellipse(width/3, height/5, d2);
  ellipse(width/1.97, height/2.1, d3);
  ellipse(width, height/1.3, d4);
  ellipse(width/9, height/1.2, d5);
  ellipse(width/1.2, height/9, d6);

  angle1 += 0.02;
  angle2 += 0.03;
  angle3 += 0.01;
}
</script>