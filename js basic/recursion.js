//recursion is technique where a function calls itselfs repeatedly until it reaches a specific condition

function factorial(n) {

	if (n==0)  //recursive case
	{
		return 1;
	}

	// recursive case

	else {
		return n * factorial(n-1);
	}



}

const n= 170
console.log("factorial of 8 : " + factorial(n))