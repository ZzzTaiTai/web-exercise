<template>
  <div class="NewsDetails">
      <div class="nav">
          <i class="fa fa-chevron-left fa-inverse " @click="back()"></i>
         <div class="navR">
            <span><i class="fa fa-share-alt fa-inverse"></i></span>
            <span><i class="fa fa-star fa-inverse"></i></span>
            <span><i class="fa fa-commenting fa-inverse"></i>{{Newsextra.comments}}</span>
            <span><i class="fa fa-thumbs-up fa-inverse"></i>{{Newsextra.popularity}}</span>
          </div>
        </div>
       
          <!-- <div class="clear"></div> -->
        <div class="content-wrapper" >
          <div class="img-wrapper">
            <img class="banner" :src="NewsDetails.image" alt="">
            <span class="title">{{NewsDetails.title}}</span>
            <span class="image-source">{{NewsDetails.image_source}}</span>
            <div class="dask"></div>
        </div> 
        <div v-html="NewsDetails.body"></div>
          <!--  <div class="answer">
                <img src="http://pic2.zhimg.com/19ed62ad9_i s.jpg" alt="">
                <span class="author">王赟 Maigo，</span>
                <span class="bio">30代も輝き続けたい</span>
            </div>
            <div class="content" v-html="NewsDetails.body">
            </div> -->
        </div>
  </div>
</template>
<script>
export default {
  name: "NewsDetails",
  // props: ["NewsDetails"],
  data() {
    return {
      NewsDetails: [],
      Newsextra:[]
    };
  },
  watch: {
    NewsDetails(val) {
      this.NewsDetails = val;
      console.log(this.NewsDetails)
    }
  },
  beforeCreate() {
  },
  created(){
    let url = "api/4/news/" + this.$route.params.NewsId;
    let extraUrl = "api/4/story-extra/"+ this.$route.params.NewsId;
    console.log(extraUrl)
            this.$axios.get(url)
            .then(response => {
            this.NewsDetails = response.data;
            let link = document.createElement('link')
            link.type = 'text/css'
            link.rel = 'stylesheet'
            link.href = this.NewsDetails.css
            document.head.appendChild(link)
            })
            .catch(error =>{
                console.log(error);
            });
            this.$axios.get(extraUrl)
            .then(response => {
            this.Newsextra = response.data;
            console.log(this.Newsextra)
            })
            .catch(error =>{
                console.log(error);
            });
  },
  mounted() {
       
  },
  methods: {
      back(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.NewsDetails{
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    background: hsla(0,0%,94%,.8);
}
.nav{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top:0;
    height:50px;
    max-width: 768px;
    width:100%;
    background: rgba(0, 0, 0,0.1);
    z-index:3;
    font-size: 18px;
    color: #fff;
}
.nav i.fa{
    margin-left:15px;
}
.navR{
  margin-right: 20px;
}
.navR i{
  padding-right: 5px;
}
.content-wrapper .img-wrapper {
    position: relative;
    z-index: 1;

}
.content-wrapper .img-wrapper .banner{
    height:280px;
    width:100%;
    z-index: 1;
}
.dask{
    background: #000;
    opacity:0.15; filter: alpha(opacity=15);
    height: 100%;
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    }
.content-wrapper .img-wrapper .title{
    position: absolute;
    bottom:40px;
    left:5px;
    padding:0 10px;
    font-size:20px;
    color:#fff;
    text-align: left;
    z-index: 3;
}
.content-wrapper .img-wrapper .image-source{
    position: absolute;
    bottom:10px;
    right:10px;
    font-size:16px;
    color:rgb(212, 211, 211);
     z-index: 3;
}



</style>
