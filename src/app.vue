<template>
  <div id="demo">
    <!--<button @click='getData'>toch</button>-->
    <div v-for="(item,key) in nameList" :key="key">
      <p>{{item.title}}</p>
    </div>
    <router-link to="/home">Go to indexHome</router-link>
    <router-link to="/cart">Go to indexCart</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import http from "./utils/sn-axios"
import api from "../config/api.js"
import homeIndex from './view/home/index.vue'
export default {
  data() {
    return {
      gridColumns: ["name", "power"],
      nameList: []
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    // getData:function(){
    //   http.get('http://news/index').then(res => {
    //     console.log(res)
    //     this.nameList = res.articles
    //   })
    // }
  },
  components: {
    homeIndex
  }
};
</script>

