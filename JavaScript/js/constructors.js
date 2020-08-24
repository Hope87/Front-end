"use strict";

//========================================================================================
// const Hotel = function (name, stars, copacity) {
//   this.name = name;
//   this.stars = stars;
//   this.copacity = copacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName} welcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel("Resort Hotel", 5, 500);
// hotel.greet("Ajax");
// hotel.addGuests(100);
// hotel.removeGuests(50);

// console.log(hotel);

//=========================МАГАЗИН===============================================================

//Стандартный метод======================================================================

// const mango = {
//   name: "Mango",
//   sales: 5,

//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell("TV")); // Manager Mango sold TV
// console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: "Poly",
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell("TV")); // Manager Poly sold TV
// console.log(poly.sell("Microwave")); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

//Через конструктор====================================================================

// const Magazine = function (name, sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Magazine("Mango", 50);
// console.log(mango.sales); // 5
// console.log(mango.sell("TV")); // Manager Mango sold TV
// console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Magazine("Poly", 100);
// console.log(poly.sales); // 5
// console.log(poly.sell("TV")); // Manager Mango sold TV
// console.log(poly.sell("Microwave")); // Manager Mango sold Microwave
// console.log(poly.sales); // 7

//Прототипное наследование в конструкторах====================================================================

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.getXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
// const mango = new Hero("Mango", 1000);
// console.log(mango);
// mango.getXp(500);
// console.log(mango);

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };

// //Используем Object.create() для того чтобы изначально записать
// //  * в Warrior.prototype пустой объект, в __proto__ которого будет
// //  * ссылка на Hero.prototype. Это необходимо сделать до того
// //  * как добавлять методы

// Warrior.prototype = Object.create(Hero.prototype);

// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 2000, "sword");

// poly.getXp(200);
// console.log(poly);

//====================КЛАССЫ===============================================================================

// class Gues {
//   constructor(name, roomNumber) {
//     this._name = name;
//     this._roomNumber = roomNumber;
//   }

//   showName() {
//     return console.log(this._name);
//   }

//   changeName(newName) {
//     this._name = newName;
//   }

//   /**  ГЕТТЕРЫ и СЕТТЕРЫ
//    * То же, что и showName, и changeName.
//    */

//   get name() {
//     return console.log(this._name); //Только показывает
//   }

//   set name(newName) {
//     this._name = newName; //Меняет или добовляет
//   }

//   //========================================================================

//   /**
//    * СТАТИЧЕСКАЯ ФУНКЦИЯ
//    * Лежит в теле конструктора Gues и доступна только при вызове через сам Gues
//    */
//   static staticFn(add) {
//     return console.log(add);
//   }

//   //============================================================================
// }

// const mango = new Gues("Mango", 8);
// console.log(mango);
// Gues.staticFn(8);

//===================Наследование===========================

// class Parent {
//   constructor(name) {
//     this._name = name;
//   }

//   move() {
//     console.log(`I, ${this._name}, am moving!`);
//   }
// }

// // console.dir(Parent);

// class Child extends Parent {
//   constructor(name, number) {
//     super(name);

//     this.number = number;
//   }

//   bark() {
//     console.log("woof!");
//   }

//   showAll() {
//     this.move();
//     this.bark();
//   }
// }

// const poly = new Child("Ajax", 1000);
// poly.showAll();

