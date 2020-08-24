"use strict";

/**
 *   Функциональные методы массивов
 */

//=================forEach======================================
// Перебирает
// Может изменять
// Не возвращает

// const numbers = [1, 2, 3, 4, 5];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// // Функциональный forEach
// numbers.forEach((num, index) => {
//   console.log(`Index - ${index}, Num - ${num}`);
// });

//=================Sort======================================
//Перебирает
//Изменяет
//Возвращает коллекцию

// const numbers = [3, 1, 2, 4, 5];

// console.log(numbers.sort());

// const users = [
//   { name: "Mango", daysActive: 15 },
//   { name: "Poly", daysActive: 4 },
//   { name: "Ajax", daysActive: 27 },
//   { name: "Chelsey", daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive; //По возрастанию
// const newUsersA = [...users].sort(sortByActiveDays);
// console.log(newUsersA);

// const sortByActiveDaysDescending = (a, b) => b.daysActive - a.daysActive; //По убыванию
// const newUsersB = [...users].sort(sortByActiveDaysDescending);
// console.log(newUsersB);

//=================Map======================================
//Используется для трансформации массива
//Перебирает
//Не изменяет
//Возвращает коллекцию

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubledNumbers);

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
// ];

// // const names = users.map((user) => {
// //   return user.name;
// // });

// // console.log(names);

// //Функция
// const getNames = (user) => users.map((user) => user.name);
// const names = getNames(users);
// console.log(names);

//=================Filter======================================
//Используется для фильтрации массива
//Перебирает
//Не изменяет
//Возвращает коллекцию

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const number = numbers.filter((num) => num > 5);
// console.log(number);

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsey", isActive: false },
// ];

// const activeUsers = users.filter((user) => {
//   return user.isActive;
// });
// console.log(activeUsers);

// const inActiveUsers = users.filter((user) => {
//   return !user.isActive;
// });
// console.log(inActiveUsers);

//=================Find======================================
//Используется для поиска уникального элемента массива
//Перебирает
//Не изменяет
//Возвращает элемент

// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false },
// ];

// const userId = users.find((user) => {
//   return user.id === "002";
// });

// console.log(userId);

//То же самое,только функция

// const getUserById = (arr, id) => {
//   return arr.find((user) => {
//     return user.id === id;
//   });
// };

// console.log(getUserById(users, "003"));

//=================Every and Some======================================
//Перебирает
//Не изменяет
//Возвращает true или false

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numberA = numbers.every((num) => {
//   return num > 5;
// });
// console.log(numberA); //false

// const numberB = numbers.some((num) => {
//   return num > 5;
// });
// console.log(numberB); //true

//=================Reduce======================================
//Перебирает
//Не изменяет
//Возвращает что угодно

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => {
//   return acc + value;
// }, 0);
// console.log(summ);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce((acc, tweet) => {
//   return acc + tweet.likes;
// }, 0);

// console.log(likes);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);

//   return acc;
// }, []);

// console.log(tags);

//=========================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) => {
//   return tweets.reduce((acc, tweet) => {
//     acc.push(...tweet.tags);

//     return acc;
//   }, []);
// };

// const tags = getTags(tweets);
// console.log(tags);

// const getTagStats = (acc, tag) => {
//   console.log(acc);
//   console.log(tag);

//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = (tags) => {
//   return tags.reduce(getTagStats, {});
// };

// const tagCount = countTags(tags);
// console.log(tagCount);

//=================Цепочки методов массива======================================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers
//   .filter((num) => num > 5)
//   .map((num) => num * 2)
//   .sort((prev, next) => next - prev);

// console.log(result);
// console.log(numbers);

//   const result = numbers
//   .filter((num) => num > 5)
//   .map((num) => num * 2)
//   .reduce((acc, num) => acc + num, 0);

// console.log(result);

//==============================================================================
// const users = [
//   { id: "000", name: "Mango", likes: 5, isActive: true },
//   { id: "001", name: "Poly", likes: 60, isActive: false },
//   { id: "002", name: "Ajax", likes: 35, isActive: true },
//   { id: "003", name: "Chelsey", likes: 120, isActive: false },
// ];

// // const fnFilter = (arr) => arr.filter((elem) => elem.isActive);

// // const fnMap = (arr, id, value) =>
// //   arr.map((elem) => {
// //     return elem.id === id ? { ...elem, likes: elem.likes + value } : elem;
// //   });

// // const fnFind = (arr, id) => arr.find((elem) => elem.id === id);

// // const fnFi = fnFind(users, "002");
// // const fnF = fnFilter(users);
// // const fnM = fnMap(users, "002", 20);

// // console.log(fnFi);
// // console.log(fnF);
// // console.log(fnM);
// // console.log(users);

// // elem.id === id ? { ...elem, likes: elem.likes + value } : elem

// const fn = (arr) => arr.reduce((acc, elem) => acc + elem.likes, 0);

// const fnR = fn(users);
// console.log(fnR);

