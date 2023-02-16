function palindrome(str) {
	let val = 0

	for (let i = str.length-1; i>=0; i--) {
		val += str[i]
	}

	if (val === str) {
		return true
	}
	else {
		return false
	}
}
	

let result = palindrome(121)

console.log(result)


