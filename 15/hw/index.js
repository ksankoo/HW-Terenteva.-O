const cities = ['Москва', 'Лондон', 'Нью-Йорк', 'Вильнюс', 'Владивосток'];
let temps = [];

for (i = 0; i < cities.length; i++) {
    let insertTemp = prompt(`Введите температуру в городе ${cities[i]}:`);
    temps.push(insertTemp);
    
}

let ol = document.querySelector('ol');

for (c = 0; c < cities.length; c++) {
    let city = cities[c];
    let str = city + ': ' + temps[c] + ' °C';
    console.log(str);

    let li = document.createElement('li');
    li.innerHTML = str;
    ol.append(li);
}

temps.sort(function (a, b) {
    return a - b;
});

let maxTemp = temps[temps.length-1];
let minTemp = temps[0];

let pMax = document.createElement('p');
pMax.innerHTML = `Максимальная температура: ${maxTemp} °C`;
ol.after(pMax);

let pMin = document.createElement('p');
pMin.innerHTML = `Минимальная температура: ${minTemp} °C`;
ol.after(pMin);

// let number = -10;
// let numbers = [];
// for (i = 0; i < 21; i++) {
//     numbers[i] = number;
//     number += 1;
// }

// console.log(numbers);

// for (i = 0; i < numbers.length; i++) {
//     while (numbers[i] < 0) {
//         numbers.shift();
//     }
// }

// console.log(numbers);

// for (i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * numbers[i];
// }

// console.log(numbers);

// numbers.reverse();

// console.log(numbers);