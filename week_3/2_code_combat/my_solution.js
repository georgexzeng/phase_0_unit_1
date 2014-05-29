// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // mission 1: rescue mission
 // move down x2
 // move right
 // move up x2
 // move right x2
 // move down
 // attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

 // mission 2: grab the mushroom

 // move up
 // move right
 // move left
 // move up
 // attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

 // mission 3: drink me

 // move right
 // attack 
 // move right
 // move down 
 // move up 
 // move right
 // attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

 // mission 4: taunt the guards

 // bust down door:
 // move right
 // bust down door

 // kill initial guards:
 // move right
 // say hey there
 // move left
 // move left
 // say attack

 // get phoebe to follow through dungeon:
 // move right
 // say follow me
 // move right x2
 // move up
 // move right
 // say "what's up!"
 // move down
 // move right
 // move up
 // move right x2

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("What's up?");
this.moveDown();
this.moveLeft();
this.moveUp();
this.moveRight();
this.moveRight();
 	
 // mission 5: its a trap

 // move down x2
 // say hello
 // move up x2

 this.moveDown();
 this.moveDown();
 this.say("Hello!");
 this.moveUp();
 this.moveUp();

//  mission 6: break the prison

// Phoebe is friend
// Gordon is friend
// Lucas is friend
// Marcus is friend
// Robert is friend
// William is friend
// Brack is not friend
// Gort is not friend
// Grul 'Thock is not friend
// Krogg is not friend

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name ==="Lucas")
return true;

if(name==="Marcus")
return true;

if(name==="Robert")
return true;

if(name==="William")
return true;

if(name==="Gordon")
return true;

if(name==="Brack")
return false;

if(name==="Gort")
return false;

if(name==="Grul 'Thock")
return false;

if(name==="Krogg")
return false;

 // mission 7: taunt

 // say something x4

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!

this.say("What's up?");
this.say("Come on over!");
this.say("Yes");

 // mission 8: cowardly taunt

 // move to a place where most ogres can hear you
 // say something
 // run like hell

this.moveXY(50, 27);
this.say("What's up");
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you

// Say something!

// Then run back behind the arrow towers for safety 

 // mission 9: commanding followers

 // move closer to soldiers
 // tell them to follow you
 // move closer to ogres
 // tell soldiers to kill ogres

this.moveXY(60, 63);
this.say("Follow me!");
this.moveXY(64, 44);
this.say("Attack!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!

//  mission 10: mobile artillery

 
// move close to ogres 1
// kill ogres 1
// move close to ogres 2
// kill ogres 2 x2
// move close to ogres 3
// kill gores x2 

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(57, 32);  // Move into range
this.attackXY(67, 50);  // Shoot once in the middle of the ogres
this.attackXY(63, 44);  // Shoot once in the middle of the ogres
this.moveXY(47, 42);  // Move into range
this.attackXY(47, 62);  // Shoot once in the middle of the ogres
this.attackXY(47, 50);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
  
Release 3: Answer the following questions

When you are finished with all of the campaigns, answer the following questions. You may want to look at some resources on JavaScript before answering.

What is this referring to? Think programming-wise rather than in the terms of the game.

this is referring to whatever object is selected or is being instructed to change.  

The object that this refers to is redetermined every time control enters a new execution context and remains 
fixed until control shifts to a different context. The value of this is dependent upon two things: 
The type of code being executed (i.e., global, function, or eval) and the caller of that code.


What does the () do in JavaScript?

() represents inputs into whatever object or function that is being called in javascript

What is the point of the semicolons?

semicolones is to denote the end of a statement

Release 4: Reflect
 
<<<<<<< HEAD
Release 3: Answer the following questions

When you are finished with all of the campaigns, answer the following questions. You may want to look at some resources on JavaScript before answering.

What is this referring to? Think programming-wise rather than in the terms of the game.

this is referring to whatever object is selected or is being instructed to change.  

The object that this refers to is redetermined every time control enters a new execution context and remains 
fixed until control shifts to a different context. The value of this is dependent upon two things: 
The type of code being executed (i.e., global, function, or eval) and the caller of that code.


What does the () do in JavaScript?

() represents inputs into whatever object or function that is being called in javascript

What is the point of the semicolons?

semicolones is to denote the end of a statement

Release 4: Reflect
 
In the reflection section of your 'my_solution.js` file, reflect on your learning using the reflection guidelines. NOTE: Reflections are mandatory! 

=======
In the reflection section of your 'my_solution.js` file, reflect on your learning using the reflection guidelines. NOTE: Reflections are mandatory! 

>>>>>>> 26551ecc40b6c72670338d89d5394587a9e5aa8b
This was a lot of fun - but javascript as a language feels very different and more mathematical than ruby. I also noticed that the paragraphs do not work the same way as HTML.  Hrmph.
