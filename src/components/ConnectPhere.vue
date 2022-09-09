<template>
  <div class="home">
    <div>
      <p>Se connecter</p>
      <form @submit.prevent="login">
        <input
          type="email"
          v-model="UserV.mailAdre"
          require
          autofocus
          placeholder="email "
        />
        <input
          type="password"
          v-model="UserV.password"
          require
          placeholder="password"
        />
        <button type="submit" name="submit">Ce connecter</button>
      </form>
      <p v-if="this.msgConnect == 'no'">Dommage</p>
      <p v-if="this.msgConnect == 'yes'">Bienvenue {{ Nameh.Name }}</p>
    </div>
    <p>Crée un compte</p>
    <form @submit="CreateUser">
      <input type="text" v-model="User.Name" require placeholder="Prénom" />
      <input type="email" v-model="User.mailAdre" require placeholder="email" />
      <input
        type="password"
        v-model="User.password"
        require
        placeholder="password"
      />
      <input
        type="date"
        v-model="User.Birthday"
        require
        placeholder="date de naissance"
      />
      <button type="submit" name="submit">Crée son compte</button>
    </form>
  </div>
</template>
<script>
// import ApiService from "@/Services/ApiServices";
import ApiService from "@/Services/ApiServices";
import Axios from "axios";
const bcrypt = require("bcryptjs");

const apiService = new ApiService();

export default {
  name: "ConnectionPhere",
  components: {},
  data() {
    return {
      Nameh: [],
      User: {
        mailAdre: null,
        password: null,
        Birthday: null,
        Name: null,
      },
      UserV: {
        mailAdre: "",
        password: "",
      },
      msgConnect: null,
    };
  },
  methods: {
    async CreateUser() {
      const urlcreate = "http://localhost:4000/connect/create";
      this.User.password = bcrypt.hashSync(this.User.password);
      const res = await Axios.post(urlcreate, this.User);
      console.log(res);
    },
    login() {
      this.logins(this.UserV.mailAdre);
    },
    async logins(mailAdre) {
      const res = await apiService.getUserVerif(mailAdre);
      const userlog = await res.json();
      if (userlog.length !== 0) {
        for (let i = 0; i < userlog.length; i++) {
          if (
            this.UserV.mailAdre === userlog[i].mailAdre &&
            bcrypt.compareSync(this.UserV.password, userlog[i].password)
          ) {
            this.msgConnect = "yes";
            sessionStorage.setItem("ID", userlog[i]._id);
            this.Nameh = userlog[i];
            console.log(this.Nameh);
          } else {
            this.msgConnect = "no";
          }
        }
      } else {
        this.msgConnect = "Create";
      }
    },
  },
};
</script>
<style scoped>
.home {
  width: 50%;
  text-align: center;
  border-radius: 20px;
  background-color: black;
  position: absolute;
  left: 25%;
  border: 2px solid #f5058d;
  box-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  padding: 10px;
  top: 100%;
  z-index: 9999;
}
.home > p,
.home > div > p {
  text-shadow: 0px 1px 2px #f5058d, 0px -1px 3px #f5058d;
  color: #497dff;
  padding: 10px;
}
input {
  width: 150px;
  border-radius: 20px;
  padding: 5px;
  margin: 10px;
}
button {
  border-radius: 15px;
  padding: 5px;
  background-color: #497dff;
  cursor: pointer;
}
@media screen and (max-width: 550px) {
  .home {
    top: 41% !important;
  }
  input {
    padding: initial;
  }
}
</style>
