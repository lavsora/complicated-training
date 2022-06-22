'use strict'

const hiSpan = document.getElementById('hi');
const daySpan = document.getElementById('day');
const timeSpan = document.getElementById('time');
const newYearDaysSpan = document.getElementById('newYearDays');
const arrDay = ['день', 'дня', 'дней'];

let newYear = String(+new Date().toLocaleDateString('ru', { year: 'numeric' }) + 1);

const setHi = (time) => {
    if (12 > time && time >= 4) {
        return `Доброе утро`
    } else if (20 > time && time >= 12) {
        return `Добрый день`
    } else if (23 > time && time >= 20) {
        return `Добрый вечер`
    } else {
        return `Доброй ночи`
    }
}

const declinationWord = (date, words) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(date % 100 > 4 && date % 100 < 20) ? 2 : cases[(date % 10 < 5) ? date % 10 : 5]];
}

const getTimeRemaining = (newYear) => {
    let date = new Date()

    let hiTime = date.getHours()
    let dayWeek = date.toLocaleDateString('ru', { weekday: 'long' })[0].toUpperCase() + date.toLocaleDateString('ru', { weekday: 'long' }).slice(1)
    let timeClock = date.toLocaleTimeString('en')

    let dateStop = new Date(newYear).getTime();
    let dateNow = date.getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    
    let daysLeft = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, dayWeek, timeClock, daysLeft, arrDay, hiTime }
}

const showTime = () => {
    let getTime = getTimeRemaining(newYear);

    hiSpan.textContent = setHi(getTime.hiTime)
    daySpan.textContent = getTime.dayWeek
    timeSpan.textContent = getTime.timeClock
    newYearDaysSpan.textContent = `До нового года осталось ${getTime.daysLeft} ${declinationWord(getTime.daysLeft, getTime.arrDay)} `
}

showTime();

setInterval(showTime, 1000)

