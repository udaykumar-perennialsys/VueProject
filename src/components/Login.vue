<template>
  <h1>Login</h1>
  <div class="login">
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="login">Sign Up</button>
    <p>Create an account. <router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // alert(this.email + " " + this.password);
      // this.email = "";
      // this.password = "";

      const res = await axios.get(
        `http://localhost:4000/users?email=${this.email}&password=${this.password}`
      );

      console.log(res);
      if (res.status == 200) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    const users = JSON.parse(localStorage.getItem("userInfo"));

    if (users) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style></style>
