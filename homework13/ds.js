/** @format */
/* 
let firstArr = [0, 1, 5, 3];

function incrementsItem(firstArr) {
	var ikki = [];
	for (let i = 0; i < firstArr.length; i++) {
		ikki[i] = firstArr[i] + 1;
	}
	console.log(ikki);
}
incrementsItem(firstArr);
 */

// 2 masala
/* 
function findIndex(arr, str) {
	for (let i = 0; i < arr.length; i++) {
		if (str.includes(arr[i])) {
			console.log(i);
		}
	}
}
let arr = ["hi", "edabit", "fgh", "abc"];
let str = ["fgh"];
findIndex(arr, str);
 */

// 3 -masala

/* let arr = [1, 2, 3, 4, 5];
let numberDeleted = 6;
let results = [];

function deleteItems(arr, numberDeleted) {
	for (let i = 0; i < arr.length; i++) {
		results = arr.slice(numberDeleted);
	}
	console.log(results);
}
deleteItems(arr, numberDeleted);
 */
// 4-masala

/* let numbersLength = 2;
let arr1 = [1, 1, 2, 3, 2, 3, 8];

function aloneNumber() {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr1[i + 1]) {
		}
	}
	console.log(arr1);
}
aloneNumber();
 */

/* let nums = [];

function findDrop(nums, val = 1) {
	if (nums.length < val) {
		return [];
	}
	son = nums.slice(val);
	return son;
}
console.log(findDrop([1, 2, 3, 4, 5, 54, 7, 8, 9], 30));
 */
