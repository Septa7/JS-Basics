// Функции//

//function имя (параметры) {
//    тело функции (код)
//   }

function showMessage() {
     console.log ('Сообщение');
}

showMessage();

function calcSumm(numOne , numTwo) {

       console.log (`Переменная numOne:${numOne}`);
       console.log (`Переменная numTwo:${numTwo}`);
  
       let numSumm = numOne + numTwo;

       console.log(`Сумма:${numSumm}`);

      }
 
   calcSumm (1, 2);


   // Директива return - возвращает результат работы

// Рекурсия пример: функция вызывает саму функцию
  
 function getSumm (numOne, numTwo) {
  let numSumm = calcSumm (numOne, numTwo);

      console.log(numSumm);

 }
    function calcSumm (numOne, numTwo) {
        return numOne + numTwo;

    }
        getSumm (5,5);



     // Функциональное выражение (Function Expression) - вызывается только после выражения

   let showMessage2 = function () {
      console.log ('Привет');
    }
       showMessage2();



       // Функциональное выражение 
       //let имя переменной = function (параметр, ...параметр) {
         //   return выражение;
       //};


       // Стрелочная функция (arrow function)
    //  let имя переменной = (параметр, ...параметр) => выражение

    // Однострочная стрелочная функция 
    let getMessage2 = (text, name )=> text + ' , ' + name + '!';
       console.log (getMessage2 ('Привет', 'Вася')); 

       //Многострочная стрелочная функция 
       let getMessage3 = (text, name) => {
               let message = text + ' , ' + name + '!';
               return message;

       };
       console.log (getMessage3 ('Привет' , 'Вася'));



     //  Планирование setTimeout (позволит вызвать функцию один раз) 
     //  и setInterval (позволит вызвать функцию регулярно, черещ опред. интервал времени)
     //  (функция или код, задержка, параметр,...  параметр);

     function showMessage5(text, name) {
          console.log(`${text}, ${name}!`);
     }
     
    setTimeout (showMessage5, 10000, 'Hello', 'kakashka');

    // Поочередное выведение цифер каждую секунду до 5-ти 
    function showNumber(num) {
          console.log (num);
          if (num < 5 ) {
               setTimeout(showNumber, 1000, ++num);
          }
     }
     setTimeout(showNumber, 1000 , 1);


     //  initMessage ('Привет' , 'Saschka' ); - Соединяет 2 функции


     showMessage();
     function showMessage() {
          console.log('Messageee');
     }


     // присвоить переменую со значением к функции
     "use strict"
     let showMessageee;
     if (2>1){                   
          showMessage = function () {
               console.log('soobschenye');
          };
     }
   showMessage();


   //------ОБЪЕКТЫ------------------------------------------------------------------------------------------------------
   //--Создаем символ id с описанием созданимеи имени id 
   let id = Symbol ("id");
   let userInfo = {
        name: "Vasya",
        age: 30,
        [id]: "Nekoe Znachenye"
   };
   console.log(userInfo);

   // Основное применение символов:
   // 1. "скрытые" свойства обьектов
   // Символьные свойства не появится в for...in
   // 2. Исп. системных символов


// Вложенность 
let userInfo2 = {
    name: "Sascha",
    age: 22,
    adress: {
         city: "Stralsund",
         street: "Groser Diebsteig",
    }
}
 console.log (userInfo2);
 console.log (userInfo2.adress);
 console.log (userInfo2.adress.city);


// Чтобы присвоить новое свойство обьекту пишем назв обьекта-точка-назв доп свойства- равно= - значение свойства.   
// Пример: UserInfo.age = 22;

// чтобы что-то удалить из обьекта используем: delete UserInfo.age
// Копирование обьекта - сам обьект не копируется ,а только ссылка на него

// Для ДУБЛИРОВАНИЯ обьекта мы импользуем синтаксис Object.assing
// Object.assign(куда(обьект), что(свойство #1), что(свойство #2), ...);
let UserInfo3 = {
    name: "Васик",
    age: 30,
}

let user = Object.assign( {}, UserInfo3);

user.age = 18;

console.log(UserInfo3);
console.log(user);



//----------Опциональная цепочка----(чтобы не было ошибки в коде когда данного свойства нет)

let userInfo4 = {
    name: "Данька",
    age: 19,
   //adress: {
   //street: "rosengarten"
   // }
}
console.log(userInfo4?.adress?.street); 



// оператор in чтобы проверить свойство

if ("name" in userInfo) {
     console.log(userInfo.name);
}





// цикл «for-in»

let userInfo5 = {
     name: "Вася", 
     age: 30,
      address: {
      city: "Uzhhorod", 
      street: "Freedom",
      }
     }


for (let key in userInfo5) {
// ключи
console.log(key); // name, age, address
// значения ключей
console.log(userInfo5[key]); // Baca, 30, object ()
}


for (let key in userInfo5.address) {
// ключи
console.log(key); // city, street
// значения ключей
console.log(userInfo5.address[key]); // Uzhhorod, Freedom
}



// словом "this" можно заменить текущий обьект


//let userInfo6 = {
  //   name: "Вася", 
    // age: 30,
      //address: {
      //city: "Uzhhorod", 
      //street: "Freedom",
      
     //},
     //showInfo() { 
       //   console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.adress.city}, ул.${this.adress.street}`);
     //}
//}
  //   userInfo6.showInfo();


  
 