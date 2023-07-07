let progressBar_html = document.getElementById('html');
let progressBar_css = document.getElementById('css');
let progressBar_js = document.getElementById('js');
let progressBar_bj = document.getElementById('bj');
let progressBar_react = document.getElementById('react');

progressValue1 = document.querySelector('.progressValue1');
progressValue2 = document.querySelector('.progressValue2');
progressValue3 = document.querySelector('.progressValue3');
progressValue4 = document.querySelector('.progressValue4');
progressValue5 = document.querySelector('.progressValue5');

let progressValueStart1 = 0;
let progressValueStart2 = 0;
let progressValueStart3 = 0;
let progressValueStart4 = 0;
let progressValueStart5 = 0;

let progressValueEnd_html = 85;
let progressValueEnd_css = 75;
let progressValueEnd_js = 40;
let progressValueEnd_bj = 50;
let progressValueEnd_react = 20;
let speed = 20;

const htmlBar = setInterval(() => {
    progressValueStart1++;

    progressBar_html.style.width = `${progressValueStart1}%`;
    progressBar_html.style.transitionTimingFunction = 'linear';
    progressValue1.textContent = `${progressValueStart1}%`;

    if (progressValueStart1 == progressValueEnd_html) {
        clearInterval(htmlBar);
    };
    // console.log(progressValueStart1);
}, speed);

const cssBar = setInterval(() => {
    progressValueStart2++;

    progressBar_css.style.width = `${progressValueStart2}%`;
    progressBar_css.style.transitionTimingFunction = 'linear';
    progressValue2.textContent = `${progressValueStart2}%`;

    if (progressValueStart2 == progressValueEnd_css) {
        clearInterval(cssBar);
    };
    // console.log(progressValueStart2);
}, speed);

const jsBar = setInterval(() => {
    progressValueStart3++;

    progressBar_js.style.width = `${progressValueStart3}%`;
    progressBar_js.style.transitionTimingFunction = 'linear';
    progressValue3.textContent = `${progressValueStart3}%`;

    if (progressValueStart3 == progressValueEnd_js) {
        clearInterval(jsBar);
    };
    // console.log(progressValue);
}, speed);

const bjBar = setInterval(() => {
    progressValueStart4++;

    progressBar_bj.style.width = `${progressValueStart4}%`;
    progressBar_bj.style.transitionTimingFunction = 'linear';

    progressValue4.textContent = `${progressValueStart4}%`;

    if (progressValueStart4 == progressValueEnd_bj) {
        clearInterval(bjBar);
    };
    // console.log(progressValue);
}, speed);

const reactBar = setInterval(() => {
    progressValueStart5++;

    progressBar_react.style.width = `${progressValueStart5}%`;
    progressBar_react.style.transitionTimingFunction = 'linear';

    progressValue5.textContent = `${progressValueStart5}%`;

    if (progressValueStart5 == progressValueEnd_react) {
        clearInterval(reactBar);
    };
    // console.log(progressValue);
}, speed);