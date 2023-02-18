// A whole number greater than 1 that cannot be exactly divided by any number other than itself and 1. eg- 2,3,7,11

let number = 2;
let primeNum = true;

if (number ==1){
	console.log(" i don't know 1 is prime or not ");
}

else if (number > 1) {
	for (let i = 2; i< number; i++)
	{
		if (number % i ==0) {
			isprime = false;
			break;
		}
	}
}