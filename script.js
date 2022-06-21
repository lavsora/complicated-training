'use strict'

const input = document.querySelector('input');
let p = document.querySelector('p');

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

let valueWriteDebounce = debounce(valueWrite, 300)

input.addEventListener('keyup', valueWriteDebounce)

