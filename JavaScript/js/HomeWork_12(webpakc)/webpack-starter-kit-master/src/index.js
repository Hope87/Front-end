import fetchCountries from './fetchCountries.js';
import {listCountries, renderCountries} from './renderCountries.js';
import  useDebounce  from '../node_modules/lodash.debounce';
import { error } from '../node_modules/@pnotify/core/dist/PNotify.js';

import '../node_modules/@pnotify/core/dist/PNotify.css'
import '../node_modules/@pnotify/core/dist/BrightTheme.css'

import './styles.css';

const input = document.querySelector("#inputjs");


function getCountries(e){
    e.preventDefault();

    const inputValue = e.target.value;

    fetchCountries(inputValue).then(countries => {
        if(countries.length > 10){
            error({
                text: 'Too many matches found. Please enter a more specific query!'
              });
              return
        }
        renderCountries(countries);
    })

}




input.addEventListener('input', useDebounce(getCountries, 500))