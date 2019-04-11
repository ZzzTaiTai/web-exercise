var buttons = document.getElementById("buttons");
var oLi = buttons.getElementsByTagName("li");/* 圆点数列*/
var bannerList = document.getElementById("bannerList");


var w = -1920;
var time = null,
    times = null,
    index = 0;
    
function byId(id){
    return typeof(id) === "string"?document.getElementById(id):id
}

// for(var i = 0; i < oLi.length;i++){  
//     oLi[i].onclick=function(){
//         // console.log(i);
//         $("#bannerList1").css("left",i*w);
//         $("#buttons li").removeClass("active");
//         $("#buttons li").eq(i).addClass("active")
//         // console.log(bannerList.style.cssText="left:i*(-1920)");
//     }
// }
for(var i = 0; i < oLi.length;i++){  
    (function(i){
        oLi[i].onclick=function(){
            buttonShown(i);
            var imgW=bannerList.getElementsByClassName('bannerListNumberOne')[0].clientWidth;
            animate(bannerList,-imgW*i);
        }
    })(i);
}
function buttonShown(index){
    for(var i = 0;i<oLi.length;i++){
        oLi[i].className="";
    }
    oLi[index].className="active";
}

function animate(obj,target){
    time=setInterval(function(){
    var step = 100;
    var current=parseInt(obj.style.left);
    step = current >= target ? -step : step;
    current+=step;
  
    if(Math.abs(target-current)>Math.abs(step)){
        obj.style.left=current+"px";
    }else{
        obj.style.left=target+"px";
        clearInterval(time);
    }
    },50)
    
}
// byId("prev").onclick=function(){
//     index--;
//     if(index<=-1){
//         index=2;
//     }
//     buttonShown(index);
//     animate(bannerList,1920*index);
// }
// byId("next").onclick=function(){
//     index++;
//     if(index>2){
//         index=0;
//     }
//     buttonShown(index);
//     animate(bannerList,-1920*index);
// }
function autoPlay(){
    times=setInterval(function(){
        clearInterval(time);
    var imgW=bannerList.getElementsByClassName('bannerListNumberOne')[0].clientWidth;
        index++;
    if(index>2){
        index=0;
    }
    buttonShown(index);
    animate(bannerList,-imgW*index);
},2000)
}

autoPlay();

function autoStop(){ 
    clearInterval(times);
    }
window.onresize = function(){
    clearInterval(time);
        autoStop();
        autoPlay();
};
bannerList.onmouseover= autoStop;
bannerList.onmouseout= autoPlay;






















window.onscroll=function(){
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrolltop>0){
        $('.header').addClass('headeractive');
    }else{
        $('.header').removeClass('headeractive');
    }
}


