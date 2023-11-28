<template>
    <div class="nav">
<router-link to="/">Home</router-link>
<router-link to="Address">Add Resturant</router-link>
<!-- <router-link to="Update">Update Resturant</router-link> -->
<a v-on:click="logout" href="#">LogOut</a>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name:"HeaderComp",
    data(){
return{
    name:"",
}
    },
    methods:{
        logout(){
            localStorage.clear();
                this.$router.push({name:'SignUp'})

        }
    }
})
</script>
<style scoped>
.nav{
    background-color: rgb(0, 0, 0);
    overflow: hidden;

}
.nav a {
    text-decoration: none;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    font-size: 16px;
    margin-right: 4px ;
}
.nav a:hover {
background-color: white;
color: black;
}
</style>
