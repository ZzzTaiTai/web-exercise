var buttons=document.getElementById("buttons");
var oLi=buttons.getElementsByTagName("li");
var bannerList=document.getElementById("#bannerList1");
var w=-1920;
for(let i=0;i<oLi.length;i++){
    
    oLi[i].onclick=function(){
        // console.log(i);
        $("#bannerList1").css("left",i*w);
        $("#buttons li").removeClass("active");
        $("#buttons li").eq(i).addClass("active")
        // console.log(bannerList.style.cssText="left:i*(-1920)");
    }
}

window.onscroll=function(){
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrolltop>0){
        $('.header').addClass('headeractive');
    }else{
        $('.header').removeClass('headeractive');
    }
}


