'use strict'

let hiSpan = document.getElementById('hi')
let daySpan = document.getElementById('day')
let timeSpan = document.getElementById('time')
let newYearDaysSpan = document.getElementById('newYearDays')
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

const declinationWord = (date, words) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(date % 100 > 4 && date % 100 < 20) ? 2 : cases[(date % 10 < 5) ? date % 10 : 5]];
}

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

const getTimeRemaining = (newYear) => {
    let arrDay = ['день', 'дня', 'дней'];
    let date = new Date()

    let hiTime = date.getHours()
    let dayWeek = week[date.getDay()]
    let timeClock = date.toLocaleTimeString('en')

    let dateStop = new Date(newYear).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let daysLeft = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, dayWeek, timeClock, daysLeft, arrDay, hiTime }
}

const showTime = () => {
    let getTime = getTimeRemaining('1 january 2023')

    hiSpan.textContent = setHi(getTime.hiTime)
    daySpan.textContent = getTime.dayWeek
    timeSpan.textContent = getTime.timeClock
    newYearDaysSpan.textContent = `До нового года осталось ${getTime.daysLeft} ${declinationWord(getTime.daysLeft, getTime.arrDay)} `
}

setInterval(showTime, 1000)

