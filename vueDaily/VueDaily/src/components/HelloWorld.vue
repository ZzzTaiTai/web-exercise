<template>
  <div class="hello">
    <div class="header">
        <i class="icon-menu fa fa-align-left fa-inverse" @click="showthemeList"></i>
        <div class="home">
            <span class="text" @click="handleScroll" >首页</span>
        </div>
        <div class="more">
            <i class="icon-bell fa fa-bell fa-inverse " ></i>
            <i class="icon-more fa fa-ellipsis-v fa-inverse "></i>
        </div>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
 
    <swiper-slide v-for="(item,index) in swiperlist" :key="index">
    <router-link v-bind:to="{name:'Details',params:{NewsId:item.id}}">
    <img :src="item.image" class="swiper-img">
    <div class="dask"></div>
    <div class="title-swiper">
    <span class="title">{{item.title}}</span>
    <div class="clear"></div>
    <p class="blue-swiper"></p> 
    </div>
     </router-link>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
    <NewsList :NewsL='NewsList'></NewsList>
    <div class="Navdask" @click="showthemeList"></div>
    <div class="sideNavleft ">
    <div class="sideNav-header">
        <div class="user">
            <div class="avatar">
            <img class="images" src="https://avatars0.githubusercontent.com/u/18193168" alt="">
            </div>
        </div>
        <span class="userName">Tai</span>
        <div class="github">
            <i class="fa fa-github "></i>
            <a  class="githubUrl" href="javascript:;">www.github.com</a>
        </div>
    </div>
    <div class="themeList">
    <ul>
        <li class="lists">
          <span class="text">首页</span>
          <i class="fa fa-plus"></i>
        </li>
    </ul>
  </div>
  </div>
  </div>
  
</template>

<script>
import NewsList from '@/components/NewsList'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoading: false,
      scrollNum: 0,
      swiperlist:[],
      NewsList:[],
      testList:[],
      swiperOption:{
        loop: true,
        height:280,
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination:{
            el:'.swiper-pagination'
            },
             //分页器挂载到swiper-pagination类对应的元素上
          //开启轮播图前后循环模式
          
      }
    }
  },
  components:{
    "NewsList":NewsList,
  },
  created(){
    var url = '/api/4/news/latest'; // 这里就是刚才的config/index.js中的/api
    this.$axios.get(url)
    .then(response => {
      this.swiperlist = response.data.top_stories
      this.NewsList.push(response.data.stories)
      // console.log(this.NewsList)
      
    })
    .catch(error =>{
      console.log(error);
    });
  },
  mounted() {
    this.swiper.slideTo(0,1000,false);
    this.scroll(this.NewsList);
  },
  computed: {
    swiper(){
      return this.$refs.mySwiper.swiper
    }
  },
  methods:{
    Appendzero(obj) {
      //添0操作
      {
        if (obj < 10) {
          return "0" + "" + obj;
        } else {
          return obj;
        }
      }
    },
    showthemeList(){
      let dask = document.getElementsByClassName('Navdask')[0];
      let Navleft = document.getElementsByClassName('sideNavleft')[0];
      if(dask.className.indexOf("isactive")>0){
        dask.classList.remove("isactive");
        Navleft.classList.remove("isactive");
      }else{
        dask.classList.add("isactive");
        Navleft.classList.add("isactive");
      }
      
    },
    getTimes(n) {
      let date = new Date();
      date.setDate(date.getDate() - n);
      let ajaxDate =
        date.getFullYear() +
        this.Appendzero(date.getMonth() + 1) +
        this.Appendzero(date.getDate());
        // console.log(ajaxDate)
      return ajaxDate;
      },
    getTitleTimes(n){
      let date =new Date()
      date.setDate(date.getDate() - n);
      let TitleDate = (date.getMonth()+1)+'月'+date.getDate()+'日' + "星期" + "日一二三四五六".charAt(date.getDay())
      return TitleDate;
    },
    scroll(num) {
      // let isLoading = false;
      window.onscroll = () => {
        let bottomWindow =document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=10;
        if (bottomWindow && this.isLoading == false) {
          this.isLoading = true;//正在加载
          ++this.scrollNum;
          this.getNews(this.getTimes(this.scrollNum));
        }   
      };
    },
    getNews(date) {
      let url = "/api/4/news/before/" + date;
      this.$axios.get(url)
        .then(response => {
          this.NewsList.push(response.data.stories)
          // console.log(this.NewsList)
          this.NewsList[this.NewsList.length - 1][0].time = this.getTitleTimes(this.scrollNum)
          this.isLoading = false; //取消正在加载
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // var cHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
      var offsetTopList = document.querySelectorAll('.piece')
      // console.log(offsetTopList)
      for(let i = 0;i<offsetTopList.length;i++){
         console.log(offsetTopList[i].offsetTop)
      }
      // document.querySelectorAll('.piece')[0].scrollTop
      // document.querySelectorAll('.piece')[1].offsetTop,
      // document.querySelectorAll('.piece')[2].offsetTop,
      // document.querySelectorAll('.piece')[3].offsetTop,
     
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
    /* background: hsla(0,0%,94%,.8); */
}
.header{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    position: fixed;
    top:0;
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
}
.header .home{
    flex:1;
    text-align: left;
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

.sideNavleft{
  display: none;
  position: fixed;
  top: 0;
  left:0;
  width: 85%;
  height: 100%;
  z-index: 10;
  background: #fff;
}
 .Navdask{
  display: none;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  z-index:9;
   background: #000;
    opacity:0.15; filter: alpha(opacity=15);
  
}
.sideNavleft .sideNav-header{
    padding: 20px 0 20px 10px;
    width: 100%;
    box-sizing: border-box;
    background: #359dda;
   
    
}
.sideNavleft .sideNav-header .user{ 
    display:inline-block; 

}
.sideNavleft .sideNav-header .user .avatar{ 
    display:inline-block; 
    width:25px;
    height:25px;
    border-radius: 50%;
    overflow:hidden;
    vertical-align: middle;

}
.sideNavleft .sideNav-header .github{
    margin-top:5px;
}
.sideNavleft .sideNav-header .user img.images
{
  width:100%;
}
.sideNavleft .sideNav-header .github i{
    padding-left:1px;
    font-size: 24px;
    vertical-align: middle;
}
.themeList{
  background: hsla(0,0%,94%,.9);
  /* background: rgba(0,0,0,.2);
  z-index: 5;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%; */
}
.themeList .lists{ 
    padding: 0px 10px;

    height: 50px;
    line-height:50px;
    
}
.themeList .lists text{ 
    font-size:16px;
}
.isactive{
  display: block;
}
 .swiper{
   margin-top:50px;
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
  cursor: pointer;
}
</style>
<style>
.clear{
  clear: both;
}
.dask{
   background: #000;
    opacity:0.05; filter: alpha(opacity=5);
    height: 100%;
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
}
.swiper-img{
    width:100%;
}
.swiper .swiper-container .swiper-slide{
  position: relative;
}
.swiper .swiper-container .swiper-slide .swiper-img{
    position: absolute;
    top:-20%;
    left:0;
}
.swiper .swiper-container .swiper-slide .title-swiper{
  position: absolute;
  top:60%;
  right:5%;
  width: 65%;
  text-align: right;

}
.swiper .swiper-container .swiper-slide .title-swiper .title{
  color:#fff;
  font-size:18px;
  display: inline-block;
  line-height: 25px;
  
}
.swiper .swiper-container .swiper-slide .title-swiper .blue-swiper{
  margin-top:5px;
  border:2px solid #359dda;
  width:120px;
  border-radius: 5px;
  float: right;
}
.swiper .swiper-pagination-bullet-active{
    background:#fff
    }
    @media (max-width: 520px) and (min-width: 320px){
      .swiper .swiper-container {
     height: 220px;
    }
    }
    @media (min-width: 640px){
    .swiper .swiper-container {
    height: 300px;}
    }

</style>

