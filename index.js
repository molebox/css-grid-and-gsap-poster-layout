const {gsap} = window;

let TL = gsap.timeline({delay: 0.5});

// get the circle grid from the DOM
let circleGrid = document.querySelector(".circles-grid");

// the indexes of the circles to be displayed as white
const whiteCirclesIndices = [12,23,24,34,35,36,45,46,47,48,56,57,58,59,60,67,68,69,70,71,72,78,,79,80,81,82,83,84,,89,,90,91,92,93,94,95,96,100,101,102,103,104,105,106,107,108];

// create 121 (11x11) circle elements and attach the circle class
const circles = Array.from(Array(121)).map((circle) => {
    // create the circle as a div
    circle = document.createElement("div");
    // attach the css class
    circle.className = 'circle';
    return circle;
});

// add the circles to our circle grid
circles.forEach((circle, index) => {
    // loop over the indexes that should be white
    for (const whiteIndex of whiteCirclesIndices) {
        // if the circles index matches the white index then add the new css class to it. 
        if (whiteIndex === index) {
            circle.classList.add('white-circle')
        }
    }
    // add the circle to the grid
    circleGrid.append(circle)
})

// animate the intro text down from the top
TL.from(".info-section", {
    y: window.innerHeight * -1,
    duration: 1.5,
    ease: 'elastic.out(1, 1)'
})

// animate the title in from the left
TL.from(".title", {
    x: window.innerWidth * -1,
    duration: 1.5,
    ease: 'elastic.out(1, 1)'
}, "-=1");

// animate the subtitle in from the right
TL.from(".subtitle", {
    x: window.innerWidth * 1,
    duration: 1.5,
    ease: 'elastic.out(1, 1)'
}, "-=1")

// gentle opacity animation of the grid background
TL.from(".circles-grid", {
    opacity: 0,
    duration: 2,
}, "-=1") // "-=1" will overlap the end of the last tween by 1 second. It makes them appear smoother

// stagger and animate in the circles from the bottom left of the poster
TL.from(".circle", {
    y: window.innerHeight * 1,
    x: window.innerWidth * -1,
    duration: 1.2,
    ease: "bounce.out",
    stagger: {
        grid: [11, 11],
        from: 'random',
        amount: 1.5
    }
}, "-=1")
