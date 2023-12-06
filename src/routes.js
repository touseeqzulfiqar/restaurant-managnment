import HomeComp from "./components/HomeComp.vue";
import SignUp from "./components/SignUp.vue";
import LoginComp from "./components/LoginComp.vue";
import UpdateResComp from "./components/UpdateResComp.vue";
import AddResComp from "./components/AddResComp.vue";
import UpdateRoleComp from "./components/UpdateRoleComp.vue";
import UpdatePermComp from "./components/UpdatePermComp.vue";
import AddRoleComp from "./components/AddRoleComp.vue";
import AddPermComp from "./components/AddPermComp.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomeComp",
    component: HomeComp,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/Signup",
  },
  {
    name: "LoginComp",
    component: LoginComp,
    path: "/Login",
  },
  {
    name: "AddPermComp",
    component: AddPermComp,
    path: "/Addperm",
  },

  {
    name: "UpdateResComp",
    component: UpdateResComp,
    path: "/Update/:id",
  },
  {
    name: "AddResComp",
    component: AddResComp,
    path: "/Address",
  },
  {
    name: "AddRoleComp",
    component: AddRoleComp,
    path: "/Addrole",
  },
  {
    name: "UpdateRoleComp",
    component: UpdateRoleComp,
    path: "/UpdateRole/:id",
  },
  {
    name: "UpdatePermComp",
    component: UpdatePermComp,
    path: "/UpdatePerm/:id",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
