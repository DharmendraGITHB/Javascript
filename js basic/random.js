// Math.random()
// here don't want to return 0.

function random() {
	let result = 0

	while (result ==0){
		result = Math.random()
		//console.log(result)

		return result
	}
}

const val = console.log("random number: " + random())