"use strict";

//CALL-BACK
// const labels = [];

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// const creatLabel = function (index) {
//   labels.push(`Label ${index + 1}`);
// };

// repeat(7, creatLabel);
// console.log(labels);

//======================================================

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// Передаем printValue как callback-функцию
// repeat(3, printValue);
// repeat(3, prettyPrint);

//=====================================================================

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// // const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// // console.log(freshFruits); // массив с объектами apples и bananas

// const fn = (fruit) => {
//   return fruit.quantity >= 120;
// };

// const fruitsWithQuantity = filter(fruits, fn);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

//==================================================================================================

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],

//   showAccount() {
//     return this;
//   },

//   showAccountOrders() {
//     return this.orders;
//   },

//   addOrders(accountName) {
//     this.orders.push(accountName);
//   },

//   removeOrders(accountName) {
//     for (let i = 0; i < this.orders.length; i++) {
//       if (this.orders[i] === accountName) {
//         this.orders.splice(i, 1);
//       }
//     }
//   },

//   changeDiscount(value) {
//     this.discount = value;
//   },

//   changeOwner(owner) {
//     this.owner = owner;
//   },

//   addBalance(money) {
//     account.balance += money;
//   },

//   removeBalance(money) {
//     account.balance -= money;
//   },
// };

// const invokeFn = function (accountName, callback) {
//   callback(accountName);
// };

// invokeFn("order-4", account.addOrders.bind(account));
// invokeFn("order-3", account.removeOrders.bind(account));
// account.changeDiscount(0.5);
// invokeFn("Ajax", account.changeOwner.bind(account));
// account.addBalance(2000);
// account.removeBalance(5000);

