<template>
  <div>
    <img class="logo" src="../assets/resto-logo.png" alt="" />
    <h3>SignUp</h3>
    <div class="register">
      <input type="text" placeholder="Enter name" v-model="name" />
      <input type="text" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter password" v-model="password" />
      <button v-on:click="signUpfun">SignUp</button>
      <p>
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
export default defineComponent({
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    console.warn("Mounted");
    let user = localStorage.getItem("User_info");
    if (user) {
      this.$router.push({ name: "HomeComp" });
    }
  },
  methods: {
    async signUpfun() {
      let result = await axios.post(
        "http://localhost:8000/api/post-authusers",
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      );
      //    console.warn(this.email,this.name,this.password);
      if (result.status == 201) {
        console.warn(result.data);

        localStorage.setItem("User_info", JSON.stringify(result.data));
        console.warn(result.data);
        this.$router.push({ name: "HomeComp" });
      }
    },
  },
});
</script>

<style scoped>
.logo {
  width: 150px;
}
.register input {
  height: 40px;
  width: 300px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid yellow;
}
.register button {
  width: 320px;
  height: 45px;
  color: white;
  background: #d9cf43;
  border: 1px solid white;
  cursor: pointer;
}
</style>