"use strict";

// const selectedById = document.querySelector(".menu-item");
// console.log("selectedById", selectedById);

//=========Свойство Node.textContent===================
// const text = document.querySelector(".menu-item");
// // text.textContent = "Welcome to Bahamas!";

// // //=========Свойство HTMLElement.style===================
// // text.style.color = "red";
// // // console.log("text", text);

// // //=========Свойство Element.classList===================
// const newClass = document.querySelector("#menu");
// // // console.log("newClass", newClass);

// // newClass.classList.add("menu-list");
// // text.classList.replace("menu-item", "list-item");
// // console.log("text", text);

// //=========Создание DOM-узла===================

// const box = document.querySelector(".box");
// const heading = document.createElement("h1");
// heading.textContent = "Hello";
// const paragraph = document.createElement("p");
// paragraph.textContent = "fuck off";
// paragraph.classList.add("paragraph");
// // console.log("paragraph", paragraph);

// box.insertBefore(heading, newClass);
// box.appendChild(paragraph);

// const menuItems = document.querySelectorAll(".menu-item");

// function newCl() {
//   menuItems[0].classList.replace("menu-item", "menu-list");
//   menuItems[0].textContent = "Hotel";
//   menuItems[0].style.color = "blue";
// }
// // newCl();
// // console.log("menuItems", menuItems);

// const button = document.querySelector(".box-btn");
// button.insertAdjacentElement("beforebegin", paragraph);
// // console.log(button.dataset.active);
// console.log(box);

//=======================================================

// const user = {
//   name: "Adriano",
//   phone: "094-345-45-65",
//   email: "cool@gmail.com",
//   adress: {
//     country: "USA",
//     city: "Los-Angeles",
//   },
// };

// const profileContainer = document.querySelector(".profile-container");

// const profile = creatUserProfile(user);

// profileContainer.appendChild(profile);
// // console.log("profileContainer", profileContainer);

// //========Function============================
// function creatInfoItem(label, text) {
//   const item = document.createElement("li");
//   item.classList.add("info-item");
//   const itemLabel = document.createElement("b");
//   itemLabel.textContent = label;
//   const itemText = document.createTextNode(text);

//   item.append(itemLabel, itemText);
//   return item;
// }

//=========
// function creatUserProfile({ name, phone, email, adress }) {
//   const container = document.createElement("div");
//   container.classList.add("user-profile");
//   // console.log("container", container);
//   const infoList = document.createElement("ul");
//   infoList.classList.add("info");
//   // console.log("infoList", infoList);
//   const nameField = creatInfoItem("Name: ", name);
//   const phoneField = creatInfoItem("Phone: ", phone);
//   const emailField = creatInfoItem("Email: ", email);
//   const adressField = creatInfoItem(
//     "Adress: ",
//     `${adress.country}, ${adress.city}`
//   );

//   infoList.append(nameField, phoneField, emailField, adressField);
//   container.appendChild(infoList);

//   return container;
// }

//=====================События=======================================
// const btn = document.querySelector('button[data-active="magic"]');
// console.log("button", btn);

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   console.log("COOL!!!");
// }
