"use strict";

// Работа с колекцией
// const storage = {
//   items: [
//     { id: "id-1", name: "apples", price: 30 },
//     { id: "id-2", name: "grapes", price: 40 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   findProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];

//       if (product.id === id) {
//         return product;
//       }
//     }
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];

//       if (product.id === id) {
//         this.items.splice(i, 1);
//         return;
//       }
//     }
//   },
//   changePrice(id, price) {
//     const product = this.findProduct(id);

//     if (!product) {
//       return;
//     }
//     product.price = price;
//   },
//   changeName(id, name) {
//     const product = this.findProduct(id);

//     if (product) {
//       product.name = name;
//     }
//   },
//   filterWithPrice(threshold) {
//     const filtered = [];

//     for (const item of this.items) {
//       if (item.price >= threshold) {
//         filtered.push(item);
//       }
//     }
//     return filtered;
//   },
// };

// console.table(storage.getItems());
// storage.addProduct({ id: "id-3", name: "carrots", price: 20 });
// storage.removeProduct("id-2");
// console.table(storage.getItems());
// storage.changePrice("id-3", 35);
// console.table(storage.items);
// storage.changeName("id-3", "bananas");
// console.table(storage.items);
// console.table(storage.filterWithPrice(32));

//===========================================================================================================

//For.....in

// const product = {
//   name: "waffles",
//   price: 50,
//   quantity: 20,
// };

// for (const key in product) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

//===================KEYS================================================

// const salary = {
//   bob: 100,
//   mary: 200,
//   rob: 300,
// };

// let total = 0;

// const salaryKeys = Object.keys(salary);

// console.log(salaryKeys);

// for (const key of salaryKeys) {
//   console.log(key);
//   total += salary[key];
// }
// console.log("total: ", total);

//===================VALUES================================================

// const salary = {
//   bob: 100,
//   mary: 200,
//   rob: 300,
// };

// let total = 0;

// const salaryValues = Object.values(salary);

// console.log(salaryValues);

// for (const value of salaryValues) {
//   console.log(value);
//   total += value;
// }
// console.log("total: ", total);

//=============================TASKS============================================

/**
 * Напиши скрипт который определит и выведит в консоль имя сотрудника который выполнил больше всех задач.
 * Сотрудник и кол-во выполненных задач содержатся как св-ва объекта в формате "имя":"кол-во задач"
 */

//Вариант через KEYS

// const findPersonWithMaxTasks = function (stats) {
//   let max = 0;
//   let name;

//   const keys = Object.keys(stats);

//   for (const key of keys) {
//     if (max < stats[key]) {
//       max = stats[key];
//       name = key;
//     }
//   }
//   return {
//     name,
//     tasksCompleted: max,
//   };
// };

// console.log(
//   findPersonWithMaxTasks({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

//Вариант через ENTRIES

// const findPersonWithMaxTasks = function (stats) {
//   let max = 0;
//   let name;

//   const entries = Object.entries(stats);

//   for (const entry of entries) {
//     if (max < entry[1]) {
//       max = entry[1];
//       name = entry[0];
//     }
//   }
//   return {
//     name,
//     tasksCompleted: max,
//   };
// };

// console.log(
//   findPersonWithMaxTasks({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

/**
 * Напиши функцию getAllPropValues(users, key),которая получает массив объектов и имя ключа.Возвращает массив значений определенного поля prop из каждого объекта в массиве.
 */

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" },
// ];

// const getAllPropValues = function (users, key) {
//   const values = [];

//   for (const user of users) {
//     if (key in user) {
//       values.push(user[key]);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(users, "name"));
// console.log(getAllPropValues(users, "mood"));
// console.log(getAllPropValues(users, "active"));

/**
 * filter -> пришла статистика загрузок и надо выбрать те,что больше 10%
 */

// const uploads = [
//   { name: "pdf", percentage: 14 },
//   { name: "psd", percentage: 21 },
//   { name: "mp3", percentage: 3 },
//   { name: "flat", percentage: 7 },
// ];

// const filteruploadsWithThreshold = function (uploads, threshold) {
//   const filterUploads = [];

//   for (const upload of uploads) {
//     if (upload.percentage >= threshold) {
//       filterUploads.push(upload);
//     }
//   }
//   return filterUploads;
// };

// console.table(filteruploadsWithThreshold(uploads, 10));
// console.table(filteruploadsWithThreshold(uploads, 20));

/**
 * Есть два массива names и prices с ирменами и ценами товаров.
 * Напишите функцию combine(name, prices), которая получает эти два массива и возвращает массив объектов со свойствами names и prices.
 */

// const names = [
//   "Радар",
//   "Сканер",
//   "Дроид",
//   "Захват",
//   "Двигатель",
//   "Топливный бак",
// ];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function (names, prices) {
//   const combained = [];

//   for (let i = 0; i < names.length; i += 1) {
//     const obj = {
//       name: names[i],
//       price: prices[i],
//     };
//     combained.push(obj);
//   }
//   return combained;
// };

// const producrs = combine(names, prices);
// console.log(producrs);

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,

//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

//========================SHOP==============================================
// const shop = {
//   products: [
//     { name: "apples", amount: 150, price: 40 },
//     { name: "grapes", amount: 100, price: 30 },
//     { name: "bananas", amount: 200, price: 50 },
//   ],
//   addProduct(product) {
//     this.products.push(product);
//   },
//   getProductInfo(productName) {
//     for (const elem of shop.products) {
//       if (elem.name === productName) {
//         return elem;
//       }
//     }
//   },
//   addProductAmount(productName, num) {
//     for (const elem of shop.products) {
//       if (elem.name === productName) {
//         elem.amount += num;
//       }
//     }
//   },
//   subtractProductAmount(productName, num) {
//     for (const elem of shop.products) {
//       if (elem.name === productName) {
//         elem.amount -= num;
//       }
//     }
//   },
// };

// shop.addProduct({ name: "mango", amount: 300, price: 100 });
// console.log(shop);

// const info = shop.getProductInfo("grapes");
// console.log(info);

// shop.addProductAmount("bananas", 150);
// console.log(shop);

// shop.subtractProductAmount("apples", 50);
// console.log(shop);

// ================================STORAGE==================================================================

// const storage = {
//   items: [
//     { name: "apples", value: 50, price: 30 },
//     { name: "grapes", value: 300, price: 40 },
//     { name: "bananas", value: 200, price: 80 },
//   ],

//   showProduct() {
//     return this.items;
//   },
//   getProduct(product) {
//     this.items.push(product);
//   },
//   removeProduct(name) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       if (product.name === name) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   findInfoProduct(name) {
//     for (let i = 0; i < this.items.length; i++) {
//       const product = this.items[i];
//       if (product.name === name) {
//         return product;
//       }
//     }
//   },
//   addProductValue(name, value) {
//     const product = this.findInfoProduct(name);

//     if (!product) {
//       return;
//     }
//     product.value += value;
//   },
//   reduceProductValue(name, value) {
//     const product = this.findInfoProduct(name);
//     if (!product) {
//       return;
//     }
//     product.value -= value;
//   },
//   addProductPrice(name, price) {
//     const product = this.findInfoProduct(name);
//     if (!product) {
//       return;
//     }
//     product.price = price;
//   },
//   getTotal() {
//     let total = 0;

//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       total += product.price * product.value;
//     }
//     return total;
//   },
// };

// console.log(storage.findInfoProduct("apples"));
// storage.getProduct({ name: "orange", value: 100, price: 120 });
// storage.addProductValue("apples", 75);
// storage.reduceProductValue("grapes", 50);
// storage.addProductPrice("grapes", 120);
// storage.removeProduct();
// storage.addProductValue("apples", 80);
// storage.addProductPrice("apples", 50);
// storage.getProduct({ name: "lemon", value: 80, price: 90 });
// console.table(storage.showProduct());
// const all = storage.getTotal(storage);
// console.log(`Общая сумма товара на складе: ${all}`);

