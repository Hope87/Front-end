"use strict";
/**
 * Напиши скрипт, который выполнит следующие операции.
  Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
  
  Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

  Например для первой категории получится:

  Категория: Животные
  Количество элементов: 4
 */

// const categories = document.querySelector("#categories");
// const categoriesList = categories.children.length;
// console.log(`В списке ${categoriesList} категории`);

//===========================================

// const categories = document.querySelectorAll(".item");
// console.log("categories", categories);

// function getInfo(array) {
//   array.forEach((item) => {
//     let heading = item.firstElementChild.textContent;
//     let quantity = item.lastElementChild.children.length;
//     console.log(`Категория: ${heading}
// Количество элементов: ${quantity}`);
//   });
// }
// getInfo(categories);

//=====================================================

/**
 *  В HTML есть пустой список ul#ingredients.
  В JS есть массив строк.

 Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
 */

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ul = document.querySelector("#ingredients");

// function fn(array) {
//   //======1 вариант=================
//   array.forEach((ingredient) => {
//     const list = `<li>${ingredient}</li>`;
//     ul.insertAdjacentHTML("afterbegin", list);
//   });
//   //======2вариант=================
//   //   const items = [];
//   //   array.forEach((el) => {
//   //     const li = document.createElement("li");
//   //     li.textContent = el;
//   //     items.push(li);
//   //   });
//   //   ul.append(...items);
// }
// fn(ingredients);

/**
 *  Напиши скрипт для создания галлереи изображений по массиву данных.

  В HTML есть список ul#gallery.

  Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

  Все элементы галереи должны добавляться в DOM за одну операцию вставки.
  Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
 */
// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryList = document.querySelector("#gallery");

// function getGallery(array) {
//   const markupArray = [];
//   array.forEach((el) => {
//     const item = document.createElement("li");
//     // const image = document.createElement("img");
//     const image = `<img src=${el.url} alt=${el.alt}>`;

//     // image.setAttribute("src", el.url);
//     // image.setAttribute("alt", el.alt);
//     item.insertAdjacentHTML("afterbegin", image);
//     markupArray.push(item);
//   });
//   galleryList.append(...markupArray);
// }
// getGallery(images);

/**
 *  Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

 Создай переменную counterValue в которой будет хранится текущее значение счетчика.
 Создай функции increment и decrement для увеличения и уменьшения значения счетчика
 Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

// const counter = document.querySelector("#counter");
// const span = document.querySelector("#value");
// const btnDecrement = document.querySelector('button[data-action="decrement"]');
// const btnIncrement = document.querySelector('button[data-action="increment"]');

// let counterValue = 0;

// btnDecrement.addEventListener("click", increment);
// btnIncrement.addEventListener("click", decrement);

// function decrement(e) {
//   counterValue += 1;
//   span.textContent = counterValue;
// }

// function increment(e) {
//   counterValue -= 1;
//   span.textContent = counterValue;
// }

/**
 *  Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
 */

// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");
// input.addEventListener("input", handleClick);
// const textSp = span.textContent;

// function handleClick(e) {
//   span.textContent = e.target.value;
//   const text = e.target.value.length;

//   if (text === 0) {
//     span.textContent = textSp;
//   }
// }
