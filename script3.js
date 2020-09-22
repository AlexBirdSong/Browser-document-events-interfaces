'use strict'

let elements  = document.querySelectorAll('li > a');
for (let a of elements) { 
    // alert( a.innerHTML );
    // alert(a.getAttribute('href'));
    let aLink = a.getAttribute('href');
    if(!aLink.startsWith('http://internal.com') && aLink.indexOf("://") != -1){
        a.style.color = 'orange';
    }
  }


