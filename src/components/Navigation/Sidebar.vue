<template>
  <div class="sidebar">
    <div class="welcome">Welcome</div>
    <div class="title">
      {{ username }}
    </div>
    <div class="menu-item">
      <router-link active-class="active" class="side-links" to="/home">
        <div class="links">
          Home
        </div>
      </router-link>

      <router-link active-class="active" class="side-links" to="/edit-profile">
        <div class="links">
          Edit Profile
        </div>
      </router-link>

      <!-- <router-link active-class="active" class="side-links" to="/logout"> -->
        <button class="links logoutBtn" @click="logout">
          Logout
        </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      username: "Hello",
    };
  },
  methods: {
      logout(){
          localStorage.removeItem('userInfo')
          this.$router.push({ name: "Login" });
      }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user[0].name);
    this.username = user[0].name;
  },
};
</script>
<style>
.welcome {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
.title {
  color: white;
  font-size: 24px;
}
.menu-item {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.menu-item > * {
  margin-top: 60px;
}
.side-links:focus {
  outline: none;
}
.side-links {
  border: none;
  padding: 12px 0px;
  text-decoration: none;
  font-size: 16px;
  color: white;
}
.side-links.active {
  background-color: white;
  color: teal;
  font-weight: 500;
}
.logoutBtn{
    width: 150px;
    height: 40px;
    margin: 60px auto;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    background-color:teal;
    border: none;
    outline: none;
    color: rgb(20, 202, 20);
}
</style>
