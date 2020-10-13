'use strict'

let ball = document.getElementById('ball');
let field = document.getElementById('field');
let ballHeight,ballWidth;

ball.onload = function() {      
    ballHeight = this.width;
    ballWidth = this.height;

    field.addEventListener('click', function(event) {
      let xPosition = event.clientX;
      let yPosition = event.clientY; 

      let ballTopPosition = Math.floor((yPosition  - ballHeight));
      let ballLeftPosition = Math.floor((xPosition  -ballWidth)); //field.clientWidth
      ball.style.marginTop = ballTopPosition+"px";
      ball.style.marginLeft = ballLeftPosition+"px";
      //alert("x = " + xPosition + " y = " + yPosition + "x = " + ballTopPosition + " y = " + ballLeftPosition)
    });

  }   
