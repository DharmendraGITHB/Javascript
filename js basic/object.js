const person = {
	firstName: "dharmendra",
	lastName: "kumar",
	place: "khatima"
}

const x = person;

x.firstName = 10;

console.log(person.firstName)


// x and person are the object of same reference
// objects are mutable but primitive are immutable
// objects are variables, but objects can contain many values.
//objects values are written as name : value pairs.