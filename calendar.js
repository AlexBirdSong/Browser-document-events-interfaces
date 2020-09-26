'use strict'

function createCalendar(elem, year, month){

    elem.innerHTML="<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>"; 
}

let elem = document.getElementById('cal');

createCalendar(elem, 2019, 5);
