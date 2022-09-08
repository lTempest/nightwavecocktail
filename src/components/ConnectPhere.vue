<template>
  <div class="home">
    <p>Crée un compte</p>
    <form @submit.prevent="CreateUser">
      <input type="email" v-model="mailAdre" require autofocus />
      <input type="password" v-model="password" require />
      <input type="date" v-model="User.Birthday" require />
      <button type="submit" name="submit">Vote</button>
    </form>
  </div>
  <div>
    <p>Se connecter</p>
    <form></form>
  </div>
</template>
<script>
// import ApiService from "@/Services/ApiServices";
import Axios from "axios";
const bcrypt = require("bcryptjs");

// const apiService = new ApiService();

export default {
  name: "ConnectionPhere",
  components: {},
  data() {
    return {
      User: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        mailAdre: null,
        password: null,
        Birthday: null,
      },
    };
  },
  mounted() {},
  methods: {
    async CreateUser() {
      const urlcreate = "http://localhost:4000/connect/create";
      this.User.password = bcrypt.hashSync(this.User.password);
      console.log(this.User.password);
      const res = await Axios.post(urlcreate, this.User);
      console.log(res);
    },
  },
};
</script>
<style scoped>
a {
  color: red;
}
</style>
