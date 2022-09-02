<template>
  <div class="home">
    <carousel id="down" :autoplay="4000" :items-to-show="1">
      <slide class="image" v-for="item in data" :key="item.idDrink">
        <img :src="item.strDrinkThumb" alt="lol" />
        <div class="cardcocktail">
          <router-link :to="{ name: 'info', params: { id: item.idDrink } }"
            ><h2>{{ item.strDrink }}</h2></router-link
          >
          <p>{{ item.strCategory }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import ApiService from "@/Services/ApiServices";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const apiService = new ApiService();

export default {
  name: "HomeView",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.RandomNoaSlider();
  },
  methods: {
    async RandomNoaSlider() {
      const res = await apiService.getRandomNoaSlider();
      const drinks = await res.json();
      this.data = drinks.drinks.slice(0, 10);
    },
  },
};
</script>
<style scoped>
.home {
  padding: 20px;
  background-color: black;
}
#down {
  display: block;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
.image {
  width: 100%;
  height: 100%;
}
.image img {
  transition: all 1s ease;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  display: block;
}
.image:hover img {
  transform: scale(1.15);
}
.cardcocktail {
  position: absolute;
  color: #497dff;
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.674);
  width: 34%;
  bottom: 20%;
}
.home::before {
  background: url(../assets/synthwave.webp) no-repeat;
  background-size: cover;
  z-index: 0;
  opacity: 20%;
  left: 0;
  top: 0;
  width: 100%;
  height: 90%;
  display: block;
  content: "";
  position: absolute;
}
@media screen and (max-width: 1500px) {
  .home::before {
    height: 100%;
  }
}
@media screen and (max-width: 650px) {
  .image > img {
    width: 250px;
    height: 250px;
  }
  .home::before {
    height: 65%;
  }
}
@media screen and (max-width: 550px) {
  .home::before {
    height: 77%;
  }
}
</style>
