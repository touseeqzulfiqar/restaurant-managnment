<template>
    <div>
        <img class="logo" src="../assets/resto-logo.png" alt="">
<h3>SignIn</h3>
<div class="login">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter password" v-model="password">
    <button v-on:click="login">Login</button>
    <p>
        <router-link to="/signup">SignUp</router-link>
    </p>
</div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'

export default defineComponent({
    name:'LoginComp',
     mounted(){
console.warn("Mounted");
let user=localStorage.getItem("User info");
if(user){
 this.$router.push({name:'HomeComp'})   
}
    },
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        async login(){
            let result= await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            console.log(result)
            if(result.status==200 && result.data.length>0)
               {
                
                   localStorage.setItem("User info",JSON.stringify(result.data[0]))
                   this.$router.push({name:'HomeComp'})
               }
        },
        

    }
})
</script>

