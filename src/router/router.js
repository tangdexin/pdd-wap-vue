import Vue from 'vue'
import VueRouter from 'vue-router'

// 正常打包
import indexHome from '../view/home/index.vue'
import indexCart from '../view/cart/index.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    //base: __dirname,
    routes: [
        { name: 'indexHome', path: '/home', component: indexHome },
        { name: 'indexCart', path: '/cart', component: indexCart }
    ]
})

export default router