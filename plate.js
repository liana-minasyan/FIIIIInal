function Plate () {
  this.x = width/2;
  this.y = height-20;
  this.length = 100;
  this.height = 20;
  this.xspeed = 0;
  
  this.draw = function() {
    fill(0, 0, 250);
    rectMode(CENTER);
    rect( this.x, this.y, this.length, this.height)
    this.x = constrain(this.x, this.length/2, width - this.length/2);
  }
  this.move = function () {
    this.x = this.x + this.xspeed;
  }
  
  this.dir = function (x) {
    this.xspeed = 5;
    this.xspeed *= x;
  } 
}