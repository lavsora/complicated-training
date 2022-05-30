let lang = prompt('Какой язык хотите выбрать? Введите обозначения "ru" или "en"', 'ru/en');

if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('Введите корректные данные');
}

switch(true) {
    case lang == 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case lang == 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Введите корректные данные');
}

let arrayLangs = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

lang == 'ru' ? console.log(arrayLangs[0]) : 
    (lang == 'en') ? console.log(arrayLangs[1]) :
    console.log('Введите корректные данные');

    

let namePerson = prompt('Введите имя!');

namePerson == 'Артем' ? console.log('Директор') :
    (namePerson == 'Александр') ? console.log('Преподаватель') :
    console.log('Студент');
