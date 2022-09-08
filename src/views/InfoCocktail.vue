<template>
  <div class="isthemain">
    <div id="maintomain">
      <h1>{{ data.strDrink }}</h1>
      <p>{{ data.strCategory }}</p>
      <p>{{ data.strAlcoholic }}</p>
      <p v-if="dataMoy == null">{{ DataMoy }} / 5</p>
      <div id="forflex">
        <form @submit.prevent="RatingCocktail">
          <select name="" v-model="rating.rate">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit" name="submit">Vote</button>
        </form>
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
  <ThreeProp />
  <Footervue />
</template>

<script>
import ApiService from "@/Services/ApiServices";
import Footervue from "@/components/FooterIsFoo.vue";
import ThreeProp from "@/components/ThreeProp.vue";
import Axios from "axios";

const apiService = new ApiService();

export default {
  name: "RandomSurprise",
  components: {
    ThreeProp,
    Footervue,
  },
  data() {
    return {
      data: {},
      ingredient: [],
      measure: [],
      id: this.$route.params.id,
      DataMoy: null,
      rating: {
        idDrink: this.$route.params.id,
        rate: null,
      },
    };
  },
  mounted() {
    this.Infococktail(this.id);
    this.RatingCock(this.id);
  },
  methods: {
    async Infococktail(id) {
      const res = await apiService.getReadCocktail(id);
      const drinks = await res.json();
      this.data = drinks.drinks[0];
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
    async RatingCocktail() {
      const urlcreate = "http://localhost:4000/Api/insert";
      const res = await Axios.post(urlcreate, this.rating);
      console.log(res);
    },
    async RatingCock(id) {
      let res = await apiService.getRatingCocktail(id);
      let ratingResu = await res.json();
      this.dataR = ratingResu;
      var ArrayF = [ratingResu][0];
      let num = [];
      for (let i = 0; i < ArrayF.length; i++) {
        num.push(ArrayF[i].rate);
      }
      const numero = num.reduce((acc, num) => acc + num, 0);
      const total = numero / num.length;
      this.DataMoy = total.toFixed(1);
    },
  },
};
</script>
<style scoped>
.isthemain {
  padding: 10px;
  background: url(../assets/frfr2.webp);
  background-size: cover;
}
#maintomain {
  border: 2px solid #f5058d;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  width: 70%;
  display: block;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.581);
  padding: 20px;
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
#forflex > form > select {
  width: 40%;
  border: 1px solid #f5058d;
  box-shadow: 0px 1px 3px #f5058d, 0px -1px 3px #f5058d;
  margin-right: 10px;
  background-color: #497dff;
}
#forflex > form > button {
  border: 1px solid #497dff;
  box-shadow: 0px 1px 3px #497dff, 0px -1px 3px #497dff;
  padding: 4px;
  background-color: #f5058d;
}
#forflex > form {
  width: 10%;
  padding: 20px;
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
  #forflex > form {
    width: 40%;
  }
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
