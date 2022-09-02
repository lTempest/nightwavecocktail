export default class ApiService {
  getMostCocktail() {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php"
    );
  }
  getRandomSlider() {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
    );
  }
  getOnlyRandom() {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
    );
  }
  getReadCocktail(id) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`
    );
  }
  getNonAlcoholic() {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic`
    );
  }
  getRandomNoaSlider() {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic"
    );
  }
  getSearch(search) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${search}`
    );
  }
  getSearchCat(name) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`
    );
  }
  getListCat() {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
  }
}
