'use strict';

const lang = prompt('Какой язык хотите выбрать? Введите обозначения "ru" или "en"', 'ru/en');
const namePerson = prompt('Введите имя!');

const ruWeek = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
const enWeek = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

const ruWeekArray = ruWeek.split(', ');
const enWeekArray = enWeek.split(', ');

const bigArray = [[ruWeekArray], [enWeekArray]];

if (lang === 'ru') {
    console.log(ruWeek);
} else if (lang === 'en') {
    console.log(enWeek);
} else {
    console.log('Введите корректные данные');
}

switch(true) {
    case lang === 'ru':
        console.log(ruWeek);
        break;
    case lang === 'en':
        console.log(enWeek);
        break;
    default:
        console.log('Введите корректные данные');
}

lang === 'ru' ? console.log(bigArray[0]) : 
    (lang === 'en') ? console.log(bigArray[1]) :
    console.log('Введите корректные данные');

namePerson === 'Артем' ? console.log('Директор') :
    (namePerson === 'Александр') ? console.log('Преподаватель') :
    console.log('Студент');
