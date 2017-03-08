var webInter=document.querySelector('.web-inter');
var webCe=document.querySelector('.web-ce');
var webCes=document.querySelector('.web-ces');
var boxss=document.querySelector('.boxss');
var webSy=document.querySelector('.web-sy');
var webFooter=document.querySelector('.web-footer');
var webBox=document.querySelector('.web-box');
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
	webBox.classList.add('active');
	webInter.classList.add('active');
})

webCes.addEventListener('touchstart',function(){
	webCe.classList.add('active');
	boxss.classList.remove('active');
	webSy.classList.remove('active');
	webBox.classList.remove('active');
	webFooter.classList.remove('active');
	webCes.style.display='none';
	xuan.style.height=0+'px';
	webInter.classList.remove('active');
})

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

