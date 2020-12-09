import tamplate from './tamplates/tamplate.hbs';

const listCountries = document.querySelector(".countries-list")

function renderCountries(countries){

    if(countries.length > 1){
    clearForm();
    countries.forEach(country => listCountries.insertAdjacentHTML("afterbegin", `<li class="list__name">${country.name}</li>`))
    }else{
    clearForm();

     const murkup = tamplate(countries);
    listCountries.insertAdjacentHTML("afterbegin", murkup)
    }
}

function clearForm(){
    listCountries.innerHTML = "";
}

export {listCountries, renderCountries};