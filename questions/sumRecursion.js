// sum of natural numbers using recursion

function sumRecursion(num) {
	if (num >0) {
		return num + sumRecursion(num-1);
	}
	else {
		return null;
	}
}

const num = -100;

console.log(sumRecursion(num))