'use strict'

function drawClock(){
  let currDate = new Date();
  let clockString = "<tr>";
  
  let hours = currDate.getHours();
  let minutes = currDate.getMinutes();
  let seconds = currDate.getSeconds();
  
  clockString +="<td id='hr'>" + hours + "</td><td id='mn'>" + minutes + "</td><td id='sc'>" + seconds + "</td>";
  clockString += "</tr>";

  return clockString;
}

let elem = document.getElementById('clock');

setInterval(() => elem.innerHTML=drawClock(),1000);