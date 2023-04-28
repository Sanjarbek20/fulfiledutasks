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
// function Qoldiqsiz(n) {
// 	/* numbers = 1225;

// 	for (let i = 0; i < n; i++) {
// 		if (numbers % 1225 === 0) {
// 			console.log(numbers);
// 			numbers += 1225;
// 		}
// 	} */
// 	/* soni = 0;
// 	raqamlar = 1225;

// 	while (soni < n)
// 		if (raqamlar % 1225 === 0) {
// 			console.log(raqamlar);
// 			raqamlar += 1225;
// 			soni++;
// 		} */
// }

// Qoldiqsiz(4);

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
/* 
function MaxArray(n) {
	var arr1 = [4, 4, 4, 4];

	var maxElement = arr1[0];
	var minElement = arr1[0];

	for (let x = 0; x <= arr1.length; x++) {
		if (arr1[x] < minElement) {
			minElement = arr1[x];

			// console.log("max element:", arr1[x + 1]);
		} else if (arr1[x] > maxElement) {
			maxElement = arr1[x];
		} else {
			console.log("Hamma elemntlar teng:");
			break;
		}
	}
	console.log("min element:", minElement);
	console.log("max element:", maxElement);
}
MaxArray(1); */

// 6--masala
// sizga Butun sonlardan toplam berlingan shulardan yagona yolg'ozoni toping
/* 
var Numbers = [4, 3, 2, 1, 2, 3, 4];
var firstIndex = Numbers[0];
for (let i = 0; i <= Numbers.length; i++) {
	if (firstIndex === Numbers[i]) {
		firstIndex = Numbers[i + 1];
		console.log(firstIndex);
		continue;
	}
	// else {
	// 	console.log(Numbers[i]);
	// }
} */
// function findAloneNumber(arr) {
// 	const counts = {};

// 	// Loop through array and count occurrences of each number
// 	for (let i = 0; i < arr.length; i++) {
// 		const currentNumber = arr[i];
// 		counts[currentNumber] = (counts[currentNumber] || 0) + 1;
// 	}

// 	// Find the number that occurs only once
// 	for (const [numberStr, count] of Object.entries(counts)) {
// 		const number = parseInt(numberStr);
// 		if (count === 1) {
// 			return number;
// 		}
// 	}

// 	return null; // no number found that occurs only once
// }

// const input = [4, 3, 2, 1, 2, 3, 4];
// const aloneNumber = findAloneNumber(input);

// console.log(aloneNumber); // Output: 1

function convertNumberToWord(numberString) {
	const numberWords = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
	};

	let wordString = "";

	for (let i = 0; i < numberString.length; i++) {
		const currentChar = numberString[i];

		if (/\d/.test(currentChar)) {
			wordString += numberWords[currentChar] + " ";
		} else {
			wordString += currentChar;
		}
	}

	return wordString.trim();
}
const text = fdgdgfgdfgdfgdfgd;
console.log(convertNumberToWord("My age is 34 sdhfgsdhfgdsfg 45 hsdhs 4"));
