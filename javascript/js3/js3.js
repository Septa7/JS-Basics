// Функция конструктор - это обычная функция, но есть два правила 
//1 - Она должна начинатся с большой буквы. 
//2 Она должна вызыватся с помощью оператора "new"

function UserInfo(name) {

// this = {}; Создается пустой объект (неявно)

this.name = name;
this.age = 30;

// return this;Возвращает объект

}

console.log(new UserInfo('Вася'));

console.log(new UserInfo('Лена'));



let userInfo2= {
    name: "Даня", 
    age: 19,
}

userInfo2.name = "Sascha",
console.log(userInfo2.name);

delete(userInfo2.name);
console.log(userInfo2);

// Округление чисел в JS

 // Math.floor - объект округления в меньшую сторону 
 // Math.ceil - объект округления в большую сторону 
 // Math.round - объект округления в ближайшую сторону 

 //Округление до нужного нам числа с сотыми и десятыми
 let numOne=Math.round(5.845*10) / 10;
 console.log(numOne); // получим 5.8

 let numOne2=Math.round(5.845*100) / 100;
 console.log(numOne2); // получим 5.85

 let numOne3=Math.round(5.8449*100) / 100;
 console.log(numOne3); // получим 5.84


 // Метод toFixed(n) - округление чисел до n знаков после запятой
 // и возвращает строковое представление результатов
 let numOne4= 5.845 ;
 console.log(numOne4.toFixed(1)); 

 //Преобразовать в числоcло
 console.log(+numOne4.toFixed(1));
 console.log(Number(numOne4.toFixed(1)));


 // Округление с помощью Number EPSILON;
 let soursenum=1.005+Number.EPSILON;
 let numFor=Math.round(soursenum*100)/100;
 console.log(numFor);


 // parseInt(возвращает целое число) и parseFloat(возв. число с плавающей точкой) нужно для получения чисел со строк в которых есть и буквы
 // возвращает число полученое до возникновения ошибки
 // Если первым символом будет не число прим: а150рх - то вернется также NaN

 let valueTwo = parseInt("150.58px.");
 console.log(valueTwo);

// Math.max и Math.min возвращает наибольшее и наименьшее целочисленное число из перечисленных аргументов
console.log(Math.max(5, 9, 85))  // вернет наибольшее 85
console.log(Math.min(5, 9, -45))  // вернет наименьшее -45

// Math.abs()
//Возвращает абсолютное значение (модуль) числа.    
let num5= -58;
console.log(Math.abs(num5)); // вернет 58


// homework

let numOne5 = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne5);
 
let value = parseFloat("135.58px");
console.log(value);
 

let value2 = 58 + "Freelancer";
if ( value2 !=NaN ) {
    console.log('Результат выражения NaN');
}

console.log(Math.max(10, 58, 39, -150, 0));

let num6= -150;
console.log(Math.abs(num5));

// округлить число до 58-ми
let numthree = 58.858
console.log(numthree.toFixed(0));

let num7 = parseInt(58.858)
console.log(num7);


let numOne6 = Math.floor(58.858);
console.log(numOne6);

//        СТРОКИ
// вставка в строку с помощью $ { } и обратные кавычки

let textHi = "Hi!";
let textALL =` ${textHi} Ya stroka`;

console.log(textALL);



function someSum(a, b) {
   return a + b 
}
console.log(`Сумма: ${someSum(4, 7)}`);

// Многострочная запись ( для этого нужны обатные кавычки)

let text = `Привет!
Мы учим 
JS!
`;
console.log(text);



// Табуляция (отступ) с помощью 'n' и 't' 

let text2 = "hallo\n\t Vy na kanale\n\t\tFreelancer!";
console.log(text2);

// Чтобы в строку вывелся обратный слэш / нужно заисывать 2 обратных слэша //

// Чтобы вывелисб кавычки внутри кавычек "привет "меня зовут"  " нужно дописать  обратный слэш к каждой кавычке
let string = "Привет \"меня зовут\" ";

// Иконки символы смайлы UTF-16 \ uКОД , UTF-32 \ u{КОД}
let text3 = "Живи а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text3);   


// Вывести длину строки - length 
console.log(text3.length);


// Чтобы вывести длину строки( сколько символов в строке) нужно поставить lenght  в консоль логе через точку после названия сроки

// Чтобы получить конкретный символ из стоики нужно поставить []

let text5 = "Danil!";
let firstSimbol = text5[0];
let lasttSimbol = text5[text5.length -1];
console.log(firstSimbol);
console.log(lasttSimbol);

// Чтобы вывести каждую букву работаем с for of 

for (const char of text5){
    console.log(char);
 }


 // Чтобы записать всю строку в ВЕРХНЕМ РЕГИСТРЕ то есть капсом или в нижнем регистре используем
 // toUpperCase()  toLowerCase():

 let text7 = "Привет!";
 console.log(text7.toUpperCase());
 console.log(text7.toLowerCase());
 
 // indexOf - поиск строки 
let text8 = "Privet"
console.log(text8.indexOf('riv'));
 
// includes -тоже самое, но выводит true or false
let text9="Hallo";
console.log(text9.includes('all'));
console.log(text9.includes('all', 3));

console.log(text9.startsWith('all'));
console.log(text9.endsWith ('o'));

// Поиск не будет производится если не совпадает регист по этому мы делаем его одинаковым
let text10 = "Hallo"
let searchText = "hA"

console.log(text10.toLowerCase().includes(searchText.toLowerCase()));

// получение ЧАСТИ СТРОКИ 
//метод str.slice(start [, end]) - возвращает часть строки от start до end (не включая энд)

let text11 = "Hallo";
console.log(text11.slice(1,2));
console.log(text11.slice(-1,-2));
console.log(text11.slice(1));

let text12 = 'фрилансер';
//console.log(text12.indexOf('н'));
let lasttSimbol12 = text12[5];
console.log(lasttSimbol12);

let text13 = 'фрилансер';
//let lasttSimbol3 = text13[5];
//console.log(lasttSimbol13);
console.log(text13.slice(3,-3));

let text14 = 'фрилансер';
console.log(text14.includes('лан', 4));





