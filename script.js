'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const arrHour = ['час', 'часа', 'часов'];
const arrMinute = ['минута', 'минуты', 'минут'];
const arrSecond = ['секунда', 'секунды', 'секунд'];

const outFirst = document.getElementById('outFirst');
const outSecond = document.getElementById('outSecond');

const declinationWord = function(date, words) {
    const cases = [2, 0, 1, 1, 1, 2];  
    return words[ (date % 100 > 4 && date % 100 < 20) ? 2 : cases[(date % 10 < 5) ? date % 10 : 5] ];
}

const addZero = function (date) {
    return String(date).padStart(2, '0');
 }

const timeClock = function () {
    const date = new Date();
    const Y = date.getFullYear();
    const D = date.getDate();
    const M = date.getMonth();
    const d = date.getDay();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const clockFormatFirst = function() {
        outFirst.innerHTML = `Сегодня ${week[d]}, ${D} ${month[M]} ${Y} года, ${h} ${declinationWord(h, arrHour)} ${m} ${declinationWord(m, arrMinute)} ${s} ${declinationWord(s, arrSecond)}`;
    }
    
    const clockFormatSecond = function() {
        outSecond.innerHTML = `${addZero(D)}.${addZero(M + 1)}.${Y} - ${addZero(h)}:${addZero(m)}:${addZero(s)}`;
    }
    
    clockFormatFirst();
    clockFormatSecond();
}

setInterval(timeClock, 1000)
