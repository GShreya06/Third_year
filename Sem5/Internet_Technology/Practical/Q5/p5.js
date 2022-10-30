const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.btn5');
const button6 = document.querySelector('.btn6');
const button7 = document.querySelector('.btn7');
const button8 = document.querySelector('.btn8');
const button9 = document.querySelector('.btn9');

button1.addEventListener('click', function () {
    document.querySelector('p').style.color = 'red';
})
button2.addEventListener('click', function () {
    document.querySelector('p').style.color = 'green';
})
button3.addEventListener('click', function () {
    document.querySelector('p').style.color = 'blue';
})
button4.addEventListener('click', function () {
    document.querySelector('p').style.fontSize = '10px';
})
button5.addEventListener('click', function () {
    document.querySelector('p').style.fontSize = '20px';
})
button6.addEventListener('click', function () {
    document.querySelector('p').style.fontSize = '30px';
})
button7.addEventListener('click', function () {
    document.querySelector('p').style.fontFamily = 'Garamond';
})

button8.addEventListener('click', function () {
    document.querySelector('p').style.fontFamily = 'Brush Script MT';
})
button9.addEventListener('click', function () {
    document.querySelector('p').style.fontFamily = 'Courier New';
})
