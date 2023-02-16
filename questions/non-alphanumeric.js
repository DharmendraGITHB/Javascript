// to remove non-alphanumeric charactres from a string in js , using regex
// 

function removeNon(str) {
	return str.replace(/[^0-9a-zA-z]/g, "")
}


/* 

In this function, the regular expression [^0-9a-zA-Z] matches any character that is not a digit (0-9) or a letter (a-zA-Z). 
The ^ inside the square brackets means "not". 
The g flag at the end of the regular expression means "global", 
which causes the replace method to replace all occurrences of the matched pattern in the string.

 */

const input = "abc123@#"
console.log("Alphanumeric string:", input)

const output = removeNon(input)
console.log("Non-Alphanumeric characters: " + output)


/* 

In this function, 
the regular expression [^0-9a-zA-Z] matches any character that is not a digit (0-9) or a letter (a-zA-Z).
 The ^ inside the square brackets means "not". The g flag at the end of the regular expression means "global", 
 which causes the replace method to replace all occurrences of the matched pattern in the string.


*/