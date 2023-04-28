/** @format */

// Dastlabki 1225 ga qoldiqsiz bolinadigan sonlar:

// function Qoldiqsiz(n) {
/* numbers = 1225;

	for (let i = 0; i < n; i++) {
		if (numbers % 1225 === 0) {
			console.log(numbers);
			numbers += 1225;
		}
	} */
/* soni = 0;
	raqamlar = 1225;
	while (soni < n)
		if (raqamlar % 1225 === 0) {
			console.log(raqamlar);
			raqamlar += 1225;
			soni++;
		} 
}*/

// Qoldiqsiz(4);

// Raqamlarni so'zga aylantirish

/* function convertNumberToWord(numberString) {
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

console.log(convertNumberToWord("My age is two")); */

//

// To'plamdan yolg'iz sonni topish
function findAloneNumber(arr) {
	const counts = {};

	// Loop through array and count occurrences of each number
	for (let i = 0; i < arr.length; i++) {
		const currentNumber = arr[i];
		counts[currentNumber] = (counts[currentNumber] || 0) + 1;
	}

	// Find the number that occurs only once
	for (const [numberStr, count] of Object.entries(counts)) {
		const number = parseInt(numberStr);
		if (count === 1) {
			return number;
		}
	}

	return null; // no number found that occurs only once
}

const input = [4, 3, 2, 5, 2, 3, 8, 5, 4];
const aloneNumber = findAloneNumber(input);

console.log(aloneNumber);
