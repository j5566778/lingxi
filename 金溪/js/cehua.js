// var ch=document.documentElement.clientHeight;
// webCe.style.height=ch+'px';
var webBox=document.querySelector('.web-box');
var webCe=document.querySelector('.web-ce');
var webCes=document.querySelector('.web-ces');
var boxss=document.querySelector('.boxss');
var webSy=document.querySelector('.web-sy');
var webFooter=document.querySelector('.web-footer');
var webInter=document.querySelector('.web-inter');
var xuan=document.querySelector('.web-sy .xuan');
var ss=document.querySelector('.head-hd .ss');
var lis=document.querySelectorAll('.web-sy .xuan>li');
function resize(){
	var ch=document.documentElement.clientHeight;
	webCe.style.height=ch+'px';
	webCes.style.height=ch+'px';
}
resize();
window.addEventListener('resize',resize);
var img=document.querySelector('.web-sy>.sy-header>.sy-head>.head-he>img');

img.addEventListener('touchstart',function(){
	webCe.classList.remove('active');
	webCes.style.display='block';
	boxss.classList.add('active');
	webSy.classList.add('active');
	webFooter.classList.add('active');
	webInter.classList.add('active');
	webBox.classList.add('active');
})
// img.onclick=function(){
// 	webCe.classList.remove('active');
// 	webCes.style.display='block';
// 	boxss.classList.add('active');
// 	webSy.classList.add('active');
// 	webFooter.classList.add('active');
// 	webInter.classList.add('active');
// }

webCes.addEventListener('touchstart',function(){
	webCe.classList.add('active');
	boxss.classList.remove('active');
	webSy.classList.remove('active');
	webInter.classList.remove('active');
	webFooter.classList.remove('active');
	webCes.style.display='none';
	xuan.style.height=0+'px';
	webBox.classList.remove('active');
})
// webCes.onclick=function(){
// 	webCe.classList.add('active');
// 	boxss.classList.remove('active');
// 	webSy.classList.remove('active');
// 	webInter.classList.remove('active');
// 	webFooter.classList.remove('active');
// 	webCes.style.display='none';
// }
var swiper = new Swiper('.boxss', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});


// 下拉

var h=0.66*lis.length;
ss.addEventListener('touchstart',function(){
	console.log(ss)
	xuan.style.height=h+'rem';
	webCes.style.display='block';
})