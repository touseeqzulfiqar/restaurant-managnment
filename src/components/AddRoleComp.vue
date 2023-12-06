<template>
  <HeaderComp />
  <div>
    <img src="../assets/resto-logo.png" class="logo" />
    <!-- <form class="addRole">
      <input
        type="text"
        name="Role"
        placeholder="Enter Role name"
        v-model="resturant.Role"
      />
      <button type="button" v-on:click="addRole">Add Role</button>
    </form> -->
    <!-- .................................................................................. -->
    <div class="dropdown-container">
      <label for="dropdown" class="label">Select Roles:</label>
      <select
        v-model="selectedOption"
        id="dropdown"
        :disabled="optionSelected"
        class="dropdown"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          class="dropdown-option"
        >
          {{ option.label }}
        </option>
      </select>
      <p class="selected-message">You selected: {{ selectedOption }}</p>
    </div>
    <button type="button" v-on:click="submitRole">Submit Role</button>
    <!-- .................................................................................. -->
    <!-- ...........................................................TABLE OF ROLES<...................... -->
    <div>
      <table align="center">
        <tr>
          <td>ID</td>
          <td>Roles</td>
          <td>Actions</td>
        </tr>
        <tr v-for="item in resturant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.role }}</td>
          <td>
            <router-link :to="'/updateRole/' + item.id" id="home_update_btn"
              >Update</router-link
            >
            <button v-on:click="deleteRes(item.id)" id="home_dell_btn">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
    <!-- ...........................................................TABLE OF ROLES>...................... -->
  </div>
</template>

<script>
// import AppVue from "@/App.vue";
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";
export default defineComponent({
  name: "AddRoleComp",
  data() {
    return {
      resturant: {
        Role: "",
      },
      //   <!-- ...................................DORP DOWN...............................................
      selectedOption: null,
      optionSelected: false,
      options: [
        { label: "SuperAdmin", value: "SuperAdmin" },
        { label: "Admin", value: "Admin" },
        { label: "Employee", value: "Employee" },
        { label: "User", value: "User" },
      ],
      //   <!-- ..................................................................................
    };
  },
  components: {
    HeaderComp,
  },
  methods: {
    async addRole() {
      const result = await axios.post("http://localhost:8000/api/post-role", {
        Role: this.resturant.Role,
      });
      if (result.status == 201) {
        this.$router.push({ name: "AddRoleComp" });
      }
      console.warn("result:", result);
    },

    async submitRole() {
      const result = await axios.post("http://localhost:8000/api/post-role", {
        selectedOption: this.selectedOption,
        Role: this.selectedOption,
        optionSelected: (this.optionSelected = true),
      });
      if (result.status == 201) {
        this.$router.push({ name: "AddRoleComp" });
      }
      console.warn("result:", result);
    },
    async loadData() {
      console.warn("Mounted");
      // console.warn(store.state.Abc);
      let user = localStorage.getItem("User_info");
      console.log("user", user);

      if (!user) {
        console.log("loadData", user);
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:8000/api/show-role");
      this.resturant = result.data;
      console.log(result.data);
    },
    async deleteRes(id) {
      // console.log(id)
      let result = await axios.delete(
        `http://localhost:8000/api/dell-role/${id}`
      );
      if (result.status == 200) {
        this.loadData();
      }
    },
  },
  mounted() {
    this.loadData();
    console.warn("Mounted");
    let user = localStorage.getItem("User_info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
});
</script>
<style scoped>
input {
  margin-top: 20px;
  height: 40px;
  width: 300px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid yellow;
}
button {
  width: 320px;
  height: 45px;
  color: white;
  background: #d9cf43;
  border: 1px solid white;
  cursor: pointer;
}

/* ........................DROPDOWN........................ */
.dropdown-container {
  max-width: 300px;
  margin: 20px auto;
  text-align: center;
}

.label {
  display: block;
  margin-bottom: 5px;
}

.dropdown {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.dropdown-option {
  background-color: #fff;
}

.selected-message {
  margin-top: 10px;
  color: #4caf50;
  font-weight: bold;
}
/* ........................DROPDOWN........................ */
/* .........................ROLE TABLE................... */
#home_dell_btn {
  width: 120px;
  height: 35px;
  color: white;
  background: #d9cf43;
  border: 1px solid white;
  cursor: pointer;
  font-size: medium;
}
#home_update_btn {
  text-decoration: none;
  /* width: 120px;
    height: 25px; */
  padding-top: 9px;
  color: white;
  background: #d9cf43;
  border: 1px solid white;
  cursor: pointer;
  padding-right: 36px;
  padding-left: 30px;
  padding-bottom: 8px;
}
/* .........................ROLE TABLE................... */
</style>