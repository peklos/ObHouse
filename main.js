// var stroka = "word";
// switch(stroka) {
// case "4":
// 	console.log("4");
// 	break;
// case "44":
// 	console.log("44");
// 	break;
// case "word":
// 	console.log("slovo");
// 	break;
// default:
// 	console.log("syka");
// }

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function(event) {
// 		event.preventDefault();
// 		const blockID = anchor.getAttribute('href')
// 		document.querySelector('' + blockID).scrollIntoView({
// 			behavior: "smooth",
// 			block: "start",
// 		})
// 	})
// }

//    <noscript>включу жаву сука</noscript>
//    <script src="main.js"></script>

/////////////////////////////////////////////////////////////////////


// var asdasd =[323, true, "idi naxyi", 0.4, -123];
// var pidoras = [
// 	[1, 2, 3], ["ponos", "drist", "kakashka"], [ true, ["ebanina", "o4ko"]]
// ];

// console.log(pidoras[2][1][1]);

// for(var zxc = 100; zxc >= 10; zxc -= 10 ) {
// 	console.log(zxc);
// }

// var zxc = 100;
// do {
// 	console.log(zxc);
// 	zxc -=10;
// } while(zxc > 10);

// var jopa = [123, "slovo", true, -2, [1, 2, [1, 2, 3, [123, "PIZDA"]]]];
// for(var i = 0; i < jopa.length; i += 1) {
// 	console.log("Элемент массива №" + (i + 1) + ": " + jopa[i]);
// }

// var massive = [1, 2, 3, 10, 123, 2000];
// for (var a = 0; a < massive.length; a += 1) {
// 	console.log(massive[a] ** 4);
// }

// alert("скажи хуй");
// alert("да еблан ну скажи правда");
// alert("ахахах долбаеб");

// var data = confirm("ты еблан?");
// if(data) {
// 	alert("ну не спиздел харош");
// }
// if(data==false) {
// 	alert("пиздишь");
// }

// prompt("скока");
// function info() {
// 	console.log("Привет");
// 	console.log("хуй");
// }

// info();

// function xyi(word) {
// 	console.log(word+" xyi");
// }

// function summa(a, b) {
// 	var result = a + b;
// 	xyi(result);
// }

// summa(-1,-1);

// var massive1 = [1, 2, 3];
// var massive2 = [4, 5, 6];
// var massive3 = [7, 8, 9]; 

// function summa(arr) {
// 	var sum = 0;
// 	for(i = 0; i < arr.length; i +=1) {
// 		sum += arr[i];
// 	}
// 	console.log(sum);
// }

// summa(massive1);
// summa(massive2);
// summa(massive3);
// var num = 1;

// function makeSum() {
// 	num += 1;
// 	if(num == 10) {
// 		console.log("More than 10");
// 	};

// 	if(num == 20) {
// 		console.log("More than 20");
// 	};

// 	if(num == 30) {
// 		console.log("More than 30");
// 	};

// 	if(num == 40) {
// 		console.log("More than 40");
// 	};

// 	if(num == 50) {
// 		console.log("More than 50");
// 	};

// 	if(num > 59) {
// 		alert("долбаеб хватит кликать");
// 	};

// };

// var num = 0;

// function getResult() {
// 	console.log(num);
// }

// function makeSum(el) {
// 	num++;
// 	el.innerHTML = num;
// }

// function onInput(el) {
// 	console.log(el.value);
// }

// var text = document.getElementById('text');
// console.log(text.id);
// text.style.color = "red";
// text.style.backgroundColor = "blue";
// text.innerHTML = "nigger<br>nigas";

document.getElementById('popupAppl').style = 'display: none';

function checkForm(el) {
	function showResult() {
		console.log("---------------");
		console.log("upper")
		console.log("NAME: " + name);
		console.log("TEL: " + tel);
		console.log("---------------");
	}
	var name = document.getElementById('inputName').value;
	var tel = document.getElementById('inputTel').value;
	var fail = "";



	if(name == "" || tel == "") {
		fail = "Пошел нахуй пидорас ебучий";//"Заполните все поля"
	}

	else if(name.length <= 1 || name.length > 50) 
		fail = "Введите корректное имя";

	else if(tel.length <= 5 || name.length > 14) 
		fail = "Введите корректный номер телефона";

	if(fail != "") {
		document.getElementById('error').style = 'opacity: 1;';
		document.getElementById('error').innerHTML = fail;
	}

	if(fail == "") {
		showResult();
		document.getElementById('BCRI_button').style = 'display: none';
		document.getElementById('popupAppl').style = 'display: block';
		document.getElementById('error').style = 'opacity: 0;';
		document.getElementById('error').innerHTML = "";
		document.getElementById('popupAppl').click();
		document.getElementById('popupAppl').style = 'display: none';
		document.getElementById('BCRI_button').style = 'display: block';
	}

}

function checkFormBott(el) {
	console.log("---------------");
	console.log("bottom");
	var name = document.getElementById('inputNameBott').value;
	console.log("NAME: " + name);
	var tel = document.getElementById('inputTelBott').value;
	console.log("TEL: " + tel);
	var bm = document.getElementById('inputBigMessageBott').value;
	console.log("BM: " + bm);
	console.log("---------------");
}
