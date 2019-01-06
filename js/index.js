window.onload = function(){
	var cover = document.getElementById('shang');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static';
		}
	}
}


var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1; 
var timer;
var isMoving = false;
box.onmouseover = function () {
	animate(left, {
		opacity: 0.9
	})
	animate(right, {
		opacity: 0.9
	})
	clearInterval(timer); 
}
box.onmouseout = function () {
	animate(left, {
		opacity: 0
	})
	animate(right, {
		opacity: 0
	})
	timer = setInterval(next, 3000); 
}
right.onclick = next;
left.onclick = prev;

function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}

for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -800 * index
		});
	}
}

function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
timer = setInterval(next, 2000);

function getStyle(obj, attr) {
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
	    var flag = true;
	    for (var attr in json) {
	  	    (function (attr) {
		  		if (attr == "opacity") {
		  			var now = parseInt(getStyle(obj, attr) * 100);
		  			var dest = json[attr] * 100;
		  		} else {
		  			var now = parseInt(getStyle(obj, attr));
		  			var dest = json[attr];
		  		}
	  			var speed = (dest - now) / 6;
	  			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	  			if (now != dest) {
	  				flag = false;
	  				if (attr == "opacity") {
	  					obj.style[attr] = (now + speed) / 100;
	  				} else {
	  					obj.style[attr] = now + speed + "px";
	  				}
	  			}
	  		})(attr);
		}
		if (flag) {
		  	clearInterval(obj.timer);
		  	callback && callback();
		}
	}, 30);
}


var gao2 = document.getElementById("gao2");
function show() {
    var top = gao2.offsetTop - 1; 
    gao2.style.top = top + "px"; 
    if (-1 * gao2.offsetTop >= gao2.offsetHeight / 2) {
        gao2.style.top = 0;
    }
}
var t = setInterval(show, 30);
var li = gao2.children;
for (var i = 0; i < li.length; i++) {
    li[i].onmouseout = function () {
        t = setInterval(show, 30);
    };
    li[i].onmouseover = function () {
        clearInterval(t);
    };
}


var money = document.getElementById("money");
var mo = document.getElementById("mo");
mo.innerHTML ='￥'+ money.value;
money.onchange = function(){
	mo.innerHTML ='￥'+ money.value;
}
	
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var ser = document.getElementById('ser');
var er = document.getElementById('er');

one.style.left = '80px';
two.style.left = '80px';
three.style.left = '80px';
four.style.left = '80px';

var timer1,timer2,timer3,timer4;
one.onmouseover = function () {
	var now = parseInt(one.style.left); 
	clearInterval(timer1);
	timer1 = setInterval(function () {
		now--;
		one.style.left = now + 'px';
	    if (now <= 0) {
			one.style.left = 0+ "px";		
			clearInterval(timer1);
		}
	}, 0.1);
}
one.onmouseout = function () {
	var now = parseInt(one.style.left); 
	clearInterval(timer1);
	timer1 = setInterval(function () {
		now++;
		one.style.left = now + 'px';
	    if (now >= 80) {
			one.style.left = 80+ "px";		
			clearInterval(timer1);
		}
	}, 0.1);
}
two.onmouseover = function () {
	var now = parseInt(two.style.left); 
	clearInterval(timer2);
	timer2 = setInterval(function () {
		now--;
		two.style.left = now + 'px';
	    if (now <= 0) {
			two.style.left = 0+ "px";		
			clearInterval(timer2);
		}
	}, 0.1);
}
two.onmouseout = function () {
	var now = parseInt(two.style.left); 
    clearInterval(timer2);
	timer2 = setInterval(function () {
		now++;
		two.style.left = now + 'px';
	    if (now >= 80) {
			two.style.left = 80+ "px";		
			clearInterval(timer2);
		}
	}, 0.1);
}
three.onmouseover = function () {	
	var now = parseInt(three.style.left); 
	clearInterval(timer3);
	timer3 = setInterval(function () {
		ser.style.display = "none";
		er.style.display = "block";
		now--;
		three.style.left = now + 'px';
	    if (now <= 0) {
			three.style.left = 0+ "px";		
			clearInterval(timer3);
		}
	}, 0.1);
}
three.onmouseout = function () {
	var now = parseInt(three.style.left); 
	clearInterval(timer3);
	timer3 = setInterval(function () {
		now++;
		three.style.left = now + 'px';
	    if (now >= 80) {
	    	ser.style.display = "block";
			er.style.display = "none";
			three.style.left = 80+ "px";		
			clearInterval(timer3);
		}
	}, 0.1);
}
four.onmouseover = function () {
	var now = parseInt(four.style.left); 
	clearInterval(timer4);
	timer4 = setInterval(function () {
		now--;
		four.style.left = now + 'px';
	    if (now <= 0) {
			four.style.left = 0+ "px";		
			clearInterval(timer4);
		}
	}, 0.1);
}
four.onmouseout = function () {
	var now = parseInt(four.style.left); 
	clearInterval(timer4);
	timer4 = setInterval(function () {
		now++;
		four.style.left = now + 'px';
	    if (now >= 80) {
			four.style.left = 80+ "px";		
			clearInterval(timer4);
		}
	}, 0.1);
}






