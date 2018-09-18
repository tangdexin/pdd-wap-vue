<template>
    <div>
        123123</div>
</template>
<script>
import http from "../../utils/sn-axios"
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
import Vue from 'vue'
Vue.use(VueJsonp)

// import JSONP from 'node-jsonp'
export default {
    created() {
        this.getSliderData()
    },
    methods: {
        getSliderData: function() {
            // http.get('https://m-element.kaola.com/home/index.html?pageNo=1').then(res => {
            //     console.log(res)
            // })
            // axios.jsonp('https://m-element.kaola.com/home/index.html?pageNo=1').then(res=>{
            //     console.log(res)
            // })
            // JSONP('https://m-element.kaola.com/home/index.html?pageNo=1', function(res) {
            //     console.log(res)
            // })
            Vue.jsonp('https://m-element.kaola.com/home/index.html?pageNo=1',{
                callback:'callback'
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style>

</style>
