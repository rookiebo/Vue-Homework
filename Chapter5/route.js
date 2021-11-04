import VueRouter from "vue-router"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
var router = new VueRouter({
  mode: "history",
  linkActiveClass: "my-active",
  linkExactActiveClass: "my-exact-active",
  routes: [
    {path: '/', redirect: '/55yzb-login'},
    {path: '/55yzb-login', component: Login, meta: {title: "登录"}},
    {path: '/55yzb-Register', component: Register, meta: {title: "注册"}}
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router