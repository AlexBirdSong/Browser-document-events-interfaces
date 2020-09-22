'use strict'

let elements  = document.querySelectorAll('li > a');
for (let a of elements) { 
    alert( a.innerHTML );
  }


let link = document.querySelector('a');
link.style.color = 'orange';