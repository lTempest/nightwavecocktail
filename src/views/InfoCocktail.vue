<template>
  <div class="isthemain">
    <div id="maintomain">
      <h1>{{ data.strDrink }}</h1>
      <p>{{ data.strCategory }}</p>
      <p>{{ data.strAlcoholic }}</p>
      <div id="forflex">
        <img :src="data.strDrinkThumb" alt="lol" />
        <div class="onrigth">
          <h2>Ingredient</h2>
          <div>
            <ul class="aeiou">
              <li v-for="item in ingredient" :key="item.idDrink">
                {{ item }}
              </li>
            </ul>
            <ul class="aeiou">
              <li v-for="mesure in measure" :key="mesure.idDrink">
                {{ mesure }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>{{ data.strInstructions }}</p>
    </div>
  </div>
  <Footervue />
</template>

<script>
import ApiService from "@/Services/ApiServices";
import Footervue from "@/components/FooterIsFoo.vue";

const apiService = new ApiService();

export default {
  name: "RandomSurprise",
  components: {
    Footervue,
  },
  data() {
    return {
      data: {},
      ingredient: [],
      measure: [],
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.Infococktail(this.id);
  },
  methods: {
    async Infococktail(id) {
      const res = await apiService.getReadCocktail(id);
      const drinks = await res.json();
      this.data = drinks.drinks[0];
      console.log(drinks.drinks[0]);
      const ingr = "strIngredient";
      let nbr = 1;
      let incr = ingr + nbr.toString();
      let mea = "strMeasure";
      let meacr = mea + nbr.toString();
      while (drinks.drinks[0][incr] !== null) {
        nbr++;
        this.ingredient.push(drinks.drinks[0][incr]);
        incr = ingr + nbr.toString();
        this.measure.push(drinks.drinks[0][meacr]);
        meacr = mea + nbr.toString();
      }
    },
  },
};
</script>
<style scoped>
#maintomain {
  border: 2px solid #f5058d;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  width: 70%;
  display: block;
  margin: 30px auto;
  background-color: rgba(0, 0, 0, 0.581);
  padding: 20px;
}
#maintomain::before {
  background: url(../assets/frfr2.webp) no-repeat;
  background-size: cover;
  z-index: -5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: "";
  position: absolute;
}
#forflex > img {
  width: 300px;
  height: 300px;
}
#maintomain > h1 {
  padding-top: 10px;
}
#maintomain > h1::after {
  margin: 0 auto;
  width: 250px;
  border: 1px solid #497dff;
  box-shadow: 0px 1px 3px #f5058d, 0px -1px 3px #f5058d;
  height: auto;
  display: block;
  content: "";
}
#maintomain > h1,
#maintomain > p,
#forflex > h2,
#forflex > ul > li,
#forflex > article,
.onrigth > h2,
.aeiou {
  list-style-type: none;
  text-align: center;
  color: #497dff;
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  padding: 5px;
}
#forflex > img {
  border: 2px solid #497dff;
  box-shadow: 0px 1px 2px #497dff, 0px -1px 3px #497dff;
  margin-left: 5%;
}
#forflex {
  margin-top: 3%;
}
.onrigth {
  float: right;
  width: 60%;
  margin-right: 50px;
  max-height: 300px;
  padding: 5px;
}
.onrigth > div {
  display: flex;
}
.aeiou {
  width: 50%;
  list-style-type: none;
}
@media screen and (max-width: 1500px) {
  .onrigth {
    display: block;
    float: none;
    margin: 0;
  }
  #forflex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  #forflex > img {
    margin: 0;
  }
}
@media screen and (max-width: 750px) {
  #forflex > img {
    width: 200px;
    height: 200px;
  }
  #maintomain > h1::after {
    display: none;
  }
}
</style>
