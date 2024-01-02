var bird = {
	hasWings: true,
	canFly: true,
	hasFeathers: true
}

var penguin = Object.create(bird);


console.log(penguin.hasWings);	// true

// properties can also be changed

penguin.canFly = false;
console.log(penguin.canFly);
