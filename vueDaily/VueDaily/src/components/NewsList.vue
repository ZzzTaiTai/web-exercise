<template>
  <div class="NewsList">
    <div class="newsItem">
      <div class="list" v-for="item in nList" id="item.id">
        <router-link v-bind:to="{name:'Details',params:{NewsId:item.id}}">
        <img :src="item.images[0]" alt>
        <span class="text">{{item.title}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsList",
  props: ["NewsL"],
  data() {
    return {
      nList: [],
      scrollNum: 0
    };
  },
  watch: {
    NewsL(val) {
      this.nList = val;
    }
  },
  created() {
  },
  methods: {
  }
};
</script>

<style scoped>
.newsItem .list {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  position: relative;
  top: -20px;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px #aaaaaa;
  z-index: 2;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 5px;
}
.newsItem .list a{
    font-size: 14px;
    margin-left: 15px;
    text-align: left;
    color:#333;
    display: inline;
}
.newsItem .list img {
 
  height: 80px;
}
.newsItem .list span.text {
  font-size: 14px;
  margin-left: 15px;
}
</style>
