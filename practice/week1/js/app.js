// class RandomPicker {
//     items

//     constructor(items) {
//         this.items = items
//     }

//     pickRandom() {
//         return this.items[Math.floor(Math.random() * this.items.length)]
//     }
// }

// class MagicEight extends RandomPicker {
//     outputElement

//     constructor(element) {
//         super(["Yes", "No", "Maybe"])
//         this.outputElement = element;
//     }

//     shake() {
//         let reply = this.pickRandom();
//         this.outputElement.innerHTML = reply;
//     }
// }

// let myEightBall = new MagicEight(document.getElementById("magicResponse"));
// console.log(myEightBall.pickRandom());
// myEightBall.shake();

// var timestamp = new Date().currentTime();

// console.log(timestamp);

// var firstEmployee = {
//     name: "Avanna",
//     id: 123,
//     position: "waitress",
//     clockin: function() {
//     console.log("Avanna clocked in.");
//     }
//   }
  
//   firstEmployee.clockin();

//   var secondEmployee = {
//     name: "Oliver",
//     id: 123,
//     position: "delivery driver",
//     clockin: function() {
//     console.log(this.position + ", " + this.Name + "clocked in.");
//     }
//   }
  
//   secondEmployee.clockin();

//   class Employee {
    
//   }

// The three most important concepts I learned in this lecture were objects & methods, 'this' keyword, and classes.
// Objects can contain multiple properties which describe them. So, an employee could be described by their id number, name, and position. It can also contain methods, which allow the object to do things and perform actions when called upon.

var firstEmployee = {
  name: "Avanna",
  id: 123,
  position: "waitress",
  clockin: function() {
  console.log("Waitress Avanna clocked in.");
  }
}

firstEmployee.clockin();
 
// This 'this' keyword is something that can be used in objects to call back to other parts of the object. So, 'this' refers to the object it is being used in, like it is 'this object'. This makes it easy to change a property of an object without having to also change where it is referenced within the object. This is especially useful for classes.

var secondEmployee = {
  name: "Oliver",
  id: 456,
  position: "Delivery Driver",
  clockin: function() {
  console.log(this.position + " " + this.name + " clocked in.");
  }
}

secondEmployee.clockin();

// Classes allow you create a blueprint for many similar objects. It is like the idea of an item while an object is the actual item. Classes can also inherit from other classes. The class that is inherited from is known as the super class. The super class is generally more 

class Employee {
	constructor (name, id) {
		this.name = name;
		this.id = id;
	}
	
	clockin() {
		console.log(this.position + ", " + this.name + " clocked in.");
	}
}

class Waitress extends Employee {
	constructor (name, id, section) {
		super(name, id);
		this.section = section;
	}
	
	clockin() {
		console.log("Waitress " + this.name + " clocked in.");
	}
}

var waitress = new Waitress("Avanna", 123, "1A");

waitress.clockin();