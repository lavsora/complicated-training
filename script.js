'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const day = document.getElementById('days');
const todayDay = (6 + new Date().getDay()) % 7;

const days = function() {
    week.forEach(function(item, i) {
        let newDiv = document.createElement('div');
        if (i === todayDay) {
          newDiv.classList.add('today');
          newDiv.textContent = week[i]
        }
        if (item === 'Суббота' || item === 'Воскресенье') { 
          newDiv.classList.add('italic');
          newDiv.textContent = week[i];
        } else {
          newDiv.textContent = week[i]
        }

        day.appendChild(newDiv);
    })
}

days()