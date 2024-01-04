// Creation of object
var assistantManager = {
	movement: 3,
	socialSkills: 30,
	streetSmart: 30,
	health: 40
}

console.log(assistantManager.movement);
console.log(assistantManager.socialSkills);
console.log(assistantManager.streetSmart);
console.log(assistantManager.health);

// Adds new property using Dot Notation
assistantManager.nextAchievement = 'got promoted';
console.log(assistantManager.nextAchievement);

// Adds new property using bracket notation 
assistantManager["age"] = 27;
console.log(assistantManager['age']);

assistantManager.nextAchievement = 'got promoted again';
assistantManager["age"] = 24;

console.log(assistantManager.nextAchievement);
console.log(assistantManager['age']);
