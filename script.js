// Select the button element
const button = document.getElementById('colorChangeButton');

// Define an array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F3FF33'];

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the background color randomly
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
