var mySwiper = new Swiper ('.swiper-container', {
 speed: 300, //设置滑动速度
  autoplay: 3000,//可选选项，自动滑动
  pagination : '.swiper-pagination',
  threshold : 100,
  observer:true,
  observeParents:true,
  autoplayDisableOnInteraction: false,
  ininialSlide: 0, //起始图片切换的索引位置（起始从0开始，默认为0）
});
window.onresize=fn;
function fn(){
  (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}
fn();
var t3=null;
var bian=true;
var t2=window.setInterval(function(){
  var b1=document.querySelector('.swiper-slide-active');
  var b2=document.querySelector('.sp-pb');
  if(b1===b2){
    if(bian==true){
        bian=false;
       t3=window.setTimeout(function(){
             // 跳的地址
              location.href="http://www.baidu.com";
        },2200);
    }
  }else{
      window.clearInterval(t3);
      bian=true;
  }
},20);


