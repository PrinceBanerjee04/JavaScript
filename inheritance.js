var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log('Eagle1 : ' + eagle1);

console.log('Eagle1 : ' + eagle1.hasWings);
console.log('Eagle1 : ' + eagle1.canFly);
console.log('Eagle1 : ' + eagle1.hasFeathers);
