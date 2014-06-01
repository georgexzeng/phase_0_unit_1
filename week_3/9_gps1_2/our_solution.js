// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. George Zeng
//  2. Sebastian Radloff


// 0. "YOU SIGNED... WHO?!"

// Done with partner

// 1. "Here they Come!"

var adamSandler = { 
  name: 'Adam Sandler', 
  age: 47, 
  quote: "That's your home! Are you too good for your home?!"
};

var kristenBell = { 
  name: 'Kristen Bell', 
  age: 33, 
  quote: "Do you wanna build a snowman?"
};

var jimCarrey = { 
  name: 'Jim Carrey', 
  age: 52, 
  quote: "...So you're telling me there's a chance? YEAH!"
};

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.infoDisplay = function(){
    return console.log("Actor name is " + this.name + ", age is " + this.age + ", and quote is " + '"'+this.quote+'"');  
  }
};

shooterMcGavin.infoDisplay();


// 4. "But wait, there's more!"

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.infoDisplay = function(){
    return console.log("Actor name is " + this.name + ", age is " + this.age + ", and quote is " + '"'+this.quote+'"');  
  }
  this.showQuote = function(){
     return console.log("'" + this.quote + "'")
  }
  this.showRep = function(){
      return console.log("rockstarReps")
  }
  this.newDim = function(nameDimension){
      this.nameDimension = nameDimension;
  }
};

shooterMcGavin.showQuote();

// 5.  ** BONUS **

shooterMcGavin.newDim("weight");
shooterMcGavin.weight = 155;
shooterMcGavin.weight;

//  6.  Your Reflection:

// This was an interseting exercise to do.  One of my key takeaways was that I've spent a decent
// amount of time on the challenges without spending time on the key knowledge underpinnings of 
// Ruby and Javascript.  Unfortunately, I hadn't spent time reading Princeples of Object Oriented 
// Design, Coding for Practiconers, Ruby for Practiconers, or the Ruby/Javascript labs.  After this
// GPS, realizing my deficiencies here, I ordered all these books and have doubled up and spent more 
// time this week on improving my core programming knowledge.