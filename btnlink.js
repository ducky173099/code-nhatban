document.addEventListener("DOMContentLoaded", function(){

	var trangthaiscroll = 'action';
	var doituongscroll1 = document.getElementById('thescroll1');
	var doituongscroll2 = document.getElementById('thescroll2');
	var doituongscroll3 = document.getElementById('thescroll3');
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset > 2100){
			doituongscroll1.classList.add('bodyra1');
		}
		if(window.pageYOffset >= 3200){
			doituongscroll2.classList.add('bodyra2');
		}
		if (window.pageYOffset >= 3800) {
			doituongscroll3.classList.add('bodyra3');
		}

	})

	var btnra6 = document.getElementById('btnlink');
	var navra6 = document.getElementById('opendate');
	var trangthai = "lan1";

	btnra6.onclick = function(){

		if (trangthai == "lan1") {
			console.log('lan 1');
			trangthai = "lan2";
			navra6.classList.add('datera');
		} else if(trangthai == "lan2"){
			console.log('lan 2');
			trangthai = "lan1";
			navra6.classList.remove('datera');
		}
	}


},false)