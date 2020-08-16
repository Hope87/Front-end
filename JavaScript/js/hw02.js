"use strict";

//HW01==================================================================
/**
 * Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

=========================================================================================================
1.Написать функцию,которая получает массив
2.Создать цикл
3.Вывести сообщение в консоль
 */

// const logItems = (array) => {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//HW02==============================================================
/**
 *Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

1.Создать функцию принимающую строку
2.Перевести строку в массив
3.Создать переменную которая будет равна длине массива
4.Умножить длину на цену и вывести
 */

// const calculateEngravingPrice = (message, pricePerWord) => {
//   const words = message.split(" ");
//   const length = words.length;
//   const total = length * pricePerWord;
//   return total;
// };
// let totalCost = calculateEngravingPrice(
//   "Proin sociis natoque et magnis parturient montes mus",
//   20
// );
// console.log(totalCost);

//HW03==================================================================
/**
 *Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

1.Написать функцию принимающую произвольную строку
2.Перевести строку в массив
3.Написать цикл,который будет перебирать строку
4.Через цикл найти самое длинное слово в строке
 */

/// const findLongestWord = (string) => {
//   const words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'

//HW04==================================================================0
/**
 *Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
 */

// 1) Написать функцию которая принимает в качестве параметра строку.
// 2) Максимальное кол-во символов не превышает 40
// 3) Если НЕ привысило MAX - вернуть исходную.
// 4.1) Если превысило MAX - форматировать строку(обрезать) до 40 символов и записать в переменную.
//    4.2) Добавить к переменной из пункта 4.1 три точки и вернуть ее из функции.

// Вариат 1
// const formatString = function (string) {
//   const MAX = 40;
//   if (string.length <= MAX) {
//     return string;
//   } else {
//     let arrayString = string.split("");
//     let newString = "";
//     for (let i = 0; i <= MAX; i += 1) {
//       newString += arrayString[i];
//     }
//     return `${newString}...`;
//   }
// };

// Вариат 2
// const formatString = function (string) {
//   const MAX = 40;

//   if (string.length <= MAX) {
//     return string;
//   } else {
//     return string.substring(0, 40) + "...";
//   }
// };

// const cutString = formatString("Если длина строки не превышает 40");

// console.log("cutString: ", cutString);

//HW05==================================================================

/**
 *Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

1.Написать функцию принимающую произвольную строку
2.Сообщение форматировать к нижнему регистру.
3.Создать цикл, в котором на каждой итерации проверять содержит ли сообщение слово из массива.
4.Вернуть результат проверки в цикле.
 */
//ВАРИАНТ 1

// const checkForSpam = (message) => {
//   const lowerString = message.toLowerCase();
//   let badWords = lowerString.split(" ");

//   for (let i = 0; i < badWords.length; i += 1) {
//     if (badWords[i] === "spam" || badWords[i] === "sale") {
//       return true;
//     }
//   }
//   return false;
// };
// const newResult = checkForSpam("Latest spam technology sale news");
// console.log(newResult);

//ВАРИАНТ 2

// const checkForSpam = (message) => {
//   const lowerString = message.toLowerCase();
//   const arrayWords = lowerString.split(" ");
//   const badWords = arrayWords.includes("sale") || arrayWords.includes("spam");
//   return badWords;
// };
// const newResult = checkForSpam("Latest spa technology sale news");
// console.log(newResult);

// /HW06===============================================================
/**
 *Напиши скрипт со следующим функционалом:

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
 
 ===================================================================================================================
*/
// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Введите число!");
//   if (input === null) break;
//   input = Number(input);

//   const isInValid = Number.isNaN(input);

//   if (isInValid) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     numbers.push(input);
//   }
// } while (input !== null);
// if (input === null) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
// }
// console.log(`Общая сумма чисел равна ${total}`);

