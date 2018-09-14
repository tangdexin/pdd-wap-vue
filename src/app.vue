<template>
    <div id="demo">
    <button @click='getData'>toch</button>
    <div v-for="(item,key) in nameList" :key="key">
      <p>{{item.title}}</p>
    </div>
    </div>
</template>
<script>
import http from "./utils/sn-axios"
import api from "../config/api.js"
export default {
  data() {
    return {
      gridColumns: ["name", "power"],
      nameList:[]
    };
  },
  created(){
    this.getData();
  },
  methods: {
    getData:function(){
      http.get('http://news/index').then(res => {
        console.log(res)
        this.nameList = res.articles
      })
    }
  },
  components: {}
};
</script>

