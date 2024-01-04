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


// Adds a new properties and console logs using dot notation
assistantManager.nextAchievement = 'got promoted';

console.log(assistantManager.nextAchievement);


// adds a new propertie and console logs using bracket notation 
assistantManager["age"] = 27;

console.log(assistantManager['age']);


// assign a new value
assistantManager.nextAchievement = 'got promoted again';
assistantManager["age"] = 24;

console.log(assistantManager.nextAchievement);
console.log(assistantManager['age']);
