// Hex
// Mark Bellott

// Inspired by:
// openprocessing.org/sketch/698801

let waveSystem
let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  background(0)
  smooth(10)
  frameRate(30)
  strokeWeight(0.5)
  stroke(255)
  noFill()
  noiseSystem = new NoiseWaves(0.1, 0.003)
}

function draw() {
  background(0)
  noiseSystem.run()
}

// Waves

function NoiseWaves(scale, speed) {
  this.waves = []
  this.N = 50
  for (let i=0; i<this.N; i++) {
    let attenuation = map(i,0,this.N, -H*0.7, H*0.7)
    this.waves.push(new Noise(scale, speed, attenuation, i*0.001))
  }
}

NoiseWaves.prototype.run = function(){
  for (var i = 0; i < this.N; i++){
    this.waves[i].display();
  }
}     

// Noise

function Noise(scale, speed, attenuation, offset) {
  this.N = 500
  this.scale = scale
  this.speed = speed
  this.attenuation = attenuation
  this.offset = offset
}

Noise.prototype.display = function() {
  let r = 7000
  push()
  translate(W/2,H/2)
  beginShape()
  for (let i=0; i<this.N; i++) {
    let z = norm(i,0,this.N)*W
    let x = lerp(-this.attenuation, this.attenuation, noise(z*this.scale,frameCount*this.speed + this.offset))*3
    let y = r * cos(radians(z) + PI)
    vertex(x,y)
  }
  endShape()
  pop()
}
