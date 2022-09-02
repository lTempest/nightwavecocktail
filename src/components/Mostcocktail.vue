<template>
  <h1>Les Meilleurs Cocktail Du moment</h1>
  <div class="mosthere">
    <div v-for="item in data" :key="item.idDrink" :id="item.idDrink">
      <p>{{ item.strDrink }}</p>
      <img :src="item.strDrinkThumb + '/preview'" alt="lol" />
      <router-link :to="{ name: 'info', params: { id: item.idDrink } }"
        >Voir la recette</router-link
      >
    </div>
  </div>
</template>

<script>
import ApiService from "@/Services/ApiServices";

const apiService = new ApiService();

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.MostCocktail();
  },
  methods: {
    async MostCocktail() {
      const res = await apiService.getMostCocktail();
      const drinks = await res.json();
      this.data = drinks.drinks;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  background-color: black;
  color: #497dff;
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  padding: 30px 0px;
  width: 100%;
  z-index: 20;
  position: relative;
}
.mosthere {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
}

.mosthere::before {
  background: url(../assets/train-neon-synthwave-buildingsgdfgd.webp) no-repeat;
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
.mosthere > div {
  margin: 40px;
  background-color: black;
  border: 2px solid #497dff;
  box-shadow: 0px 1px 2px #497dff, 0px -1px 3px #497dff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.mosthere a {
  text-decoration: none;
  margin-top: 20px;
  border: 1px solid #497dff;
  color: #497dff;
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  width: 60%;
  margin-left: 20%;
  padding: 5px;
  border-radius: 15px;
}
.mosthere a:hover {
  border: 1px solid #f5058d;
  color: #f5058d;
}
.mosthere > div:hover > img {
  border: 1px solid #497dff;
  box-shadow: 0px 1px 2px #497dff, 0px -1px 3px #497dff;
}
.mosthere > div:hover {
  border: 2px solid #f5058d;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
}
.mosthere p {
  font-size: 20px;
  padding: 0px 10px 30px 10px;
  color: #497dff;
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  width: 250px;
}
.mosthere > div > img {
  border: 1px solid #f5058d;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
}
</style>
