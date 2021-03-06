// ikeda.1
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

var u = 0.7;
var r = 5;

function ikeda(u, x0, y0, iterations) {
	var x = x0;
	var y = y0;
	
	for (i = 0; i < iterations; i++) {
		var t = 0.4 - 6/(1 + x*x + y*y)
		var x1 = 1 + u * (x*cos(t) - y*sin(t));
		var y1 = y1 = u*(x*sin(t) + y*cos(t));
		x = x1
		y = y1
		point(map(x, -r, r, 0, width), map(y, -r, r, height, 0));
	}
	
}

function setup() {
  createCanvas(2000, 2000);
  background(0);

  noLoop();
}

function draw() {
  stroke(255, 50);
  for (j = 0; j < 100000; j++) {
		ikeda(u, random(-r, r), random(-r, r), 2000);
  }
}