'use strict'

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
      day = 7;
    }
  
    return day;
  }

  function dayInMonth(date){
    let currdate = date;
    let nextdate = new Date(currdate.getFullYear(), currdate.getMonth()+1, currdate.getDate());
    let countDays = Math.round((nextdate - currdate) / 1000 / 3600 / 24);

    return countDays;
  }

function createCalendar(elem, year, month){
    let date = new Date(year, month, 3); 
    let day = getLocalDay(date);

    elem.innerHTML="<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>"; 
}

let elem = document.getElementById('cal');

 createCalendar(elem, 2020, 9);
