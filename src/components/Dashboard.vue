<template >
    <div class="dashboard">
        <Sidebar />

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Sidebar from "./Navigation/Sidebar.vue"
export default {
    name : "Dashboard",
    components : {
        Sidebar,
    },
    mounted() {
        const users = JSON.parse(localStorage.getItem('userInfo'))

        if(!users){
            this.$router.push({name:"Signup"})
        }
    },
}
</script>
<style >
    .dashboard{
        display: grid;
        grid-template-columns: 1fr 5fr;
        background-color:teal;
        height: 100vh;
        widows: 100px;
    }
    .content{
        background-color: white;
        border-radius: 20px;
        margin: 6px 6px 6px 0px;
    }
</style>