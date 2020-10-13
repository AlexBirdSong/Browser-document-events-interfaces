'use strict'

let ball = document.getElementById('ball');
let field = document.getElementById('field');
let ballHeight,ballWidth;

ball.onload = function() {      
    ballHeight = this.width;
    ballWidth = this.height;

    let bottomBorder = field.clientHeight;
    let rightBorder = field.clientWidth;

    field.addEventListener('click', function(event) {
      let xPosition = event.clientX;
      let yPosition = event.clientY; 

      let ballTopPosition = yPosition  - ballHeight;
      let ballLeftPosition = xPosition  - ballWidth;
      
      if (yPosition<=bottomBorder&&xPosition<=rightBorder&&yPosition>ballHeight&&xPosition>ballWidth){
        ball.style.marginTop = ballTopPosition+"px";
        ball.style.marginLeft = ballLeftPosition+"px";
      }
      else if(xPosition>=rightBorder&&yPosition>=bottomBorder){
        ball.style.marginTop = bottomBorder-ballHeight+"px";
        ball.style.marginLeft = rightBorder-ballWidth+"px";
      }
      else if(xPosition<=ballWidth&&yPosition>bottomBorder){
        ball.style.marginTop = bottomBorder-ballHeight+"px";
        ball.style.marginLeft = 0+"px";
      }
      else if(yPosition<=ballHeight&&xPosition>rightBorder){
        ball.style.marginTop = 0+"px";
        ball.style.marginLeft = rightBorder-ballWidth+"px";
      }
      else if(yPosition>bottomBorder){
        ball.style.marginTop = bottomBorder-ballHeight+"px";
        ball.style.marginLeft = ballLeftPosition+"px";
      }
      else if(xPosition>rightBorder){
        ball.style.marginTop = ballTopPosition+"px";
        ball.style.marginLeft = rightBorder-ballWidth+"px";
      }
      else if(xPosition<=ballWidth&&yPosition<=ballHeight){
        ball.style.marginTop = 0+"px";
        ball.style.marginLeft = 0+"px";
      }
      else if(yPosition<=ballHeight){
        ball.style.marginTop = 0+"px";
        ball.style.marginLeft = ballLeftPosition+"px";
      }
      else if(xPosition<=ballWidth){
        ball.style.marginTop = ballTopPosition+"px";
        ball.style.marginLeft = 0+"px";
      }


    });

  }   
