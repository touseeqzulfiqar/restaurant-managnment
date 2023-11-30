<template>
  <HeaderComp />
  <div>
    <h1>{{ name }} ,Welcome to home page</h1>
    <!-- <h1>{{$store.state.Abc}}</h1> -->

    <table >
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in resturant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>
          <router-link :to="'/update/' + item.id" id="home_update_btn">Update</router-link>
          <button v-on:click="deleteRes(item.id)" id="home_dell_btn">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import AppVue from "@/App.vue";
// import store from "@/store/index.js";
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";
export default defineComponent({
  name: "HomeComp",
  methods: {
    async deleteRes(id) {
      // console.log(id)
      let result = await axios.delete(`http://localhost:8000/api/dell-res/${id}`);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      console.warn("Mounted");
      // console.warn(store.state.Abc);
      let user = localStorage.getItem("User info");
      console.log('user', user);
      if(user) {
      this.name = JSON.parse(user).name.toUpperCase();
      }
      if (!user) {
         console.log('loadData', user);
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:8000/api/show-res");
      this.resturant = result.data;
    },
  },
  data() {
    return {
      name: "",
      resturant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: {
    HeaderComp,
  },
  mounted() {
    this.loadData();
  },
});
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
}
#home_dell_btn{
  width: 120px;
    height: 35px;
    color: white;
    background: #d9cf43;
    border: 1px solid white;
    cursor: pointer;
    font-size: medium;
}
#home_update_btn{
  text-decoration: none;
  /* width: 120px;
    height: 25px; */
    padding-top: 10px;
    color: white;
    background: #d9cf43;
    border: 1px solid white;
    cursor: pointer;
    padding-right: 36px;
    padding-left: 30px;
    
}
</style>