// This is a solo challenge

// Your mission description:
// Fight an ogre in one on one combat and defeat him

// Pseudocode
// Approach ogre
// Hit ogre continiously
// Hope to defeat him before he defeats you!

// Initial Code


var fightContinues = true;
var totalDamage = 0;
var youHit = Math.floor(Math.random()*2);

while (fightContinues){
	if (youHit){
		var damageThisRound = Math.floor(Math.random()*100 +1);
		console.log("You hit the ogre and did "+damageThisRound + " damage!");
		totalDamage +=damageThisRound;
		if(totalDamage>=50){
			console.log ("You did it!  You killed the ogre!");
			fightContinues=false;
		} 
		else {
			youHit = Math.floor(Math.random()*2);
		}
	}
	else {
	console.log("The ogre killed you!  Oh no!");
	fightContinues=false;
	}
}

// Refactored Code




// Reflection
// This was a really simple game based on some code I had worked on before for a codeacademy exercise.
// Unfortunately, this exercise seemed a little out of place - and although I could have spent a lot
// more time on this exercise (and go down a rabbit hole), I felt like it would be a better use of my
// time to go through Principles of Object Oriented design and Javascript the Good Parts - to build up
// my core skills instead of going down this particular rabbit hole right now.