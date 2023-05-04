
// Массивы в JAVASCRIPT. Методы массивов. Редактирование, поиск, сортировка. 
// Массив объявляется с помощью '[]

//Различные типв значений
let arrTwo = [
     "Коля",
     { 
        type: "JS",
        age:36
     },
     true,
     function() {
        console.log('Hallo i am Kolya')
     }
];

//Многомерные массивы
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

//Свойство length длина массива
let arrOne8 = ['Vanya','Sascha', 'Sergey',];
console.log (arrOne8);
console.log (arrOne8.length);

//Укораиваем массив и делам 2 ключа 
let arr0= ['Vanya','Sascha','Sergey',];
console.log(arr0); //вывели массив в консоль

let arrNew = arr0; // создали ещё одну переменную для массива

arrNew.length = 2; // укоротили массив

console.log(arr0); 

// Изменение значения массива 
let arr1 = ['Vanya','Sascha','Sergey',];

//меняем существующее
arr1[0] = 'Kolya';
console.log(arr1);

// Добавляем новое 
arr1[3] = 'Vanya';
console.log(arr1);

// МЕТОДЫ МАССИВОВ

// ОЧЕРЕДЬ ПОДДЕРЖИВАЕТ 2 ВИДА ОПЕРАЦИЙ
// 1. Добавление элемента 
// 2. Удаление элемента

//Другой вариант приминения для массивов - структура данных. Стек поддерживает 2 вида операций. 

// МЕТОД push ДОБАВЛЯЕТ элемент в конец массива
arr1.push('Vasya');

// МЕТОД shift - УДАЛЯЕТ элемент в начале,
// так, что второй элемент становится первым

let arr2 = ['Vanya','Sascha','Sergey',];
arr2.shift();
console.log(arr2); 

// МЕТОД pop - удаляет последний элемент
let arr3 = ['Vanya','Sascha','Sergey',];
arr3.pop();
console.log(arr3);

//МЕТОД unshift - добавляет элемент в начало массива.

let arr4 = ['Vanya','Sascha','Sergey',];
arr4.unshift('Danil');
console.log(arr4);

arr4.unshift('Sascha','Anya');
console.log(arr4);

// Удаление\изменение\добавление конкретных элементов

delete arr4[1];
console.log(arr4);
console.log(arr4[1]);
console.log(arr4.length);

//МЕТОД splice. Позволяет добавлять, удалять и заменять элементы.
//Синтаксис arr.splice

// УДАЛЯЕМ элемент

let arr5 = ['Vanya','Sascha','Sergey',];
// Начиная с первой позиции 'Sascha' удаляем один элемент
arr5.splice(1,1);
console.log(arr5); 

//Удаляем элемент и ВОЗВРАЩАЕМ его в переменную
let arrTwo2 = ['Vanya','Sascha','Sergey',];
let removed = arrTwo2.splice(1,1);
console.log(removed);

//Заменяем элементы 
let arrThere = ['Vanya','Sascha','Sergey',];
//Начиная с нулевой позиции 'Vanya' , заменяем один элемент
arrThere.splice(0,1, 'Danil');
console.log(arrThere);

//Добавляем элемент
let arrFour = ['Vanya','Sascha','Sergey',];
// Начиная с первой позиции перед Sascha добавляем два элемента
arrFour.splice(1,0,'Danya','Sascha');
console.log(arrFour);

// Удаляем элемент  
let arrFive = ['Ваня' , 'Иштван' , 'Оля']; 
// Начиная с последней позиции (Оля) удаляем один элемент  
arrFive.splice(-1 , 1); 
console.log(arrFive);

//МЕТОД slice 
//Создаёт новый массив, в который копирует часть либо весь массив
//Синтаксис arr.slice Не включая [end]

//Копирует часть массива 
let arrOne1 = ['Ваня' , 'Иштван' , 'Оля']; 

//Начиная с 1-й позийии Иштван,
// до 2-й позиции Оля (не включая)
let arrTwo22 = arrOne1.slice (1,2);
console.log(arrTwo22);

// Начиная с предпоследней позиции Иштван 
 // до последней- "Оля" (не бключая) 
 
 let arrThree4 = arr1.slice (-2, -1); 
console.log(arrThree4); 
 
// Копируем весь массив 
let arrFour1 = arr1.slice(); 
console.log(arrFour1);

//МЕТОД concat.
//Создаёт новый массив, в который копирует данные из других массивов
//и дополнительные значения (в коней массива)
//Синтаксис arr.concat(arg1,arg2...) 

let arrOne5 =  ['Ваня' , 'Иштван' , 'Оля']; 
let arrTwo3 = arrOne5.concat('Петя');
console.log(arrTwo3);

// Поиск в массиве 
// Методы-indexOf/LastIndexOfu-incLudes 
// алналоги строковым методам 
/* 
1. arr. indexof (item, from) ищет item, начиная с индекса from, 
и возвращает индекс, на котором был - найден - искомый элемент, в противном случае - -1. 
2. arr.lastIndex0f(item, from) 
- то же самое, но ищет справа налево. 
3. arr.includes(item, from) - ищет item, начиная с-индекса from, 
и возвращает true, если поиск успешен. 
*/

let arr = ['Ваня' , 'Иштван' , 'Оля']; 

// inndexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
 console.log(arr.indexOf('Иштван',2));

// includes
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
 console.log(arr.includes('Иштван',2));


 //Поиск в массиве 
 // find и findIndex
//поиск в массиве объектов с определенным условием

/*
//Cинтаксис
let result = arr.find(function(item,index,array)) {
    // если true - возвращается текущий элемент и перебор прирывается 
    // если все итерации оказались ложными, возвращается андефаинд
});
*/

let arr6 = [
    {name:'Vasya', age: 36},
    {name: 'Kolya', age:18},
    {name:'Olya', age: 'noName'},
    
]


let resultOne = arr6.find (function (item,index,array){
    return item.age === 18; 
}); 

// let resultOne = arr.find(item=> item.age === 18);
console.log(resultOne);

// findIndex 
//let result2 = arr6.findIndex(item => item.age ===18); 
//console.lof(result2);

// Поиск в массиве filter выводит все элементы на которых функциколбек вернет тру
/* 
let result = arr.filter(function(item,index,array)) {
    // если тру - элемент добавляется к результату и перебор продолжается 
    // вовзращает пустой массив в случае если ничего не найдено });
    */

    // CОРТИРОВКА МАССИВА 
    // МЕТОД sort(fn) , сортирует массив на месте , мення в нем порядок элементов

    // СОРТИРОВКА ЧИСЕЛ 
    let numTwo = [8,22,1,];
    console.log(numTwo.sort());

    //Можно использовать функцию сортировки а можно обычную стрелочную Функцию

    console.log(numTwo.sort((a,b)=> a-b ));

    // СОРТИРОВКА СЛОВ 
    let wort =  ['Ваня' , 'Иштван' , 'Оля']; 
    console.log(wort.sort());

    //СОртировка Чисел 
    let num = [8,22,1,];
    console.log(num.sort());


