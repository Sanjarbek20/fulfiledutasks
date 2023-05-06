/** @format */

/* var kiritilganQiymat = +prompt("Iltimos yoshingizni kiriting");
function findWho(kiritilganQiymat) {
	if (kiritilganQiymat <= 16) {
		console.log("O'quvchisiz");
	} else if (kiritilganQiymat > 16 && kiritilganQiymat <= 25) {
		console.log("Talabasiz");
	} else if (kiritilganQiymat > 25 && kiritilganQiymat <= 60) {
		console.log("Ishchisiz");
	} else {
		// console.log("Nafaqaxo'r");
		alert("text kiritdigiz");
	}

	var result =
		kiritilganQiymat <= 16
			? "O'quvchisiz"
			: kiritilganQiymat > 16 && kiritilganQiymat <= 25
			? "Talabasiz"
			: kiritilganQiymat > 25 && kiritilganQiymat <= 60
			? "Ishchisiz"
			: kiritilganQiymat > 60
			? "Nafaqaxo'rsiz"
			: "text formatidagi qiymat kiritdingiz pls son kiriting";
	alert(result);
}
findWho(kiritilganQiymat);
 */

/* 
var a = +prompt("birinchisonniKiriting:");
var b = +prompt("IkkinchisonniKiriting:");
var c = +prompt("UchinisonniKiriting:");

function SummaTwoNumber(a, b, c) {
	var d = a + b;
	var s = a + c;
	var k = b + c;

	if (d > s && d > k) {
		alert(d);
	} else if (s > d && s > k) {
		alert(s);
	} else if (k > d && k > s) {
		alert(k);
	} else if (k == d && k == s && s == d) {
		alert(
			"siz bir xil son kiritdigiz va ikki sonning yig'indisi olishini xohlasangiz Ok tugmasini bosing"
		);
		alert(k);
	} else if (k == d || k == s || s == d) {
		// alert(" uchtadan ikkitasi bir xil kiritdigiz va yigindi:");
		if ((d > s && d > k) || k == s) {
			alert(k);
		} else if ((s > d && s > k) || d == k) {
			alert(d);
		} else if ((k > d && k > s) || d == s) {
			alert(s);
		} else {
			alert("Siz text kiritdigiz pls input number");
		}
	} else {
		alert("Siz text kiritdigiz pls input number");
	}
}
SummaTwoNumber(a, b, c);
 */

// 1 -masala:

/* var year = +prompt("yilni kiriting:");
var month = prompt("oyni kiriting:");
 */
/*  function KabisaYil(year, month) {
	switch ((year, month)) {
		case "yanvar":
			alert("30 kun");
			break;

		case year % 4 === 0 && year % 100 >= 1 && "fevral":
			alert("29 kun");
			break;

		case "mart":
			alert("31 kun");
			break;

		case "aprel":
			alert("30 kun");
			break;

		case "may":
			alert("31 kun");
			break;

		case "iyun":
			alert("30 kun");
			break;

		case "iyul":
			alert("31 kun");
			break;

		case "avgust":
			alert("31 kun");
			break;

		case "sentabr":
			alert("30 kun");
			break;

		case "okyabr":
			alert("31 kun");
			break;

		case "noyabr":
			alert("30 kun");
			break;

		case "dekabr":
			alert("31 kun");
			break;
		default:
			alert("28 kun");
	}
}  */
// KabisaYil(year, month);

// 2-masala:

/* 
var n = +prompt("n gacha sonni kiritsangiz juftlarni ko'rsataman:");
function evenNumber(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}
evenNumber(n); */

// 3-masala:

// var n = +prompt("N kiriting:");
/* function Qoldiqsiz(n) {
	var soni = 0;

	for (let j = 1225; j <= 10000; j += 1225) {
		if (j % 1225 === 0) {
			console.log(j);
			soni++;
		}
	}
	console.log("1225 ga bo'lidadigan sonlar: ", soni);
}
Qoldiqsiz(3);
 */
// 4-masala:

/* var number = +prompt("oxirgi raqamini kiriting:");
function UchburchakNumber(number) {
	for (let i = 0; i <= number; i++) {
		var ustunlar = "";
		for (let j = 1; j <= i; j++) {
			ustunlar += j + "";
		}
		console.log(ustunlar);
	}
}
UchburchakNumber(number); */

// 5-masala

// function MaxArray(n) {
/* var arr1 = [45, 21, 4, 78];

var maxElement = arr1[0];
var minElement = arr1[0];

for (let x = 0; x <= arr1.length; x++) {
	if (arr1[x] < minElement) {
		minElement = arr1[x];

		// console.log("max element:", arr1[x + 1]);
	} else if (arr1[x] > maxElement) {
		maxElement = arr1[x];
		// } else {
		// 	// console.log("Hamma elemntlar teng:");
	}
}
console.log("min element:", minElement);
console.log("min element:", maxElement);
 */
// MaxArray(n);

/* function numberToWord(number) {}
numberToWord(number);
 */
const text = "3 boshli aj4darho";

function numberToText(text) {
	const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const numbersText = [
		"nol",
		"bir",
		"ikki",
		"uch",
		"to'rt",
		"besh",
		"olti",
		"yetti",
		"sakkiz",
		"to'qqiz",
	];

	for (let i = 0; i < text.length; i++) {
		if (numbers.includes(text[i])) {
			text = text.replace(text[i], numbersText[parseInt(text[i])]);
		}
	}

	console.log(text);
}

numberToText(text);
