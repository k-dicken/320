var title = document.getElementById("title");
var nav = document.getElementById("nav");
var items = document.getElementsByClassName("gallery-item");
init();
function init() {
    for(let i = 0; i < items.length; i++) {
        TweenMax.from(items[i], 
        { duration: .4, delay: i + 2, alpha: 0, x: -10}
        );

        items[i].addEventListener("mouseover", event => {
            // event.target.style.opacity = 1;
            // event.target.style.backgroundColor = "#444"; 
            // TweenMax.from(event.target, 
            //     { duration: 1, delay: 0, alpha: 0, backgroundColor:"#000", opacity: 1}
            //     );
            event.target.classList.remove("item-n");
            event.target.classList.add("item-h");
            console.log("mouseover");
        });

        items[i].addEventListener("mouseout", event => {
            // TweenMax.to(event.target, 
            //     { duration: .4, delay: 0, alpha: 0, backgroundColor:"#000", opacity: 1, ease:Power3.easeOut}
            //     );
            // event.target.style.opacity = 1;
            // event.target.style.backgroundColor = "#000";
            event.target.classList.remove("item-h");
            event.target.classList.add("item-n");
            console.log("mouseout");
        });

        items[i].addEventListener("click", event => {
            TweenMax.to(event.target, 
                { duration: .4, delay: 0, alpha: 0, opacity: 0}
                );
            // event.target.style.opacity = 0;
            console.log("click");
        });
    }

    // TweenMax.from(title, 
    //     { duration: .4, delay: 0, alpha: 0, x: -10}
    //     );

    // TweenMax.from(nav, 
    //     { duration: .4, delay: 2, alpha: 0, x: -10}
    //     );

    function click(event) {
        TweenMax.to(event.target, 
            { duration: .4, delay: 0, alpha: 0, opacity: 0}
            );
        event.target.style.opacity = 0;
    }
}