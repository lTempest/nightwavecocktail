<template>
  <div class="mosthere" v-if="data !== null">
    <div v-for="item in data" :key="item.idDrink" :id="item.idDrink">
      <p>{{ item.strDrink }}</p>
      <img :src="item.strDrinkThumb + '/preview'" alt="lol" />
      <router-link :to="{ name: 'info', params: { id: item.idDrink } }"
        >Voir la recette</router-link
      >
    </div>
  </div>
  <div class="mosthere" v-if="dataT !== null">
    <div v-for="item in dataT" :key="item.idDrink" :id="item.idDrink">
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
      query: this.$route.query.slug,
      dataT: [],
    };
  },
  created() {
    this.Search(this.query);
    this.SearchCat(this.query);
  },
  methods: {
    async Search(search) {
      let res = await apiService.getSearch(search);
      const drinks = await res.json();
      this.data = drinks.drinks;
    },
    async SearchCat(name) {
      let res = await apiService.getSearchCat(name);
      const drinks = await res.json();
      this.dataT = drinks.drinks.slice(0, 20);
      console.log(this.dataT);
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
