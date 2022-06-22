'use strict'

const input = document.querySelector('input');
const p = document.querySelector('p');

let valueWriteDebounce;

const debounce = (fn, ms) => {
    let timeOut;

    return function () {
        const fnCall = () => { fn.apply(this, arguments) }

        clearTimeout(timeOut);

        timeOut = setTimeout(fnCall, ms)
    }
}

const valueWrite = () => {
    p.textContent = input.value
}

valueWriteDebounce = debounce(valueWrite, 300)

input.addEventListener('keyup', valueWriteDebounce)

