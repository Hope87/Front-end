"use strict"

//===============Task1=============================================================

// const body = document.querySelector('body')
// const btnStart = document.querySelector("button[data-action='start']")
// const btnStop = document.querySelector("button[data-action='stop']")
// let timerId = null;
// let isActive;


// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ];

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
  
//   const changeColor = () => {
//       if(isActive){
//           return
//       }
//         isActive = true;
//         timerId = setInterval(() => {
        
//         const randomNumber = randomIntegerFromInterval(0, 5)
        
//         colors.forEach((color, index) => {
//           if(index !== randomNumber){
//               return
//             }
//             paintAnBody(color)
//         });
//     }, 1000);
//   }

  

//   const stopChangeColor = () => {
//     clearInterval(timerId)
//     isActive = false;
//   }

      
//       const paintAnBody = color => body.style.backgroundColor = color;
  
  

//   btnStart.addEventListener("click", changeColor)
//   btnStop.addEventListener("click", stopChangeColor)


//===============Task2=============================================================
//==========================01=====================================================
/**
 * Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.
 */

// const delay = ms => {
//      return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(ms)
//         }, ms);
//      })
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

//==========================02=====================================================
/**
 * Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и    userName и возвращала промис.
 */

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  

//=========================Вариант№1===================================================

  // const toggleUserState = (allUsers, userName, callback) => {
  //   const updatedUsers = allUsers.map(user =>
  //     user.name === userName ? { ...user, active: !user.active } : user,
  //   );
  
  //   callback(updatedUsers);
  // };

  // const logger = updatedUsers => console.table(updatedUsers);

  /*
   * Сейчас работает так
   */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);

//=========================Вариант№2===================================================
  // const toggleUserState = (allUsers, userName) => {
  //   const updatedUsers = allUsers.map(user =>
  //     user.name === userName ? { ...user, active: !user.active } : user,
  //   );
  
  //   return Promise.resolve(updatedUsers)
  // };
  
  // const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);

//==========================03=====================================================

/**
 * Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.
 */

//=========================Вариант№1===================================================
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);
    
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
  
//       if (canProcess) {
//         onSuccess(transaction.id, delay);
//       } else {
//         onError(transaction.id);
//       }
//     }, delay);
//   };
  
//   const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
//   /*
//    * Работает так
//    */
  // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
  // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
  // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

//=========================Вариант№2===================================================
   
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction) => {
//     const delay = randomIntegerFromInterval(200, 500);
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const canProcess = Math.random() > 0.3;
        
//             if (canProcess) {
//                 resolve({id: transaction.id, time: delay});
//             } else {
//                 reject(transaction.id);
//             }
//           }, delay);
//     })
//   };
  
//   const logSuccess = ({id, time}) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
//   /*
//    * Должно работать так
//    */
  // makeTransaction({ id: 70, amount: 150 })
  //   .then(logSuccess)
  //   .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);

//===============Task3=============================================================

/**
 * Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
 */

// const days = document.querySelector('span[data-value="days"]')
// const timerHours = document.querySelector('span[data-value="hours"]')
// const timerMins = document.querySelector('span[data-value="mins"]')
// const timerSecs = document.querySelector('span[data-value="secs"]')
// const btnStart = document.querySelector("button[data-action='start']")
// const btnStop = document.querySelector("button[data-action='stop']")




// class CountdownTimer{
//    constructor({selector, targetDate}){
//      this.selector = selector;
//      this.targetDate = targetDate;
//      this.timerId = null;
//      this.isActive = false;
//    }

//    getTime() {
//     const time = this.targetDate - Date.now()
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);

//     return {days, hours, mins, secs};
//    }

//    renderTimer(){
//       const {days, hours, mins, secs} = this.getTime()
//       timerDays.textContent = String(days).padStart(2, "0");
//       timerHours.textContent = String(hours).padStart(2, "0");
//       timerMins.textContent = String(mins).padStart(2, "0");
//       timerSecs.textContent = String(secs).padStart(2, "0");
//    }

//    runTimer(){
//     if(this.isActive){
//       return
//     }

//     this.isActive = true;

//      this.timerId = setInterval(() => {
//       this.renderTimer()
//      }, 1000);
//    }

//    stopTimer(){
//      clearInterval(this.timerId)
//      this.isActive = false;
//    }
//  };



//  const countTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Nov 10, 2020'),
// });


// btnStart.addEventListener("click", countTimer.runTimer.bind(countTimer))
// btnStop.addEventListener("click", countTimer.stopTimer.bind(countTimer))


//===================Вариант№2==========================================================

// const btnStart = document.querySelector("button[data-action='start']")
// const btnStop = document.querySelector("button[data-action='stop']")



// class CountdownTimer{
//    constructor({selector, targetDate}){
//      this.selector = document.querySelector(selector);
//      this.targetDate = targetDate;
//      this.timerId = null;
//      this.isActive = false;
//      this.days = null;
//      this.hours = null
//      this.mins = null
//      this.secs = null
//    }

//    getTimer() {
//     const time = this.targetDate - Date.now()
//     this.days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
//     this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
//     this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
//     this.secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, "0");

//     this.renderTimer();
//    }


//    renderTimer(){
//      const {days, hours, mins, secs} = this;
//     this.selector.innerHTML = `<div class="field">
//    <span class="value" data-value="days">${days}</span>
//    <span class="label">Days</span>
//  </div>

//  <div class="field">
//    <span class="value" data-value="hours">${hours}</span>
//    <span class="label">Hours</span>
//  </div>

//  <div class="field">
//    <span class="value" data-value="mins">${mins}</span>
//    <span class="label">Minutes</span>
//  </div>

//  <div class="field">
//    <span class="value" data-value="secs">${secs}</span>
//    <span class="label">Seconds</span>
//  </div>`
//    }

//    runTimer(){
//     if(this.isActive){
//       return
//     }

//     this.isActive = true;

//      this.timerId = setInterval(() => {
//       this.getTimer()
//      }, 1000);
//    }

//    stopTimer(){
//      clearInterval(this.timerId)
//      this.isActive = false;
//    }
//  };



//  const countTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Dec 31, 2020'),
// });


// btnStart.addEventListener("click", countTimer.runTimer.bind(countTimer))
// btnStop.addEventListener("click", countTimer.stopTimer.bind(countTimer))