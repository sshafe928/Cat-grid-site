// Array of image URLs
const imageUrls = [
    "./cat/rotating.jpg",
    "./cat/rotating2.jpg",
    "./cat/rotating3.jpg",
    "./cat/rotating4.jpg",
    "./cat/rotating5.jpg"

];
const rotatingImage = document.getElementById('rotating-image');


let currentIndex = 0;

// Function to rotate images
function rotateImages() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    rotatingImage.src = imageUrls[currentIndex];
}

// Interval for the rotation
let rotationInterval = setInterval(rotateImages, 2000); 

// Pause rotation 
rotatingImage.addEventListener('mouseenter', () => {
    clearInterval(rotationInterval);
});

// Resume rotation 
rotatingImage.addEventListener('mouseleave', () => {
    rotationInterval = setInterval(rotateImages, 2000); 
});