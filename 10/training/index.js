// alert('Привет!');

// let age = prompt('Сколько тебе лет?', 30);

// alert(`Тебе ${age} лет!`);

// let yes = confirm('Продолжим программировать?');
// alert('Вы выбрали ' + yes);

function showMessage () {
    alert('Привет!');
}

function sum (a,b) {
    return a + b;
}

// alert(sum(5,6));

function y(x) {
    return x ** 2;
}

let result = y(2);
// alert(result);

function showMessageFromUser (name, message = 'пустой текст') {
    alert(name + ': ' + message);
}

// alert(showMessageFromUser ('Оксана'));

function sum1(a, b) {
    return a + b;
}

var sum2 = function(a, b) {
    return a + b
};

var result2 = sum2(2, '3');

console.log(result2);



function test(func) {
    func();
}

test (function () {
    console.log('Привет!');
});


// функция мгновенного вывода

// (function (a, b) {
//     console.log(a + b);
// })(2, 3);


// стрелочная функция

let sum3 = (a, b) => a + b;

let result3 = sum3(12, 10);

let y3 = x => x * x;

console.log(y3(2));
