<template>
  <div>
    <HeaderComp />
    <div>
      <img src="../assets/resto-logo.png" class="logo" />
      <form class="addRes">
        <input
          type="text"
          name="Role"
          v-model="resturant.permission"
          readonly
        />
        <!-- .....................Drop doen ........... -->
        <div class="dropdown-container">
          <label for="dropdown" class="label">Select permission:</label>
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
        <button type="button" @click="updatepermission">
          Update permission
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";

export default defineComponent({
  name: "UpdatePermComp",
  components: {
    HeaderComp,
  },
  methods: {
    async updatepermission() {
      try {
        const result = await axios.put(
          `http://localhost:8000/api/update-perm/${this.$route.params.id}`,
          {
            permission: this.selectedOption,
          }
        );

        if (result.status === 200) {
          this.$router.push({ name: "AddPermComp" });
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
        permission: "",
      },
      selectedOption: null,
      optionSelected: false,
      options: [
        { label: "Readonly", value: "Readonly" },
        { label: "CreateAccess", value: "CreateAccess" },
        { label: "AdminAccess", value: "AdminAccess" },
        { label: "ModeratorAccess", value: "ModeratorAccess" },
        { label: "ApiAccess", value: "ApiAccess" },
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
        `http://localhost:8000/api/show-update-perm/${this.$route.params.id}`
      );
      console.log(result);

      // Set the resturant data after the request is resolved
      this.resturant.permission = result.data.permission;
    } catch (error) {
      console.error("Error fetching resource:", error);
    }
  },
});
</script>
