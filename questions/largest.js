const num1 = 23;
const num2 = 22;
const num3 = 24;

let largest;

if (num1 >= num2 && num1 >= num3) {
	largest = num1;

}
else if (num2>= num1 && num2>=3) {
	largest = num2
}

else {
	largest = num3
}

console.log("the largest number is " +  largest);


//second method
const larg = Math.max(num1, num2, num3);
console.log("largest number : " + larg)