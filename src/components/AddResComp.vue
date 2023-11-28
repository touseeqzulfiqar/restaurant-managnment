<template>
  <HeaderComp />
  <div>
    <img src="../assets/resto-logo.png" class="logo" />
    <form class="addRes">
      <input
        type="text"
        name="name"
        placeholder="Enter Resturant name"
        v-model="resturant.name"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Resturant address"
        v-model="resturant.address"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter Resturant contact"
        v-model="resturant.contact"
      />
      <button type="button" v-on:click="addRes">Add Resturant</button>
    </form>
  </div>
</template>

<script>
import AppVue from "@/App.vue";
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";
export default defineComponent({
  name: "AddResComp",
  data() {
    return {
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
  methods: {
    async addRes() {
      const result = await axios.post(AppVue.methods.loadurl() + "/resturant", {
        name: this.resturant.name,
        address: this.resturant.address,
        contact: this.resturant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "HomeComp" });
      }
      console.warn("result:", result);
    },
  },
  mounted() {
    console.warn("Mounted");
    let user = localStorage.getItem("User info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
});
</script>
<style scoped>
</style>