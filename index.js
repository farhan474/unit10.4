function filterOutOdds(...nums) {
	return nums.filter(num => num % 2 === 0);
}

function findMin(...nums) {
	return Math.min(...nums);
}

function mergeObjects(obj1, obj2) {
	return { ...obj1, ...obj2 }
}

function doubleAndReturnArgs(arr, ...newObj) {
	return [...arr, ...newObj.map(num => num * 2)];
}

/** remove a random element in the items array
and return a new array without that item. */


function removeRandom(items) {
	let index = Math.trunc((Math.random * 100)) % items.lenght;
	return[...items.slice(0,index) , ...items.slice(index+1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
	return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
	return { ...obj, [key]: val };
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
	delete obj[key];
	let removedKey = { ...obj };
	return removedKey;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
	return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
	return { ...obj, [key]: val };

}