<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { urlParse } from "./common/js/util.js";
import header from "./components/header/header.vue";
import api from "./api/api.js";

const ERR_OK = 0;

export default {
  name: "App",
  data() {
    return {
      seller: {
        id: (() => {
          let queryParm = urlParse();
          return queryParm.id;
        })()
      }
    };
  },
  created() {
    // this.$http.get("/api/seller?id=" + this.seller.id).then(response => {
    //   response = response.body;
    //   if (response.errno === ERR_OK) {
    //     this.seller = Object.assign(response.data, this.seller);
    //   }
    // });
    api.seller().then(res =>{
      if(res.status === 200){
        this.seller = Object.assign(res.data.seller, this.seller);
      }
    }).catch(err=>{
      console.log('失败',err);
    })
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  .tab-item {
    flex: 1;
    text-align: center;
    a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
    }
    .active {
      color: red;
    }
  }
}
</style>
