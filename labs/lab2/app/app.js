//VARIABLES
let currentInstrument = 0;
let logDiv = document.getElementById("log");

//CLASSES
class Instrument {
    constructor(loudness, family, verb, note, callback) {
        this.loudness = loudness;
        this.family = family;
        this.playVerb = verb;
        this.note = note;
        this.synth = new Tone.Synth().toDestination();
        this.callback = callback;
    }

    playNote(duration) {
        this.synth.triggerAttackRelease(this.note, duration);
        console.log("The " + this.family + "s " + this.playVerb + " at " + this.loudness);
        logDiv.innerHTML = logDiv.innerHTML + "<br>" + "The " + this.family + "s " + this.playVerb + " at " + this.loudness

        setTimeout(this.callback, 1000);
    }
}

class Woodwind extends Instrument {
    constructor(loudness) {
        super(loudness, "Woodwind", "hums", "G7", playNext);
    }
}

class Percussion extends Instrument {
    constructor(loudness) {
        super(loudness, "Percussion", "thuds", "D2", playNext);
    }
}

class String extends Instrument {
    constructor(loudness) {
        super(loudness, "String", "strums", "G4", playNext);
    }
}

//
let flute = new Woodwind("ff");
let bassdrum = new Percussion("mf");
let cello = new String("mp")

let instruments = [flute, bassdrum, cello];

function playNext() {
    if(currentInstrument < instruments.length) {
        if(currentInstrument == 0) {
            logDiv.innerHTML = "";
        }

        instruments[currentInstrument].playNote(".5");
        currentInstrument++;
        
    } else {
        currentInstrument = 0;
    }
}


