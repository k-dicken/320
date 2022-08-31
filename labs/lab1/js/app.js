
//super class for slecting a random item from an array
class RandomGenerator {
    items
    
    constructor(items) {
        this.items = items;
    }

    pickRandom() {
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
}

//fortune displaying class using the random generator super class
class FortuneCookie extends RandomGenerator {
    //properties
    //display div
    element
    //fortune set by generateFortune()
    fortune

    //constructor
    constructor (element) {
        super(["Your today will be a good day", "Your today will be an odd day", "Your today will be a special day", "Your today will be a bad day", "Your today will be an awful day.", "Your today will be an amazing day", "Your tomorrow will be a good day", "Your tomorrow will be an odd day", "Your tomorrow will be a special day", "Your tomorrow will be a bad day", "Your tomorrow will be an awful day.", "Your tomorrow will be an amazing day"])

        this.element = element;
    }

    //sets div to be clicked to open cookie
    generateFortune() {
        //set up div to be clicked for reveal
        this.element.innerHTML = "Please Open Your Cookie";
        this.element.style.color = "#FFF";
        this.element.style.backgroundColor = "#000";

        //generate a random fortune and save it to the object
        this.fortune = this.pickRandom();
    }

    //reveals fortune
    displayFortune() {
        //resets colors to normal and inserts fortune text
        this.element.innerHTML = this.fortune;
        this.element.style.color = "#000";
        this.element.style.backgroundColor = "#FFF";
    }
}

//create new fortune cookie object
let fortuneCookie = new FortuneCookie(document.getElementById("fortuneDisplay"));

