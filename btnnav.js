document.addEventListener('DOMContentLoaded',function(){

	var btnra = document.getElementById('btnmore');
	var navra = document.getElementById('navmore');
	var trangthai = "lan1";


	// for (var i = 0; i < btnra.length; i++) {
	// 	btnra[i].addEventListener('click',function(){
	// 		console.log('lan click haha');
	// 		console.log("vi tri cua nut la : " + btnra[i]);

	// 		this.classList.add('navra')

	// 		// for (var i = 0; i < btnra.length; i++) {
	// 		// 	btnra[i].classList.remove('navra');
	// 		// }

	// 		// console.log(this.previousElementSibling);
	// 		// var btnactive = this;

	// 		// for(var vt = 0; btnactive = btnactive.previousElementSibling; vt++){
	// 		// 	console.log('bien vt =' + vt);
	// 		// 	console.log('phan tu nut kick hoat la ' + btnactive);

	// 		// }
	// 		// console.log('vi tri cua nut la : ' +vt);
	// 		// for (var i = 0; i < navra.length; i++) {
	// 		// 	navra.classList.add('navra');
	// 		// }



	// 	});

	// }

	btnra.onclick = function(){
		// console.log("lan 1");

		if (trangthai == "lan1") {
			console.log('lan 1');
			trangthai = "lan2";
			navra.classList.add('navra');
		} else if(trangthai == "lan2"){
			console.log('lan 2');
			trangthai = "lan1";
			navra.classList.remove('navra');
		}
	}

	var btnra2 = document.getElementById('btnmore2');
	var navra2 = document.getElementById('navmore2');

	btnra2.onclick = function(){
		// console.log("lan 1");

		if (trangthai == "lan1") {
			console.log('lan 1');
			trangthai = "lan2";
			navra2.classList.add('navra');
		} else if(trangthai == "lan2"){
			console.log('lan 2');
			trangthai = "lan1";
			navra2.classList.remove('navra');
		}
	}

	var btnra3 = document.getElementById('btnmore3');
	var navra3 = document.getElementById('navmore3');

	btnra3.onclick = function(){
		// console.log("lan 1");

		if (trangthai == "lan1") {
			console.log('lan 1');
			trangthai = "lan2";
			navra3.classList.add('navra');
		} else if(trangthai == "lan2"){
			console.log('lan 2');
			trangthai = "lan1";
			navra3.classList.remove('navra');
		}
	}

	var btnra4 = document.getElementById('btnmore4');
	var navra4 = document.getElementById('navmore4');

	btnra4.onclick = function(){
		// console.log("lan 1");

		if (trangthai == "lan1") {
			console.log('lan 1');
			trangthai = "lan2";
			navra4.classList.add('navra');
		} else if(trangthai == "lan2"){
			console.log('lan 2');
			trangthai = "lan1";
			navra4.classList.remove('navra');
		}
	}

	var btnra5 = document.getElementById('btnmore5');
	var navra5 = document.getElementById('navmore5');

	btnra5.onclick = function(){
		// console.log("lan 1");

		if (trangthai == "lan1") {
			console.log('lan 1');
			trangthai = "lan2";
			navra5.classList.add('navra');
		} else if(trangthai == "lan2"){
			console.log('lan 2');
			trangthai = "lan1";
			navra5.classList.remove('navra');
		}
	}





},false);

