'use strict';

// querySelector
function s(value) {
  return document.querySelector(value);
}

// get divs
const speedRange        = s(".speed-range");
const speedRangeNumber  = s(".speedRangeNumber");
const fontRange         = s(".font-range");
const fontRangeNumber   = s(".fontRangeNumber");
const colorBtnBlack     = s(".user-color.color-two");
const colorBtnYellow    = s(".user-color.color-one");
const directionBtn      = s(".user-direction");
const mirrorBtn         = s(".user-mirror");
const startBtn          = s(".start");
const stopBtn           = s(".stop");
const textArea          = s(".user-text");

let scrollSpeed = 3;

// ! speed
speedRange.addEventListener('input', e => {
    scrollSpeed = speedRange.value;
    speedRangeNumber.innerHTML = `( ${scrollSpeed} )`;
})

// ! font
fontRange.addEventListener('input', e => {
    textArea.style.fontSize = fontRange.value + "px";
    fontRangeNumber.innerHTML = `( ${fontRange.value} )`;
})

// ! color
colorBtnBlack.addEventListener('click', e => {
    document.body.style.backgroundColor = "#222";
    textArea.style.backgroundColor = "#222";
    textArea.style.color = "yellow";
})
colorBtnYellow.addEventListener('click', e => {
    document.body.style.backgroundColor = "yellow";
    textArea.style.backgroundColor = "yellow";
    textArea.style.color = "#222";
})

// ! mirror
mirrorBtn.addEventListener('click', e => {
    textArea.classList.toggle('add-mirror');
})

// ! direction
directionBtn.addEventListener("click", (e) => {
  textArea.classList.toggle("add-ltr");
});

// ! start

startBtn.addEventListener("click", (e) => {

    let div = s(".user-text");

    div.scrollTo({
        top: 10,
        behavior: "smooth",
    });

    let scrollInterval = setInterval(function () {

    // div.scrollTop = 0;

    div.scrollTop = div.scrollTop + (screen.height / (1 / (scrollSpeed / 2000)));

    div.scrollTo({
        top: div.scrollTop,
        behavior: "smooth",
    });

    if(div.scrollHeight - div.scrollTop === div.clientHeight) {
        clearInterval(scrollInterval);
    }

    stopBtn.addEventListener('click', e => {
        clearInterval(scrollInterval);
    })

    }, 40);

});

console.log("report bug: https://teleprompter.ir");
console.log("developed by: https://codeNegaran.com");