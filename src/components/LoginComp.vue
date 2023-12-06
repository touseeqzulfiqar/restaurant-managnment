<template>
  <div>
    <img class="logo" src="../assets/resto-logo.png" alt="" />
    <h3>SignIn</h3>
    <div class="login">
      <input type="text" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter password" v-model="password" />
      <button v-on:click="login">Login</button>
      <p>
        <router-link to="/signup">SignUp</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";

export default defineComponent({
  name: "LoginComp",
  mounted() {
    console.warn("Mounted");
    let user = localStorage.getItem("User_info");
    if (user) {
      this.$router.push({ name: "HomeComp" });
    }
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // Make a GET request with email and password parameters
        let result = await axios.get(
          `http://localhost:8000/api/authusers?email=${this.email}&password=${this.password}`
        );

        console.log(result);

        if (result.status === 200 && result.data.length > 0) {
          // Find the user dynamically based on your authentication logic
          const authenticatedUser = result.data.find((user) => {
            // Replace the condition with your authentication logic
            return user.email === this.email && user.password === this.password;
          });

          if (authenticatedUser) {
            // Store user information in local storage
            localStorage.setItem(
              "User_info",
              JSON.stringify(authenticatedUser)
            );

            // Navigate to the "HomeComp" route using Vue Router
            this.$router.push({ name: "HomeComp" });
          } else {
            // Handle cases where login fails (e.g., incorrect credentials)
            console.error("Login failed. Invalid email or password.");
          }
        } else {
          console.error("Login failed. Invalid email or password.");
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        // Handle the error, show a message, etc.
      }
    },
  },
});
</script>

