'use strict'

let ball = document.getElementById('ball');
let field = document.getElementById('field');
let ballHeight,ballWidth;

ball.onload = function() {      
    ballHeight = this.width;
    ballWidth = this.height;

    let ballTopPosition = Math.floor((field.clientHeight-ballHeight)/2);
    let ballLeftPosition = Math.floor((field.clientWidth-ballWidth)/2);
    ball.style.marginTop = ballTopPosition+"px";
    ball.style.marginLeft = ballLeftPosition+"px";

  }   
