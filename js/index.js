// JavaScript Document

//——————————轮播图——————————
var banner = document.querySelector("div.banner")
var img = banner.getElementsByTagName("img")
img.timer = null
var btn = document.getElementById("btn").getElementsByTagName("li")
var index = 0
var oldindex = 6
banner.timer = null
img[0].style.opacity = "1"
img[0].style.filter= "alpha(opacity=100)"

for( var i = 0 ; i < btn.length ; i++ ){
	btn[i].index = i//btn赋值索引
	btn[i].onclick = function(){
		oldindex = index//存储原来图片的位置
		index = this.index//将index传回全局变量，获取当前图片位置
		for( var j = 0 ; j < btn.length ; j++ ){
			btn[j].className = ""
		}
		btn[this.index].className = "active"
		if( oldindex == index ){
			return
		}
		clearInterval(img.timer)
		ImgTimetRun()
		
		
	}
}
function ImgTimetRun(){
	var opacity1 = 0
	for( var i = 0 ; i < img.length ; i++ ){
		img[i].style.opacity = "0"
		img[i].style.filter= "alpha(opacity=0)"
	}
	img[oldindex].style.opacity = "1"
	img[oldindex].style.filter= "alpha(opacity=100)"
	img[oldindex].style.zIndex = "1"
	img[index].style.zIndex = "2"
	img.timer = setInterval(function(){
		if( opacity1 >= 100 ){
			clearInterval(img.timer)
		}
		opacity1 += 10
		img[index].style.filter = "alpha(opacity="+opacity1+")"
		img[index].style.opacity = opacity1/100
	},50)
}


function timerRun(){
	banner.timer = setInterval(function(){
		oldindex = index
		index >= 3 ? index = 0 : index++
		for( var i = 0 ; i < img.length ; i++ ){
			btn[i].className = ""
		}
		ImgTimetRun()
		btn[index].className = "active"

	},1200)
}
banner.onmouseover = function(){
	clearInterval( banner.timer )
	banner.onmouseout = function(){
		timerRun()
		banner.onmouseout = null
	}
}
//timerRun()

//——————————选项卡——————————
var SGTD_neirong1 = document.getElementById("SGTD_neirong1")
var SGTD_neirong2 = document.getElementById("SGTD_neirong2")
var SGTD_btn1 = document.getElementById("SGTD_btn1")
var SGTD_btn2 = document.getElementById("SGTD_btn2")
SGTD_btn1.onclick = function(){
	SGTD_btn1.className = "active"
	SGTD_btn2.className = ""
	SGTD_neirong1.style.display = "block"
	SGTD_neirong2.style.display = "none"
}
SGTD_btn2.onclick = function(){
	SGTD_btn2.className = "active"
	SGTD_btn1.className = ""
	SGTD_neirong2.style.display = "block"
	SGTD_neirong1.style.display = "none"
}

//——————————返回顶部——————————
var gotop = document.querySelector("div.gotop")
gotop.timer = null
window.onscroll = function(){
	var otop = document.body.scrollTop || document.documentElement.scrollTop
	if( otop > 500 ){
		gotop.style.display = "block"
	}else{
		gotop.style.display = "none"
	}
}
gotop.onclick = function(){
	clearInterval( gotop.timer )
	var otop = document.body.scrollTop || document.documentElement.scrollTop
	gotop.timer = setInterval(function(){
		otop = document.body.scrollTop || document.documentElement.scrollTop
		document.onmousewheel = function(){
			clearInterval( gotop.timer )
			document.onmousewheel = null
		}
		if( otop <= 0 ){
		  clearInterval( gotop.timer )
		}else if( document.body.scrollTop ){
			document.body.scrollTop -= Math.ceil(otop/25)
		}else if( document.documentElement.scrollTop ){//兼容谷歌，IE
			document.documentElement.scrollTop -= Math.ceil(otop/25)
		}
	},10)
}

//——————————购物车——————————
var ocart = document.getElementById("cart")
var ocart_hidden = ocart.querySelector("div.hidden")
var cart_arrow = document.getElementById("cart_arrow")
ocart.onclick = function(){
	ocart_hidden.style.display = "block"
	cart_arrow.style.backgroundPosition = "-184px -5px"
}
ocart.onmouseleave = function(){
	document.onclick = function(){
		ocart_hidden.style.display = "none"
		cart_arrow.style.backgroundPosition = "-184px -1px"
		document.onclick = null
	}
}

//——————————登录——————————
var login = document.getElementById("login")
var login_window = document.querySelector("div.login")
var login_break = login_window.getElementsByTagName("b")[0]
login.onclick = function(){
	login_window.style.display = "block"
}

login_break.onclick = function(){
	login_window.style.display = "none"
}
