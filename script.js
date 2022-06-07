'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
const outFirst = document.getElementById('outFirst');
const outSecond = document.getElementById('outSecond');

let hour = '';

const clockFormatFirst = function() {
    let date = new Date();

    let Y = date.getFullYear();
    let D = date.getDate();
    let M = month[date.getMonth()];
    let d = week[date.getDay()];
    let h = date.getHours()
    let m = date.getMinutes();
    let s = date.getSeconds();

    const changeEndHour = function() {
        switch(true){
            case h === 1:
            case h === 21:
                hour = 'час';
            break;
            case h >= 22:
            case h <= 4:
                hour = 'часа';
            break;
            case h <= 20:
                hour = 'часов';
            break;
        }
    }
    changeEndHour()

    outFirst.innerHTML = `Сегодня ${d}, ${D} ${M} ${Y} года, ${h} ${hour} ${m} минут ${s} секунды`;
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





