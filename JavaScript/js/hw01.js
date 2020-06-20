"use strict";

//HW1 =======================================================

// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`'Выбран "${name}", цена за штуку ${price} кредитов'.`);

// price = 2000;
// console.log(`'Выбран "${name}", цена за штуку ${price} кредитов'.`);

//HW2 =======================================================

// const total = 100;
// let ordered;

// ordered = 130;

// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }

//HW3 =======================================================

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message = prompt("Введите пароль!");

// if (message === null) {
//   message = "Отменено пользователем!";
// } else if (message === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }
// alert(message);

//HW4 =======================================================

// const credits = 23580;
// let pricePerDroid = 3000;
// let count = prompt("Сколько дроидов хотите купить?");
// let totalPrice = Number(count) * pricePerDroid;
// let balance = credits - totalPrice;

// if (count === null) {
//   console.log("Отменено пользователем!");
// } else if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   console.log(
//     `'Вы купили ${count} дроидов, на счету осталось ${balance} кредитов.'`
//   );
// }

//HW5 =======================================================

// let country = prompt("Введите название страны!");
// let lowerCountry = country.toLowerCase();

// switch (lowerCountry) {
//   case "китай":
//     console.log("Доставка в Китай будет стоить 100 кредитов");
//     break;

//   case "чили":
//     console.log("Доставка в Чили будет стоить 250 кредитов");
//     break;

//   case "австралия":
//     console.log("Доставка в Австралию будет стоить 170 кредитов");
//     break;

//   case "индия":
//     console.log("Доставка в Индию будет стоить 80 кредитов");
//     break;

//   case "ямайка":
//     console.log("Доставка в Ямайку будет стоить 120 кредитов");
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }

//HW6 =======================================================

// let input = "";
// let total = 0;

// do {
//   input = prompt("set new number");
//   total = total + Number(input);
// } while (input !== null);

// console.log("total", total);

