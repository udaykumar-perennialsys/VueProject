<template>
  <div>
    <h1>Edit Profile</h1>
    <div class="register">
      <input type="text" placeholder="Update Name" v-model="name" />
      <input type="email" placeholder="Update Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <button @click="editProfile">Sign Up</button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "EditProfile",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      id:""
    };
  },
  methods: {
     async editProfile(){
          let response = await axios.patch(`http://localhost:4000/users/${this.id}`,{
              email: this.email,
              name: this.name,
              password: this.password,
          })
          console.log(response)
          localStorage.setItem("userInfo", JSON.stringify(response.data))
      }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    this.name = user[0].name;
    this.email = user[0].email;
    this.password = user[0].password;
    this.id = user[0].id;
  },
};
</script>
<style></style>
