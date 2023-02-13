
//object literal
let obj = {
	name: "dhar",
	progrm : "js",
	fav : "python"

}

let second = Object.create(obj)    //Object.create() method 
obj.add = 4

console.log(second.add)
console.log(second.name)
console.log(obj.add)