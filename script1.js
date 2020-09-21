'use strict'

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    let lenghtLi = li.getElementsByTagName('li').length;
    alert(title + ": " + lenghtLi);
  }

