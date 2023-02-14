let newobject = {
	name:"dk",
	branch: "cse"
}

let obj = Object.create(newobject);

obj.add = "stg"


console.log(obj.add)
console.log(newobject.add)