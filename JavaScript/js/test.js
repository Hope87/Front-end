"use strict";


/**
 * Верстка - простой квадрат на странице по центру. <div с border и background-color>
 * Верстка - кнопка под квадратом с название GO - просто кнопка, ебать)
 * Логика - слушатель onclick на кнопку, который в итоге запустит функцию далле...Типа getRandomColor
 * Логика - запущенная функция должна отдать рандомный HEX color. getRandomColor = () => Math.random() * 100 * ParseFloat()
 * Логика - функция, которая принимает HEX color и красит квадрат в него */

// https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript

// const btn = document.querySelector("button[data-active='magic']")
// const square = document.querySelector(".js-square")



// const getRandomColor = () =>{
//     const randomColor = '#'+ Math.floor(Math.random()*10000000).toString(16);
//     paintAnItem(randomColor);
// }

// const paintAnItem = (color) => {
//     square.style.backgroundColor = color;
// }


// btn.addEventListener("click", getRandomColor)

//===================setTimeout&&setInterval========================================================================

// console.log("First");
// setTimeout(() => {
// console.log("Second");
// }, 1000);
// console.log("Third");

// function sayHello (){
//     console.log("HELLO");
// }
// const hello = setInterval(sayHello, 1000);
// clearInterval(hello)

//===================Date========================================================================

// const date = new Date('December 31, 2020');
// const date = new Date(2020, 11, 31, 23, 0, 0, 0)
// const date = new Date(1000000)
// const date = Date.now()
// const date = new Date();
// const hours = date.getHours()
// const mins = date.getMinutes()
// const secs = date.getSeconds()
// const time = date.getTime()

// console.log("hours", hours)
// console.log("mins", mins)
// console.log("secs", secs)
// console.log("time", time)
// console.log("date", date)



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello World")
//         // reject("ERROR")
//     }, 2000);
// })

// const res = data => console.log(data);
// const rej = err => console.error(err);

// promise.then(res).catch(rej)

// const promise = value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const number = 9;
//             if(value < number){
//                 resolve(value)
//             }
//             reject("ERROR")
//         }, 2000);
//     })
// }

// const result = promise(5)
// result.then(value => {
//     console.log(value);
//     return value * 2
// })
// .then(value => {
//     console.log(value);
//     return value / 2
// }).then(value => console.log(value)).catch(err => console.error(err))


// const promise = (text, value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const number = 9;
//             if(value < number){
//                 resolve(text)
//             }
//             reject("ERROR")
//         }, (value * 500));
//     })
// }

// const resultA = promise("Hello", 5)
// const resultB = promise("Bay", 4)


// Promise.all([resultA, resultB]).then((data) => console.log(data))
// Promise.race([resultA, resultB]).then((data) => console.log(data))

//========================================================================================
