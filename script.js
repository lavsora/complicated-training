'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
const outFirst = document.getElementById('outFirst');
const outSecond = document.getElementById('outSecond');

const declinationWord = function(date, words) {
    const cases = [2, 0, 1, 1, 1, 2];  
    return words[ (date % 100 > 4 && date % 100 < 20) ? 2 : cases[(date % 10 < 5) ? date % 10 : 5] ];
}

const addZero = function (date) {
    return String(date).padStart(2, '0');
 }

const clockFormatFirst = function() {
    const arrHour = ['час', 'часа', 'часов'];
    const arrMinute = ['минута', 'минуты', 'минут'];
    const arrSecond = ['секунда', 'секунды', 'секунд'];

    const date = new Date();
    const Y = date.getFullYear();
    const D = date.getDate();
    const M = month[date.getMonth()];
    const d = week[date.getDay()];
    const h = date.getHours()
    const m = date.getMinutes();
    const s = date.getSeconds();

    outFirst.innerHTML = `Сегодня ${d}, ${D} ${M} ${Y} года, ${h} ${declinationWord(h, arrHour)} ${m} ${declinationWord(m, arrMinute)} ${s} ${declinationWord(s, arrSecond)}`;
}

const clockFormatSecond = function() {
    const date = new Date();
    const Y = date.getFullYear();
    const D = date.getDate();
    const M = date.getMonth();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    outSecond.innerHTML = `${addZero(D)}.${addZero(M + 1)}.${Y} - ${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

setInterval(clockFormatFirst, 1000)
setInterval(clockFormatSecond, 1000)
