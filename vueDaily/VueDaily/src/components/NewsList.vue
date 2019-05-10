<template>
  <div class="NewsList">
    <div v-for="(itemL,indexL) in nList">
        <p class="time">{{itemL[0].ga_prefix}}</p>
      <div class="clear"></div>
    <div class="newsItem"v-for="(item,index) in nList[indexL]">
      <div class="list">
        <router-link v-bind:to="{name:'Details',params:{NewsId:item.id}}">
        <img :src="item.images[0]" alt>
        <span class="text">{{item.title}}</span>
        </router-link>
      </div>
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
      // console.log(this.nList)
    },
  },
  created() {
    
  },
  methods: {
  },
 
};
</script>

<style scoped>
.newsItem{

}
.newsItem .list {
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
    display: flex;
    display: -webkit-flex;
    align-items: center;
}
.newsItem .list img {
  height: 70px;
}
.newsItem .list span.text {
  font-size: 14px;
  margin-left: 15px;
}
.NewsList .time{
  float: left;
  margin: 10px 25px

}
</style>
