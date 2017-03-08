// 评论页
var text=document.querySelector('#text');
var t;
text.onfocus=function(){
	this.classList.add('active');
	text.innerHTML='';
}
var txt='';
text.oninput=function(){
	if(txt.trim().length<=140){
		txt=this.value;
	}
	if(txt.trim().length>140){
		txt=txt.trim().substr(0,140)
	}
	this.value=txt;
}

