'use strict'

let elem = document.getElementById('field');
let coord = elem.getBoundingClientRect();
alert("Координаты первого: x: " + coord.left + " y: " + coord.top );
lert("Координаты второго: x: " + coord.right + " y: " + coord.bottom );
alert("Координаты третьего: x: " + (coord.left + elem.clientLeft) + " y: " + (coord.top + elem.clientTop));
alert("Координаты четвертого: x: " + (coord.right - elem.clientLeft) + " y: " + (coord.bottom - elem.clientTop));