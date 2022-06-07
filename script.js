'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
const outFirst = document.getElementById('outFirst');
const outSecond = document.getElementById('outSecond');

const clockFormatFirst = function() {
    const arrHour = ['час', 'часа', 'часов'];
    const arrMinute = ['минута', 'минуты', 'минут'];
    const arrSecond = ['секунда', 'секунды', 'секунд'];

    let date = new Date();
    let Y = date.getFullYear();
    let D = date.getDate();
    let M = month[date.getMonth()];
    let d = week[date.getDay()];
    let h = date.getHours()
    let m = date.getMinutes();
    let s = date.getSeconds();

    const declinationWord = function(date, words) {
        const cases = [2, 0, 1, 1, 1, 2];  
        return words[ (date % 100 > 4 && date % 100 < 20) ? 2 : cases[(date % 10 < 5) ? date % 10 : 5] ];
    }

    outFirst.innerHTML = `Сегодня ${d}, ${D} ${M} ${Y} года, ${h} ${declinationWord(h, arrHour)} ${m} ${declinationWord(m, arrMinute)} ${s} ${declinationWord(s, arrSecond)}`;
}

const clockFormatSecond = function() {
    let date = new Date();

    let Y = date.getFullYear();
    let D = date.getDate();
    let M = date.getMonth();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    const addZero = function (date) {
       return String(date).padStart(2, '0');
    }

    outSecond.innerHTML = `${addZero(D)}.${addZero(M)}.${Y} - ${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

setInterval(clockFormatFirst, 1000)
setInterval(clockFormatSecond, 1000)





