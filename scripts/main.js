//设置图片切换
let myImge=document.querySelector('img');
myImge.onclick=function(){
	let mySrc=myImge.getAttribute('src');
	if(mySrc==='images/Firefox_Logo,_2019.png'){
		myImge.setAttribute('src','images/Firefox2.png')
	}else{
		myImge.setAttribute('src','images/Firefox_Logo,_2019.png')
	}
}
//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
//个性化欢迎设置函数
function setUserName(){
	let myName=prompt('请输入你的名字。');
	//检查用户是否输入了 null 或者空名字
	if(!myName||myName===null){
		setUserName();
	}else{
		 localStorage.setItem('name',myName);
  myHeading.innerHTML='Mozilla酷毙了，'+myName;
	}


}
//初始化代码：在页面初次读取时进行构造工作
if(!localStorage.getItem('name')){    //?????
	setUserName();
}else{
	let storedName=localStorage.getItem('name');
	myHeading.textContent='Mozilla酷毙了，'+storedName;
}
//为按钮设置onclick事件处理器
myButton.onclick = function() {
   setUserName();
}
/*let myButton=document.querySelector('button');
myButton.onclick=function(){
	alert('警告');
}*/