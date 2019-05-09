<template>
  <div class="News-content">
      <div class="nav">
            <i class="fa fa-chevron-left fa-inverse "></i>
        </div>
        <div class="content-wrapper">
            <div class="img-wrapper">
            <img class="banner" src="https://pic4.zhimg.com/v2-7555e56f4ae4be4e7916a3f578f3c20b.jpg" alt="">
            <span class="title">颜色是每种语言的早期词汇，为什么汉语的颜色部分是形声字？</span>
            <span class="image-source">Alexas_Fotos / CC0</span>
        </div>
            <div class="answer">
                <img src="http://pic2.zhimg.com/19ed62ad9_is.jpg" alt="">
                <span class="author">王赟 Maigo，</span>
                <span class="bio">30代も輝き続けたい</span>
            </div>
                    <div class="content">
                            <!-- <p>表示颜色的字，一般会有这么几种来源：</p>
                            <ul><li>来源比较抽象，这些字往往是独体字，也往往是最基本的颜色，如白、黑、赤、黄、青。</li>
                            <li>来源于呈现这种颜色的典型物品，如灰、橙、粉（褐也可以算吧，褐本义为粗布衣）；</li>
                            <li>来源于可用来提取这种颜色的颜料的植物或矿物，如蓝、丹（朱、棕应该归为这一类还是上一类呢？）；</li>
                            <li>专门为这种颜色造的字，常常为绞丝旁的形声字，如红、绿、紫。这些叫法往往是后起的，所以造字法比较系统。</li>
                            </ul><p>你看，最基本的那些颜色，的确都是独体字。只不过赤、青这两个词后来用得少了，被后起的红、绿、蓝代替了而已。</p>
                            <hr><p>关于「独体字」来啰嗦两句：</p>
                            <p>有不少朋友指出「赤」「青」不是独体字：「赤」是「从大火会意」，「青」是「从丹，生声」。殊不知，其实「黑」「黄」也不是独体字：「黑」是「从炎，上出〓（窗）」；「黄」是「从田从炗（光），炗亦聲」。就连「白」其实也不是独体字，是「从入合二」。</p>
                            <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-0568f66660149d2f21ed63e605f3e987_b.jpg" alt=""></p>
                            <p>我查了维基百科、百度百科等处「独体字」的定义，一般都定义得很狭窄，仅包括象形、指事字。如果遵循这个定义，「白黑赤黄青」就确实都不是独体字了。然而，这跟除了文字学研究者之外的大众认识颇为不符：在大众眼里，至少「白、赤」算独体字；「黄」看起来可以上下拆分但拆不出有意义的部件；「黑、青」可以拆出一个常见的偏旁，然而另一半无法解释。究其原因，是因为这些字在演变的过程中（尤其是隶定这一步），形体变化太大，以致一般人看不出字源了。</p>
                            <p>另一方面，「白黑赤黄青」这几个字，也常常作为更复杂的字（如「泊嘿赦横情」）的构成部件，这更让一般人感觉这些字是独体字。当然这一条如果深究其实并没有什么说服力，因为像「明」「利」这样的合体字也常常作为构字部件。</p>
                            <p>我想说的是，可不可以考虑一种比较广的「独体字」的定义，把一般人觉得是独体字的「白黑赤黄青」等字包含进去？当然这种定义也会很模糊，存在不少边缘情况。</p>
                            <p>另外，就算「白黑赤黄青」这些字不能算做独体字，但它们造字时间早，以致字形演变大，也能符合题主「基本颜色是早期词汇」的想法。</p> -->
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

.nav i.fa{
    margin-left:15px;
}
.content-wrapper .img-wrapper {
    position: relative;
}
.content-wrapper .img-wrapper .banner{
    height:280px;
    width:100%;
}
.content-wrapper .img-wrapper .title{
    position: absolute;
    bottom:40px;
    left:5px;
    padding:0 10px;
    font-size:20px;
    color:#fff;
}
.content-wrapper .img-wrapper .image-source{
    position: absolute;
    bottom:10px;
    right:10px;
    font-size:16px;
    color:rgb(138, 137, 137);
}
.content-wrapper .answer{
    width:95%;
    margin:10px auto;
    display:flex;
    display:-webkit-flex;
    align-items: center;
}
.content-wrapper .answer img{
    padding:0 10px;
    
}
.content-wrapper .answer .author{
    font-size:16px;
    color:#444444;
}
.content-wrapper .answer .bio{
    font-size:16px;
    color:rgb(138, 137, 137);
}
</style>
