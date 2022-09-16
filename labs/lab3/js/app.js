class Game {
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#0FA";
    normalColor = "#AAA";
    foundBar = new foundBar();
    gameZone = document.getElementById("gameZone");

    constructor() {
        for(var i = 0; i < 25; i++) {
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);
            newCirc.classList.add("gameCirc");

            if(Math.random() < .3) {
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            } else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            newCirc.addEventListener("mouseover", event => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCirc.addEventListener("mouseout", event => {
                event.target.style.fill = "#000";
            })

            newCirc.addEventListener("click", event => {
                if (event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();
                    
                    this.foundCircles++;

                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            this.gameZone.appendChild(newCirc);
        }
        
    }
}

class foundBar {
    element = document.getElementById("foundBar");
    maxSize = 140;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        console.log(percent);
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

let g = new Game();

// let gameZone = document.getElementById("gameZone");
// let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// // newCirc.setAttribute("r", 15);
// // newCirc.setAttribute("fill", "#000");
// newCirc.classList.add("gameCirc");
// gameZone.appendChild(newCirc);