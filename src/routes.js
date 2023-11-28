import HomeComp from './components/HomeComp.vue'
import SignUp from './components/SignUp.vue'
import LoginComp from './components/LoginComp.vue'
import UpdateResComp from './components/UpdateResComp.vue'
import AddResComp from './components/AddResComp.vue'
import {createRouter,createWebHashHistory} from "vue-router"

const routes=[
    {
        name:'HomeComp',
        component:HomeComp,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/Signup'
    },
    {
        name:'LoginComp',
        component:LoginComp,
        path:'/Login'
    },
    {
        name:'UpdateResComp',
        component:UpdateResComp,
        path:'/Update/:id'
    },
    {
        name:'AddResComp',
        component:AddResComp,
        path:'/Address'
    },
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router