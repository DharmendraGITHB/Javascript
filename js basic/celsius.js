// celsius to fahrenheit 

function convert(celsius) {

	let farh = ((celsius*9)/5 + 32 )

	return farh

}

let celsius = 45

console.log("celsius to fahrenheit conversion: " + convert(celsius))