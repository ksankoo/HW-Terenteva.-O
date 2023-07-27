// 1. Практическое задание №1

// class Worker {
//     constructor (name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         return this.rate * this.days;
//     }
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31



// 2. Практическое задание №2

const transports = document.querySelector('#transports');

function getInfo() {
    return `<div>Type: ${this.type} <br> Brand: ${this.brand}</div>`;
}

function getPrice() {
    return `<div>Price: ${this.price}</div>`;
}

function getDoorsCount() {
    return `<div>Doors: ${this.doors}</div>`;
}

function getMaxSpeed() {
    return `<div>Max Speed: ${this.maxSpeed}</div>`;
}

class Transport {
    constructor (type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.getInfo = getInfo;
        this.getPrice = getPrice;
    }

}

class Car extends Transport {
    constructor (type, price, brand, doors) {
        super(type, price, brand, getInfo, getPrice);
        this.doors = doors;
        this.getDoorsCount = getDoorsCount;
    }
}

class Bike extends Transport {
    constructor (type, price, brand, maxSpeed) {
        super(type, price, brand, getInfo, getPrice);
        this.maxSpeed = maxSpeed;
        this.getMaxSpeed = getMaxSpeed;
    }
}




const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
        {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

let transportHtml = '';

data.forEach ((transport) => {
    switch (transport.type) {
        case 'car':
            const car = new Car (transport.type, transport.price, transport.brand, transport.doors);
            transportHtml += car.getInfo() + '<br>' + car.getPrice() + '<br>' + car.getDoorsCount() + '<br>';
            break;
        case 'bike':
            const bike = new Bike (transport.type, transport.price, transport.brand, transport.maxSpeed);
            transportHtml += bike.getInfo() + '<br>' + bike.getPrice() + '<br>' + bike.getMaxSpeed() + '<br>';
            break;
    }
})

transports.innerHTML = transportHtml;
