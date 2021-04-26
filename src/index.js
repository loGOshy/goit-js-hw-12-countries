import './styles.css';
import countryCardTp from './templates/countryMarkup.hbs';
import countriesListMarkup from './templates/countriesList.hbs';
import debounce from 'lodash.debounce';
import API from './fetchCountries';
import getRefs from './get-refs';


const ref = getRefs();

ref.input.addEventListener('input', debounce(toFineCountry, 500) )


function toFineCountry (evt){
    
    API.fetchCuuntries(evt.target.value.trim())
    .then(country => {
    renderList.bind(country)();
    })
    .catch(error => { console.log(error);
        resetRenderCard();
        resetRenderList();
   })
}

function renderList () {  
    const countriesArr = this;
    if (countriesArr.length <= 10) {
        resetRenderCard(); 
       ref.countriesList.innerHTML = countriesListMarkup(this);
    const countriesItemRef = ref.countriesList.querySelectorAll('.countries__item');
    ref.countriesList.addEventListener('click', renderCardByClick.bind(this));
        if (countriesArr.length === 1) {
            renderCard (this)
        } 
    } 
    else {
        resetRenderCard();
        resetRenderList();
        renderNotify ();
        console.log('ВВедите более точное названи')}

    
}
function resetRenderCard () {
    ref.card.innerHTML = ''
}
function resetRenderList () {
    ref.countriesList.innerHTML =  ''
}
function renderNotify () {
    ref.countriesList.innerHTML =  'Cделайте свой запрос более специфичным! <br/> Под ваш критерий поиска попадает слишком много стран.'
}

function renderCard (country) {
    ref.card.innerHTML = countryCardTp(country);    
}

function renderCardByClick(evt) {
    const targetCountry = evt.target.outerText;
    const countryForCard = [this.find(country => {return country.name === targetCountry})];
    renderCard(countryForCard);  
}

