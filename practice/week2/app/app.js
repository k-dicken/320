// create a synth and connect it to the main output (your speakers)
// let synthApp = {
//     synth: new Tone.Synth().toDestination(),
//     notes: [ "C4", "D4", "E4", "F4" ],
//     currentNote: 0,
//     playSound() {
//         //play a middle 'A' for the duration of an 8th note
//         this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");

//         this.currentNote ++;

//         console.log(this.currentNote);

//         if (this.currentNote < this.notes.length) {
//             setTimeout(this.playSound.bind(this), 500);
//         }

//     }
// }

let i = 0;
let ins = [aCello, aThing, aGuitar];

function playNext() {
    //Do the next in the array of instruments
    i++;
    ins[i].play();
}

class Instrument {
      constructor(callback) {
            this.onComplete = callback;
       }

       play() {
           setTimeout(this.callback, 500);
       }
}

// class Courses {
//     constructor (name, professor, credits) {
//         this.name = name;
//         this.professor = professor;
//         this.credits = credits;
//     }
// }

// class Section extends Courses {
//     constructor (name, professor, credits, num, day, timeStart, timeEnd) { 
//         super(name, professor, credits);
//         this.num = num;
//         this.day = day;
//         this.timeStart = timeStart;
//         this.timeEnd = timeEnd;
//     }

//     displayInfo() {
        
//     }

// }