<template>
  <div>
    <HeaderComp />
    <div>
      <img src="../assets/resto-logo.png" class="logo" />
      <form class="addRes">
        <input
          type="text"
          name="Role"
          placeholder="Enter Restaurant name"
          v-model="resturant.Role"
          readonly
        />
        <!-- .....................Drop doen ........... -->
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
        <!-- .....................Drop doen ........... -->
        <button type="button" @click="updateRole">Update Restaurant</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";

export default defineComponent({
  name: "UpdateRoleComp",
  components: {
    HeaderComp,
  },
  methods: {
    async updateRole() {
      try {
        const result = await axios.put(
          `http://localhost:8000/api/update-role/${this.$route.params.id}`,
          {
            role: this.selectedOption,
          }
        );

        if (result.status === 200) {
          this.$router.push({ name: "AddRoleComp" });
        }

        console.log("Result:", result);
      } catch (error) {
        console.error("Error updating resource:", error);
      }
    },
  },
  data() {
    return {
      resturant: {
        Role: "",
      },
      selectedOption: null,
      optionSelected: false,
      options: [
        { label: "SuperAdmin", value: "SuperAdmin" },
        { label: "Admin", value: "Admin" },
        { label: "Employee", value: "Employee" },
        { label: "User", value: "User" },
      ],
    };
  },
  async mounted() {
    console.warn("Mounted");
    let user = localStorage.getItem("User_info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    try {
      const result = await axios.get(
        `http://localhost:8000/api/show-update-role/${this.$route.params.id}`
      );
      console.log(result);

      // Set the resturant data after the request is resolved
      this.resturant.Role = result.data.role;
    } catch (error) {
      console.error("Error fetching resource:", error);
    }
  },
});
</script>
