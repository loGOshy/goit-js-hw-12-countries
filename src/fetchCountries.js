const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCuuntries(searchQuery) {
    return fetch(`${BASE_URL}/name/${searchQuery}`)
    .then(Response => { 
        if (!Response.ok){
            throw Response;
        }
        return Response.json()})
}
export default {fetchCuuntries}