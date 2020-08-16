"use strict";

//HW01==================================================================

/**
 * Напиши скрипт, который, для объекта user, последовательно:

   добавляет поле mood со значением 'happy'
   заменяет значение hobby на 'skydiving'
   заменяет значение premium на false
   выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy"; //1
// user.hobby = "skydiving"; //2
// user.premium = "false"; //3

// const keys = Object.keys(user); //4
// for (const key of keys) {
//   console.log(`${key} - ${user[key]}`);
// }

//HW02==================================================================

/**
 *Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
 */

// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//HW03==================================================================

/**
 *Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
 */

// const findBestEmployee = (employees) => {
//   let max = 0;
//   let name;

//   const entries = Object.entries(employees);
//   for (const entry of entries) {
//     if (max < entry[1]) {
//       max = entry[1];
//       name = entry[0];
//     }
//   }
//   return { name: name };
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//HW04==================================================================

/**
 *Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
 */

// const countTotalSalary = (employees) => {
//   let total = 0;
//   const salaries = Object.values(employees);

//   for (const salary of salaries) {
//     total += salary;
//   }
//   return `Общая сумма зарплаты работников - ${total}`;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

//HW05==================================================================

/**
 * Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
 */

/// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = (arr, prop) => {
//   let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   for (const key in arr[i]) {
//     if (key === prop) {
//       newArray.push(arr[i][key]);
//     }
//   }
// }

//ВАРИАНТ №2

//   for (const product of arr) {
//     if (prop in product) {
//       newArray.push(product[prop]);
//     }
//   }
//   return newArray;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

//HW06==================================================================

/**
 *Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
 */

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalCount = 0;

//   for (let i = 0; i < allProdcuts.length; i++) {
//     const product = allProdcuts[i];
//     if (product.name === productName) {
//       totalCount = product.price * product.quantity;
//     }
//   }
//   return totalCount;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроид")); // 2800

//==========================================================================================================================

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
// Текущий баланс счета
// balance: 0,

// История транзакций
// transactions: [],

/*
 * Метод создает и возвращает объект транзакции.
 * Принимает сумму и тип транзакции.
 */
// createTransaction(amount, type) {
//   const obj = {
//     type,
//     amount,
//     id: Math.round(Math.random() * 1000 + 1),
//   };
//   return obj;
// },

// /*
//    * Метод отвечающий за добавление суммы к балансу.
// //    * Принимает сумму танзакции.
// //    * Вызывает createTransaction для создания объекта транзакции
// //    * после чего добавляет его в историю транзакций
// //    */
// deposit(amount) {
//   this.balance += amount;
//   const transaction = this.createTransaction(amount, "deposit");
//   this.transactions.push(transaction);
// },

/*
 * Метод отвечающий за снятие суммы с баланса.
 * Принимает сумму танзакции.
 * Вызывает createTransaction для создания объекта транзакции
 * после чего добавляет его в историю транзакций.
 *
 * Если amount больше чем текущий баланс, выводи сообщение
 * о том, что снятие такой суммы не возможно, недостаточно средств.
 */
// withdraw(amount) {
//   if (this.balance < amount) {
//     alert("Cнятие такой суммы не возможно, недостаточно средств");
//     return;
//   }
//   this.balance -= amount;
//   const transaction = this.createTransaction(amount, "withdraw");
//   this.transactions.push(transaction);
// },

/*
 * Метод возвращает текущий баланс
 */
// getBalance() {
//   return `Balance: ${this.balance}`;
// },

/*
 * Метод ищет и возвращает объект транзации по id
 */
// getTransactionDetails(id) {
//   for (let i = 0; i < this.transactions.length; i += 1) {
//     if (this.transactions[i].id === id) {
//       return this.transactions[i];
//     }
//   }
// },

/*
 * Метод возвращает количество средств
 * определенного типа транзакции из всей истории транзакций
 */
//   getTransactionTotal(type) {
//     let total = 0;

//     for (let i = 0; i < this.transactions.length; i += 1) {
//       const transactionTotal = this.transactions[i];
//       if (transactionTotal.type === type) {
//         total += transactionTotal.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(1440);
// // account.deposit(1440);
// account.withdraw(100);
// account.withdraw(100);

// console.log(account.balance);
// console.log(account.transactions);
// console.log("account.transactions ", account.transactions);
// console.log(account.getBalance());
// // console.table(account.getTransactionDetails());
// console.log(account.getTransactionTotal("withdraw"));

