
let root1,root2;
let a= 10;
let b = 20;
let c = 20;

let d = b*b -4*a*c;

if (d<0) {
	console.log("The quadratic equation has no real roots");
}

else {
root1 = (-b - Math.sqrt(d))/(2*a);
root2 = (-b + Math.sqrt(d))/(2*a);

console.log(root1) ;
console.log(root2) ;
}