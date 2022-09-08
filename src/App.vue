<template>
  <nav>
    <router-link to="/"
      ><img src="./assets/logoo.png" alt="logo" id="logohere"
    /></router-link>
    <div>
      <p class="none" @mouseenter="hover = true" :class="{ active: hover }">
        Category
      </p>
      <div @mouseleave="hover = false" :class="{ active2: hover }" id="cacher">
        <li v-for="item in data" :key="item.strCategory">
          <router-link
            :to="{ name: 'search', query: { slug: item.strCategory } }"
            >{{ item.strCategory }}</router-link
          >
        </li>
      </div>
    </div>
    <router-link to="/Non_Alcoholic">Les sans alcool</router-link>
    <router-link to="/suprise">Surprise</router-link>
    <form @submit="onSubmit">
      <input
        type="text"
        name="slug"
        v-model="slug"
        placeholder="Search Cocktail"
      />
    </form>
    <router-link to="/connexion"
      ><img class="connect" src="./assets/logoco.png" alt="logoconnect"
    /></router-link>
  </nav>
  <router-view :key="$route.fullPath" />
</template>

<script>
import ApiService from "@/Services/ApiServices";

const apiService = new ApiService();

export default {
  data() {
    return {
      hover: false,
      slug: "",
      data: [],
    };
  },
  mounted() {
    this.ListCat();
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$router.push({ path: "/search", query: { slug: this.slug } });
    },
    async ListCat() {
      const res = await apiService.getListCat();
      const drinks = await res.json();
      this.data = drinks.drinks;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

nav {
  padding: 10px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 9999;
  top: 0%;
  border-bottom: 1px solid #f5058d;
  box-shadow: 0px 1px 3px #f5058d;
}

nav a,
.none {
  font-weight: bold;
  color: #497dff;
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  padding: 8px;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
}

#cacher {
  padding: 10px;
  position: absolute;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  top: 100%;
  background-color: black;
  border: 2px solid #f5058d;
}

#cacher > li {
  padding: 10px;
  list-style-type: none;
}
#cacher > li:hover {
  border-bottom: 1px solid #f5058d;
}

.active,
.active2 {
  visibility: initial !important;
}

input {
  width: 200px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
}

#logohere {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 150px;
}
.connect {
  width: 50px;
  border: 1px solid #497dff;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  border-radius: 50%;
  padding: 5px;
}
@media screen and (max-width: 1050px) {
  #logohere {
    position: initial;
    width: 70px;
  }
  .connect {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
@media screen and (max-width: 550px) {
  nav {
    flex-direction: column;
    position: initial;
  }
  #cacher {
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    width: 99%;
    padding: 5px 0px 5px 0px;
    height: 100px;
    overflow-y: scroll;
    scrollbar-color: rebeccapurple green;
    scrollbar-width: thin;
  }
}
</style>
