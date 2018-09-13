import Vue from 'vue'
import App from './app.vue'
// Vue.config.productionTip = false

require('./mock.js')
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)