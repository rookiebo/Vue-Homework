import Vue from "vue"
import app from "./App.vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./route"
import "./node_modules/mui/css/mui.css"
new Vue({
    el: "#app",
    render: c => c(app),
    router
})