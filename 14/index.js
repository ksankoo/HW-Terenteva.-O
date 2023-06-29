let directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

directors.forEach(function (item, index, array){
    let divDirector = document.createElement('div');
    divDirector.className = "director";
    let script = document.querySelector('script');
    script.insertAdjacentElement("beforebegin", divDirector);

    let divName = document.createElement('div');
    divName.className = "name";
    divDirector.insertAdjacentElement("beforeend", divName);
    let nameObject = item.name;
    divName.insertAdjacentText("beforeend", nameObject);

    let divCareer = document.createElement('div');
    divCareer.className = "career";
    divDirector.insertAdjacentElement("beforeend", divCareer);
    let careerObject = item.career;
    divCareer.insertAdjacentText("beforeend", careerObject);
        
    let divFilms = document.createElement('a');
    divFilms.className = "films";
    divDirector.insertAdjacentElement("beforeend", divFilms);
    let filmsObject = item.films;
    divFilms.setAttribute("href", filmsObject)
    divFilms.insertAdjacentText("beforeend", "Фильмография");
});

let topFilmsList = directors.map(function(item) {
    return item.top_rated_film;
});

let divTopFilms = document.createElement('div');
divTopFilms.className = "topfilm";
let script = document.querySelector('script');
script.insertAdjacentElement('beforebegin', divTopFilms);
let topFilms = topFilmsList.map((item) => `"${item}"`).join(', ');
let topText = "Их лучшие фильмы: ";
divTopFilms.innerHTML = `${topText} ${topFilms}`;




// Задание со звездочкой:
// обрезала со строки лишние пробелы, поделила строку на массив из слов, перевернула чтобы можно было использовать ...rest, через .length вернула количество символов в последнем слове

const getLastWordLength = (str) => {
    let words = str.trim();
    words = words.split(' ');
    let wordsReversed = words.reverse();
    let [lastWord, ...rest] = wordsReversed;
    return lastWord.length;
}
console.log(getLastWordLength(' '));

console.log(getLastWordLength('man in BlacK'));

console.log(getLastWordLength('hello, world!  '));
