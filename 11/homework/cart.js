let price1 = document.querySelector('.price_1');
let price11 = +price1.textContent;

let price2 = document.querySelector('.price_2');
let price22 = +price2.textContent;

let price3 = document.querySelector('.price_3');
let price33 = +price3.textContent;

let price4 = document.querySelector('.price_4');
let price44 = +price4.textContent;

let total = price11 + price22 + price33 + price44;

let totalPrice = document.querySelector('.total-price');
totalPrice.textContent = "Итого:" + " " + `${total} руб.`;

let button = document.querySelector('.button');
button.onclick = function twentyOff () {
    let twenty = total * 0.8;
    totalPrice.textContent = "Итого:" + " " + `${twenty} руб.`;
};