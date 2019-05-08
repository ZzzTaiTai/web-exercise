<template>
  <div class="hello">
    <div class="header">
        <i class="icon-menu fa fa-align-left fa-inverse "></i>
        <div class="home">
            <span class="text" >首页</span>
        </div>
        <div class="more">
            <i class="icon-bell fa fa-bell fa-inverse "></i>
            <i class="icon-more fa fa-ellipsis-v fa-inverse "></i>
        </div>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item in swiperlist"><img :src="item.image" class="swiper-img"><span class="title">{{item.title}}</span></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
    <NewsList :NewsL='swiperlist'></NewsList>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperlist:[],
      swiperOption:{
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination:{
            el:'.swiper-pagination'
            },
             //分页器挂载到swiper-pagination类对应的元素上
          loop: true  //开启轮播图前后循环模式
      }
    }
  },
  components:{
    "NewsList":NewsList
  },
  created(){
    var url = '/api/4/news/latest'; // 这里就是刚才的config/index.js中的/api
    let _this = this;
    // this.$axios.get(url)
    // .then(function(response) {
    //   console.log(response.data.stories);
    //   console.log(this);//这个this和_thi
    //   console.log(_this.swiperlist)
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
    this.$axios.get(url)
    .then(response => {
      this.swiperlist = response.data.top_stories
      console.log(this.swiperlist);
    })
    .catch(error =>{
      console.log(error);
    });

  },
  computed: {
    swiper(){
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3,1000,false)
  },
  methods:{
    getImage(url){
                console.log(url);
                // 把现在的图片连接传进来，返回一个不受限制的路径
                if(url !== undefined){
                    return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
                }
            }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    background: hsla(0,0%,94%,.8);
}
.header{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    position: fixed;
    top:0;
    /*left: 0;*/
    height:50px;
    max-width: 768px;
    width:100%;
    background: #359dda;
    z-index: 3;
    font-size:20px;
    color:#fff;
}
.header i.icon-menu{
    width:50px;
    font-size:20px;
    text-align: center;
    flex:0 0 50px;
    /* padding:20px 0; */
}
.header .home{
    flex:1;
}
.header .more{
    display:flex;
    display:-webkit-flex;
    float: right;
    flex:0 0 100px;
}
.header i.icon-bell{
    width:50px;
    font-size:20px;
    flex:0 0 50px;
    text-align: center;
}
.header i.icon-more{
    width:50px;
    font-size:20px;
    flex:0 0 50px;
    text-align: center;
}
 .swiper{
   margin-top:50px;
    /* overflow:hidden;
     width:100%;
     height:0;
      padding-bottom:30.48%; 
     background: #eee; */
} 

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style>
.swiper-img{width:100%;}
.swiper .swiper-container .swiper-slide{
  position: relative;
}
.swiper .swiper-container .swiper-slide .swiper-img{
    position: absolute;
    top:-20%;
    left:0;
        
}
.swiper .swiper-container .swiper-slide .title{
  position: absolute;
  bottom:25px;
  left:0;
  color:#fff;
  font-size:18px;
  line-height:20px;
  padding:0 10px;
  text-align: left;
}
.swiper .swiper-pagination-bullet-active{
    background:#fff
    }
    @media (max-width: 520px) and (min-width: 320px){
      .swiper .swiper-container {
     height: 200px;
    }
    }
    @media (min-width: 640px){
    .swiper .swiper-container {
    height: 280px;}
    }

</style>

