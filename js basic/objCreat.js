//there are 6 ways to create objects in javascript
// here we are using Object.create() method to create an object

let personPrototype = {
	greeting: function () {
		console.log("Hello");

	}
};

let newObject = Object.create(personPrototype);
newObject.greeting();

let secondObject = Object.create(personPrototype)

secondObject.greeting();