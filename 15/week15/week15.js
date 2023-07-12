//Задание 1
// Выведите числа от 1 до 10 в консоль

let i = 0;
for (i = 1; i <= 10; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

let i = 0;
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

let i = 0;
for (i = 10; i >= 1; i--) {
    console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

let i = 0;
for (i = 1; i <= 10; i++) {
    let timesFive = i * 5;
    console.log(timesFive);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

let i = 0;
let total = 0;
for (i = 1; i <= 100; i++) {
    total += i;
}
console.log(total);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

const array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for

const numbers = [1, 2, 3, 4, 5];
let numbersSum = 0;
for (i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
}
console.log(numbersSum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур", "Касатка", "Медведь"];
for (i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + ' - прекрасное животное!'
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль

const str = 'Hello';
for (i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

const array = [1, 2, 3, 4, 5];
for (let number of array) {
    console.log(number);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

const sentences = ['Hello, world!', 'How are you?'];
for (let str of sentences) {
    let words = str.split(' ');

    for (let word of words) {
        console.log(word);
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (let number of numbers) {
    total += number;
}
console.log(total);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль

const list = ['apple', 'banana', 'cherry'];
for (let word of list) {
    console.log(word.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

let words = ['Hello', 'world', '!'];
for (i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.toUpperCase();
}
console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (i = 0; i < greeting.length; i++) {
    if (vowels.includes(greeting[i])) {
        vowelCount += 1;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

let words = ['Hello', 'world', '!'];
let str = '';
for (i = 0; i < words.length; i++) {
    str += words[i];
    str += ' ';
}
console.log(str);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

i = 1;
while ( i < 11) {
    console.log(i);
    i++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

i = 10;
while ( i > 0) {
    console.log(i);
    i--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break

const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let i = 0;

while (allPositive && i < allNumbers.length) {
    if (allNumbers[i] < 0) {
        allPositive = false;
        break;
    }
    i++;
}
console.log("Task 19:", allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while

const random = [2, 4, 6, -3, 8, 10];
i = 0;
do {
    console.log(random[i]);
    i++;
} while (random[i] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

i = 0;
do {
    if (i % 3 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

let sum = 0;
let str = 0;
do {
    str = prompt("Введите число");
    let number = Number(str);
    sum += number;
    console.log(sum);
} while (sum <= 100);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет



// Это я сама выстрадала

    let heads = [];
    heads = Array.from(document.querySelectorAll("h4"));
    console.log(heads);

    for(i = 0; i < heads.length; i++) {
        heads[i].classList.add('blue-head');
    }

// А это Зульфия разобрала

    let heads = document.querySelectorAll("h4");
    for (let head of heads) {
        head.className = "blue-head";
    }


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

let letters = alphabet.split(''); // массив букв

let randomNumber = Math.floor(Math.random() * 6); // длина строки

let randomAlphabet = '';
for (i = 0; i <= randomNumber; i++) {
    randomAlphabetNumber = Math.floor(Math.random() * (letters.length - 1)) + 1;
    randomAlphabet = letters[randomAlphabetNumber];

    randomString += randomAlphabet;
} 
console.log(randomString);


