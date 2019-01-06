var m1 = document.getElementsByClassName('ml')[0];
var m2 = document.getElementsByClassName('ml')[1];
var shi = document.getElementById('shi');
m1.onclick = function(){
	m1.id = "m1";
	m2.id = "m2";		
	shi.innerHTML = '"150ml"';
}
m2.onclick = function(){
	m1.id = "m2";
	m2.id = "m1";
	shi.innerHTML = '"200ml"';
}


var k1 = document.getElementsByClassName('k1')[0];
var k11 = document.getElementsByClassName('k1')[1];
var k2 = document.getElementsByClassName('k2')[0];
k1.onclick = function(){
	k2.value--;
	if(k2.value < '5'){
		k11.style.cursor= "pointer";
	}
	if(k2.value <= '0'){
		k2.value = '0';
		k1.style.cursor= "not-allowed";
	}
}
k11.onclick = function(){
	k2.value++;
	if(k2.value > '0'){
		k1.style.cursor= "pointer";
	}
	if(k2.value >= '5'){
		k2.value = '5';
		k11.style.cursor= "not-allowed";
	}	
}
k2.onchange = function(){
	if(k2.value <= '0'){
		k2.value = '0';
		k1.style.cursor= "not-allowed";
		k11.style.cursor= "pointer";
	}
	else if(k2.value >= '5'){
		k2.value = '5';
		k1.style.cursor= "pointer";
		k11.style.cursor= "not-allowed";
	}
}


var hui = document.getElementById('hui');
var ru = document.getElementById('ru');
var c1 = document.getElementById('c1');
var xu = document.getElementById('xu');
ru.onclick = function(){
	hui.style.display = "block";
}
c1.onclick = function(){
    hui.style.display = "none";
}
xu.onclick = function(){
    hui.style.display = "none";
}


var an1 = document.getElementById('an1');
var an2 = document.getElementById('an2');
var sp1 = document.getElementById('sp1');
var sp2 = document.getElementById('sp2');
var tu2 = document.getElementById('tu2');
sp1.onmouseover = function(){
	sp1.id = "sp1";
	sp2.id = "sp2";		
	tu2.style.left = '0px';
	Bimg.src="../img/pp0.jpeg";
}
sp2.onmouseover = function(){
	sp1.id = "sp2";
	sp2.id = "sp1";
	tu2.style.left = '-408px';
	Bimg.src="../img/pp1.jpeg";
}
an1.onclick = function(){
	if(tu2.style.left == '0px'){
		sp1.id = "sp2";
		sp2.id = "sp1";
		tu2.style.left = '-408px';
		Bimg.src="../img/pp1.jpeg";
	}
	else{
		sp1.id = "sp1";
		sp2.id = "sp2";
		tu2.style.left = '0px';
		Bimg.src="../img/pp0.jpeg";
	}
}
an2.onclick = function(){
	if(tu2.style.left == '0px'){
		sp1.id = "sp2";
		sp2.id = "sp1";
		tu2.style.left = '-408px';
		Bimg.src="../img/pp1.jpeg";
	}
	else{
		sp1.id = "sp1";
		sp2.id = "sp2";
		tu2.style.left = '0px';
		Bimg.src="../img/pp0.jpeg";
	}
}


var tu = document.getElementById('tu');
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var da = document.getElementById('da');

tu.onmouseover = function () {
	slider.style.display = 'block';
	img2.style.display = 'block';
}
tu.onmouseout = function () {
	slider.style.display = 'none';
	img2.style.display = 'none';
}
tu.onmousemove = function (ev) {
	var ev = ev || window.event;
	var TOP = document.body.scrollTop || document.documentElement.scrollTop;
	var oL = ev.clientX - da.offsetLeft - slider.offsetWidth / 2;
	var oT = ev.clientY + TOP - da.offsetTop - slider.offsetHeight / 2;
	var oMaxw = tu.offsetWidth - slider.offsetWidth;
	var oMaxh = tu.offsetHeight - slider.offsetHeight;
	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';
	var scale = img2.offsetWidth / slider.offsetWidth;
	Bimg.style.left = -scale * oL + 'px';
	Bimg.style.top = -scale * oT + 'px';
}