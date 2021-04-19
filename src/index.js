import './styles.css';
import countryCardMurkup from './templates/countryMarkup.hbs';
import countriesListMarkup from './templates/countriesList.hbs';
import debounce from 'lodash.debounce';


const ref = {
    countriesList: document.querySelector('.countries-list'),
    input: document.querySelector('.input'),
    card: document.querySelector('.country-card')
};

ref.input.addEventListener('input', debounce(fine, 500) )

let countriesArr = null;

function fine(evt) {
    fetch(`https://restcountries.eu/rest/v2/name/${evt.target.value}`)
.then(Response => {    
    return Response.json();
    })
.then(country => {
    renderList.bind(country)();
    })
.catch(error => {console.log(error);})}


function renderList () {  
    countriesArr = this;
     
    ref.countriesList.innerHTML =  countriesListMarkup(this);
    const countriesItemRef = ref.countriesList.querySelectorAll('.countries__item');
    ref.countriesList.addEventListener('click', loger)
}

function renderCard (country) {
    ref.card.innerHTML = countryCardMurkup(country);    
}

function loger(evt) {
    const targetCountry = evt.target.outerText;
    const countryForCard = [(countriesArr.find(country => {return country.name === targetCountry}))];
    renderCard(countryForCard);  
}

