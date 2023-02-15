function factorial(num) {
	let result = 1

	for (let i=1; i<=num; i++) {
		result *= i;
	}

	return result;
}

let b = factorial(6)

console.log(b)