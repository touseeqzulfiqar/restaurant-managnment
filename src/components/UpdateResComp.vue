<template>
<HeaderComp />
    <div>
        
<img src="../assets/resto-logo.png" class="logo">
        <form class="addRes">

            <input type="text" name="name" placeholder="Enter Resturant name" v-model="resturant.name">
            <input type="text" name="address" placeholder="Enter Resturant address" v-model="resturant.address">
            <input type="text" name="contact" placeholder="Enter Resturant contact" v-model="resturant.contact">
            <button type="button" v-on:click="updateRes">Update Resturant</button>
        </form>
    </div>
</template>

<script>
// import AppVue from '@/App.vue'
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default defineComponent({
    name:"UpdateResComp",
    components:{
        HeaderComp,
    },
    methods:{
        async updateRes() {
    try {
        const result = await axios.put(`http://localhost:8000/api/update-res/${this.$route.params.id}`, {
            name: this.resturant.name,
            address: this.resturant.address,
            contact: this.resturant.contact
        });

        if (result.status === 200) {
            this.$router.push({ name: 'HomeComp' });
        }

        console.log('Result:', result);
    } catch (error) {
        console.error('Error updating resource:', error);
    }
}

    },
    data(){
        return{
            "resturant":{
                name:"",
                address:"",
                contact:""
            }
        }
    },
    async mounted(){
console.warn("Mounted");
let user=localStorage.getItem("User info");
if(!user){
 this.$router.push({name:'SignUp'})   
}
const result = await axios.get("http://localhost:8000/api/show-update-res/"+this.$route.params.id);
console.log(result),
this.resturant= result.data
// console.warn(this.$route.params.id)
    },
})
</script>
