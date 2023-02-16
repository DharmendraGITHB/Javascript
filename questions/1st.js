function palindrome(str) {
	let val = ""

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
	

let result = palindrome("hello")

console.log(result)


