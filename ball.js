/* integer part of the speed, 
if x or y < plate.x or plate. y && x or y + speed > plate.x or plate.y change dir 
maybe could be solved without changing speed every time, 
think about relation between this.xspeed and this.yspeed, maybe this.xspeed/this.yspeed
also can be solved if we release bouncing from left and right
*/
function Ball() {
  this.x = 300;

  this.y = 560;
  
  this.rad = 20;
  
  this.xspeed = 5;
  
  this.yspeed = -5;
  
  this. display = function () {
    fill(200, 200, 200);
    ellipse(this.x, this.y, this.rad, this.rad)
    this.x = constrain( this.x, this.rad/2, width - this.rad/2)
    this.y = constrain( this.y, this.rad/2, height - this.rad/2)
    this.yspeed = constrain(this.yspeed, -6, 6)
    this.xspeed = constrain(this.xspeed, -6, 6)
  }
  
  this.move = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  this.distroy = function() {
    if(this.x >= breaks[i].x - breaks[i].length/2 && this.x <= breaks[i].x + breaks[i].length/2){
      if(this.y <= breaks[i].y + ball.rad/2 + breaks[i].height/2 && this.y >= breaks[i].y - ball.rad/2 - breaks[i].height/2){
      console.log('ONCE AGAIN');
      this.yspeed *= -1;
      breaks[i].lifeLength --;
        t = t+50;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      } 
    }
    else if(this.y >= breaks[i].y - breaks[i].height/2 && this.y <= breaks[i].y + breaks[i].height/2){
      if(this.x <= breaks[i].x + ball.rad/2 + breaks[i].length/2 && this.x >= breaks[i].x - ball.rad/2 - breaks[i].length/2){
        console.log('Is getting more interesting');
        this.xspeed *= -1;
        breaks[i].lifeLength --;
        t = t+50;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      }
    }
  }
  this.bounce = function () {
    if(this.x < this.rad/2 || this.x > width - this.rad/2){
      this.xspeed *= -1;
    }
    if(this.y < this.rad/2 || this.y > height - this.rad/2){
      this.yspeed *= -1;
    }
    
  }
  
  this.changeDir = function(){
    if(this.y >= plate.y - this.rad/2 - plate.height/2 ){
      if(this.x >= (plate.x - plate.length/2) && this.x < plate.x){
      
        this.yspeed = 5;
        this.yspeed *= -1;
        this.xspeed = 5;
        this.xspeed *= -5*abs((this.x - plate.x)/plate.length/2);
      }
      
      else if((this.x <= plate.x + plate.length/2) && this.x >plate.x){
        this.yspeed = 5;
        this.yspeed *= -1;
        this.xspeed = -5;
        this.xspeed *= -5*((this.x - plate.x)/plate.length/2);
      }  
      else if(this.x == plate.x){
        this.xspeed *= -1;
        this.yspeed *= -1;
      }
    }
     // console.log('ball.yspeed is ' + this.yspeed);

      //console.log('ball.xspeed is ' + this.xspeed);
    if (this.x >= plate.x - plate.length/2 - this.rad/2 && this.x < plate.x - plate.length/2){
      if(this.y < plate.y && this.y >= plate.y - plate.height/2 - this.rad/2){
        this.yspeed = 5;
        this.xspeed = 5;
        this.yspeed *= -5*(plate.y - this.y)/(plate.height + this.rad/2)/2;
        this.xspeed *= -1;
        
        console.log('hey');
      }
      else if(this.y > plate.y && this.y <= plate.y + plate.height/2 + this.rad/2){
        this.xspeed = 5;
        this.yspeed = 5;
        this.xspeed *= -1;
        this.yspeed *= 5*((this.y - plate.y)/(plate.height + this.rad/2)/2);

        console.log('WTF?');
      }
      else if(this.y == plate.y){
        this.xspeed *= -1;
        this.yspeed *= -1;

        console.log('WHAT is going on');
      }
    }

    else if(this.x <= plate.x + plate.length/2 + this.rad/2 && this.x > plate.x + plate.length/2){
      if(this.y < plate.y && this.y >= plate.y - plate.height/2 - this.rad/2){
        this.yspeed = 5;
        this.xspeed = -5;
        this.yspeed *= -5*(plate.y - this.y)/(plate.height + this.rad/2)/2;
        this.xspeed *= -1;
        
        console.log('the same from the another side');
      }
      else if(this.y > plate.y && this.y <= plate.y + plate.height/2 + this.rad/2){
        this.xspeed = -5;
        this.yspeed = 5;
        this.xspeed *= -1;
        this.yspeed *= 5*((this.y - plate.y)/(plate.height + this.rad/2)/2);

        console.log('WTF? WTF?');
      }
      else if(this.y == plate.y){
        this.xspeed *= -1;
        this.yspeed *= -1;

        console.log('do not know what to write');
      }
    }
  else{
    return false;
  }
    if(this.y > plate.y + plate.height - this.rad/2){
      console.log('Game over');
      
    }
  }
}