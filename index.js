const {gsap} = window;

// get the circle grid from the DOM
let circleGrid = document.querySelector(".circles-grid");

// create 121 (11x11) circle elements and attach the class
const circles = Array.from(Array(121)).map((circle) => {
    // create the circle as a div
    circle = document.createElement("div");
    // attach the css class
    circle.className = 'circle';
    return circle;
});

// add the circles to our circle grid
circles.forEach((circle) => {
    circleGrid.append(circle)
})

gsap.utils.toArray(".circle")