import menu from './menu.json';
import tamplate from './tamplates/template.hbs';

import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
    DARK: 'dark-theme',
    DARK: 'dark-theme',
    DARK: 'dark-theme',

  };

const postFeed = document.querySelector(".js-menu")
const themeControl = document.querySelector("#theme-switch-toggle")

const markup = tamplate(menu);
const body = document.body;

postFeed.insertAdjacentHTML('afterbegin', markup);


const changeTheme = (e) => {
    const lightTheme = e.currentTarget.checked;

    if(lightTheme){
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
       localStorage.setItem("Theme", Theme.DARK);
    }else{
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
       localStorage.setItem("Theme", Theme.LIGHT);
    }
 }

const getSavedTheme = () => {
    const theme = localStorage.getItem("Theme");

    if(theme === Theme.DARK){
        themeControl.checked = true;
        body.classList.add(theme)
    }
}

themeControl.addEventListener("change", changeTheme);
window.addEventListener("load", getSavedTheme);

// import menu from './menu.json';
// import tamplate from './tamplates/template.hbs';

// import './styles.css';

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// let themeStatus = 1;

// const postFeed = document.querySelector('.js-menu');
// const themeControl = document.querySelector('#theme-switch-toggle');

// const markup = tamplate(menu);
// const body = document.body;

// postFeed.insertAdjacentHTML('afterbegin', markup);

// const setToLocal = value => localStorage.setItem('Theme', value);

// const onChangeSwitch = e => {
//   const switchStatus = e.currentTarget.checked;

//   if (switchStatus) {
//     themeStatus = 2;
//   } else {
//     themeStatus = 1;
//   }

//   renderCurrentStyle(themeStatus);
// };

// const renderCurrentStyle = styleStatus => {
//   if (styleStatus === 2) {
//     body.classList.remove(Theme.LIGHT);
//     body.classList.add(Theme.DARK);
//     themeControl.checked = true;
//   } else if (styleStatus === 1) {
//     body.classList.remove(Theme.DARK);
//     body.classList.add(Theme.LIGHT);
//   }

//   setToLocal(styleStatus);
// };

// const getSavedTheme = () => {
//   const themeFromLocal = Number(localStorage.getItem('Theme'));

//   if (themeFromLocal) {
//     themeStatus = themeFromLocal;
//   }
//   renderCurrentStyle(themeStatus);
// };


// window.addEventListener('load', getSavedTheme);
// themeControl.addEventListener('change', onChangeSwitch);

