const person = {
	firstName: "dharmendra",
	lastName: "kumar",
	place: "khatima"
}

const x = person;

x.firstName = 10;

console.log(person.firstName)


// x and person are the object of same reference