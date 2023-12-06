<template>
  <router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue'
export default {
  name: "App",
  components: {
    // SignUp,
  },
  methods: {
    loadurl() {
      let api = "http://localhost:3000";
      return api;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0px;
  padding: 0px;
}
.logo {
  width: 150px;
}
.register input,
.login input,
.addRes input {
  height: 40px;
  width: 300px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid yellow;
}
.register button,
.login button,
.addRes button {
  width: 320px;
  height: 45px;
  color: white;
  background: #d9cf43;
  border: 1px solid white;
  cursor: pointer;
}
</style>
