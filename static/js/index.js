function culWidth(parentElement, childElements, num, dn) { 
	for (var i = 0; i < childElements.length; i++) { 
		var tmpi = i
		childElements[tmpi].style.width = parentElement.clientWidth / num + dn + 'px'
	}
}
//我的收藏
function myCollect() { 
	var collect = document.getElementsByClassName("collect")[0]
	var collectContent = document.getElementsByClassName("collect-content")[0]
	collectContent.style.left = collect.offsetLeft + 'px'
	collectContent.style.width = collect.offsetWidth - 10 + 'px'
}
//更多链接
function more() { 
	var more = document.getElementsByClassName("more")[0]
	var moreContent = document.getElementsByClassName("more-content")[0]
	moreContent.style.left = more.offsetLeft + 'px'
	moreContent.style.width = more.offsetWidth - 10 + 'px'
}

//侧边栏
function sideLabel() { 
	var liList = document.getElementsByClassName("left-menu-list");
	var item1=document.getElementsByClassName("item1")[0]
	var item2 = document.getElementsByClassName("item2")[0]
	var swiper=document.getElementsByClassName("swiper")[0]
	for (var i = 0; i < liList.length; i++) { 
		var tmpi = i
		liList[tmpi].index=tmpi
		liList[tmpi].addEventListener("click", function (e) { 
			for (var j = 0; j < liList.length; j++) {
				var tmpj = j
				liList[tmpj].classList.remove("li-active")
			}
			// console.log(this.index)
			this.classList.add("li-active")
			if (this.index==0) {
				item1.style.display = "block"
				item2.style.display = "none"
				swiper.style.display = "none"
			} else if (this.index==1) {
				item2.style.display = "block"
				item1.style.display = "none"
				swiper.style.display = "none"
			} else { 
				item2.style.display = "none"
				item1.style.display = "none"
				swiper.style.display = "block"
			}
		})

	}
}
//轮播图
function swiperFun() { 
	var items=document.getElementsByClassName("swiper-item");
	var circles=document.getElementsByClassName("circle");
	var leftBtn=document.getElementById("btn-left");
	var rightBtn=document.getElementById("btn-right");
	var content=document.querySelector('.swiper-content');
	var index=0;
	var timer=null;
	
	//清除class
	var clearclass=function(){
		for (var i = 0; i < items.length; i++){
			var tmpi = i
			items[tmpi].className="swiper-item";
			circles[tmpi].className="circle";
			circles[tmpi].setAttribute("num",tmpi);
		}
	}
	/*只显示一个class*/
	function move(){
		clearclass();
		console.log("items[index]",index,items[index])
		items[index].className="swiper-item swiper-active";
		circles[index].className="circle white";
	}
	//点击右边按钮切换下一张图片
	rightBtn.onclick=function(){
		if(index<items.length-1){
			index++;
		}
		else{
			index=0;
		}
		move();
	}
	// 点击左边按钮切换上一张图片
	leftBtn.onclick=function(){
		if(index<items.length){
			index--;
		}
		else{
			index=items.length-1;
		}
		move();
	}
	//开始定时器，点击右边按钮，实现轮播
	timer=setInterval(function(){
		rightBtn.onclick();
	},1500)
	//点击圆点时，跳转到对应图片
	for(var i=0;i<circles.length;i++){
		circles[i].addEventListener("click",function(){
			var point_index=this.getAttribute("num");
			index=point_index;
			move();
		})
	}
	//鼠标移入清除定时器，并开启一个三秒的定时器，使慢慢转动
	content.onmouseover=function(){
		clearInterval(timer);
			timer=setInterval(function(){
				rightBtn.onclick();
			},3000)
	}
	//鼠标移出又开启定时器
	content.onmouseleave=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			rightBtn.onclick();
		},1500)
	}
}

//轮播图下方的图片，撑满宽度
function underSwiperImgs() { 
	var middleContent = document.getElementsByClassName('middle-content')[0]
	// var mcWidth = middleContent.clientWidth
	var middleBottomImgs = document.getElementsByClassName('mb-img')
	// console.log(middleBottomImgs)
	// for (var i = 0; i < middleBottomImgs.length;i++) { 
	// 	var tmp=i
	// 	middleBottomImgs[tmp].style.width=mcWidth/5 -0.5+'px'
	// 	// console.log(tmp,middleBottomImgs[tmp].style.width)
	// }
	culWidth(middleContent,middleBottomImgs,5,-0.5)
	middleBottomImgs[0].style.height=middleBottomImgs[1].clientHeight
}

//“猜你喜欢”的item撑满宽度
function recommendImgs() { 
	var likeContentList = document.getElementsByClassName("like-content-list")[0]
	var lclWidth=likeContentList.clientWidth
	var likeContentItems = document.getElementsByClassName("like-content-item")
	// console.log(likeContentItems)
	// for (var i = 0; i < likeContentItems.length;i++) { 
	// 	var tmp=i
	// 	likeContentItems[tmp].style.width =  lclWidth / 6 -2 + 'px'
	// 	// console.log(tmp,likeContentItems[tmp].style.width)
	// }
	culWidth(likeContentList,likeContentItems,6,-2)
}

//选项卡
function selectCard() { 
	// document.getElementById("div").classList.add("类名");
	var oneTabItemOuts = document.getElementsByClassName("one-tab-item-out")
	var twotabItemOuts = document.getElementsByClassName("two-tab-item-out")

	for (var i = 0; i < oneTabItemOuts.length; i++) { 
		var tmpi = i
		oneTabItemOuts[tmpi].onclick = function () { 
			for (var j = 0; j < oneTabItemOuts.length; j++) { 
				var tmpj = j
				oneTabItemOuts[tmpj].classList.remove("active")
			}
			this.classList.add("active")
		}
	}
	for (var i = 0; i < twotabItemOuts.length; i++) { 
		var tmpi = i
		twotabItemOuts[tmpi].onclick = function () { 
			for (var j = 0; j < twotabItemOuts.length; j++) { 
				var tmpj = j
				twotabItemOuts[tmpj].classList.remove("active")
			}
			this.classList.add("active") 
		}
	}
}

//xF家用电器右侧平铺
function xFRight() { 
	var oneFRight = document.getElementsByClassName("oneF-right")[0]
	var listItems = document.getElementsByClassName("list-item")
	culWidth(oneFRight,listItems,3,1.3)
}

//今日精品
function bagsImgs() { 
	var contentSan=document.getElementsByClassName("content-san")[0]
	var bagsCenter = document.getElementsByClassName("bags-content")[0]
	// var ccWidth = bagsCenter.clientWidth
	// console.log("ccWidth",ccWidth)
	var bagsItems = document.getElementsByClassName("bags-item")
	// for (var i = 0; i < bagsItems.length; i++) { 
	// 	var tmp = i
	// 	bagsItems[tmp].style.width=ccWidth/3 -25 +'px'
	// }
	culWidth(bagsCenter,bagsItems,3,-25)
	contentSan.style.height = bagsItems[0].clientHeight * 2 + 'px'
}
window.onload = function () {

	swiperFun()
	
	myCollect()

	more()
	
	sideLabel()

	underSwiperImgs()

	recommendImgs()

	selectCard()
	
	xFRight()

	bagsImgs()

}