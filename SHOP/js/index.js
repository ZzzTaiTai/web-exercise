// let listBox = document.getElementById('list'),
//     headerBox = document.getElementById('header'),
//     linkList = headerBox.getElementsByTagName('a'),
//     productList = listBox.getElementsByTagName('li');

// ~function () {
//     //=>AJAX
//     let productData = null,
//         xhr = new XMLHttpRequest;
//     xhr.open('GET', 'json/product.json', false);
//     xhr.onreadystatechange = () => {
//         xhr.readyState === 4 && xhr.status === 200 ? productData = xhr.responseText : null;

//         //->FORMAT DATA
//         productData ? productData = JSON.parse(productData) : null;
//     };
//     xhr.send(null);

//     //=>BIND DATA
//     let str = ``;
//     for (let i = 0; i < productData.length; i++) {
//         let {
//             title,
//             img,
//             price,
//             time,
//             hot
//         } = productData[i];

//         str += `<li data-price="${price}" 
//                     data-time="${time}" 
//                     data-hot="${hot}">
//         <a href="javascript:;">
//             <img src="${img}" alt="">
//             <p>${title}</p>
//             <span>￥${price}</span><br/>
//             <span>时间：${time}</span><br/>
//             <span>热度：${hot}</span>
//         </a></li>`;
//     }
//     listBox.innerHTML = str;
// }();

// //=>HANDLE CLICK
// ~function () {
//     let sortList = function () {
//         let {index: _index, flag: _flag} = this,
//             productAry = [].slice.call(productList);
//         productAry.sort((a, b) => {
//             let ary = ['data-time', 'data-price', 'data-hot'];
//             let aInn = a.getAttribute(ary[_index]),
//                 bInn = b.getAttribute(ary[_index]);
//             if (_index === 0) {
//                 aInn = aInn.replace(/-/g, '');
//                 bInn = bInn.replace(/-/g, '');
//             }
//             return (aInn - bInn) * _flag;
//         });
//         for (let i = 0; i < productAry.length; i++) {
//             let curLi = productAry[i];
//             listBox.appendChild(curLi);
//         }
//     };

//     for (let i = 0; i < linkList.length; i++) {
//         let curLink = linkList[i];
//         curLink.index = i;
//         curLink.flag = -1;
//         curLink.onclick = function () {
//             //=>点击当前的A标签，我们需要让其余的A标签的FLAG回归原始值-1，这样下一次再点击某一个A标签，还是从-1开始乘，变为1，也就是从升序开始的
//             for (let j = 0; j < linkzList.length; j++) {
//                 let item = linkList[j];
//                 if (item !== this) {
//                     item.flag = -1;
//                 }
//             }
//             this.flag *= -1;
//             sortList.call(this);
//         };
//     }
// }();

// let listBox = document.getElementById('list'),
//     header = document.getElementById('header'),
//     alist = header.getElementsByTagName("a"),
//     productList = listBox.getElementsByTagName('li');
//     (function(){
//         let shopdata,
//         str='',
//         req = new XMLHttpRequest;
//         req.open('GET','../json/product.json',false)
//     req.onreadystatechange = () =>{
//         req.readyState === 4 && req.status === 200?shopdata=req.responseText:null
//         /* 对象转为Json数据*/
//         shopdata?shopdata=JSON.parse(shopdata):null
//     }
//     req.send(null)
//     for(let i = 0;i<shopdata.length;i++){
//     /*ES6 解构赋值如果解构得到的值为非undefined，则变量值=解构的值 */
//     let {id,title,price,time,hot,img}=shopdata[i]
//     str+=`<li data-price="${price}" 
//             data-time="${time}" 
//             data-hot="${hot}">
//             <a href="javascript:;">
//                 <img src="${img}" alt="">
//                 <p>${title}</p>
//                 <span>￥${price}</span><br/>
//                 <span>时间：${time}</span><br/>
//                 <span>热度：${hot}</span>
//             </a></li>`;
//     }
//     listBox.innerHTML=str
//     })();

// (function(){
//         let sortListCall = function(){
//             let {index:_index,flag:_flag}=this,
//                 Attr = ['data-time','data-price','data-hot']
//                 productAry = [].slice.call(productList);
//             // console.log(productAry);
//             productAry.sort((a,b)=>{
//                 let aInn = a.getAttribute(Attr[_index]),
//                     bInn = b.getAttribute(Attr[_index]);
//                     if(_index==0){
//                     aInn = aInn.replace(/-/g,'');
//                     bInn = bInn.replace(/-/g,'');
//             }
//                     return (aInn-bInn)*_flag
//         });
//         // flag!=1?flag==1:flag==-1;
//         for(let i = 0;i<productAry.length;i++){
//             let cur = productAry[i];
//             listBox.appendChild(cur);
//         }
//     }
//     for(let j = 0;j<alist.length;j++){
//         let aLink=alist[j]
//         aLink.index = j,
//         aLink.flag = -1;
//     alist[j].onclick = function(){
//         for(let k = 0;k<alist.length;k++){
//             let item = alist[k]
//             if(item!=this){
//                 item.flag = -1;
//             }
//         }
//         this.flag *= -1;
//         sortListCall(this);
//     }
//     }
       
//     })();



let productRender = (function(){
    let Data;
    let getData = function(){
        let req = new XMLHttpRequest;
        req.open('GET','json/product.json',false);
        req.onreadystatechange = () =>{
            req.readyState === 4 && req.status === 200?Data = req.responseText:null;
            Data?Data = JSON.parse(Data):null;  
            // console.log(Data)
        }
        req.send(null);
    }
    let bindHTML = function(){
        console.log(Data)
    }
    return {
        init:function(){
            getData();
            bindHTML();
        }
    }
})();
productRender.init();
   





















