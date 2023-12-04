// Get the image element
const image = document.getElementById('Food1');

// Add event listeners for mouseenter and mouseleave
image.addEventListener('mouseenter', function() {
    // Change style on mouseenter (hover)
    image.style.opacity = '0.7'; // For example, reducing opacity
});

image.addEventListener('mouseleave', function() {
    // Change style on mouseleave (hover out)
    image.style.opacity = '1'; // Reset opacity back to normal
});

window.onload = function() {
    var element = document.getElementById('Food-name');

    element.onmouseover = function() {
      element.style.backgroundColor = 'red';
    };

    element.onmouseout = function() {
      element.style.backgroundColor = 'blue';
    }}