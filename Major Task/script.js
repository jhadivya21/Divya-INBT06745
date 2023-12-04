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

    const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    ratingValue.textContent = `You rated ${value} stars!`;
    removeActiveStars();
    setActiveStars(value);
  });
  
  star.addEventListener('mouseover', () => {
    const value = star.getAttribute('data-value');
    highlightStars(value);
  });

  star.addEventListener('mouseleave', () => {
    removeActiveStars();
  });
});

function setActiveStars(value) {
  for (let i = 0; i < value; i++) {
    stars[i].classList.add('active');
  }
}

function highlightStars(value) {
  for (let i = 0; i < value; i++) {
    stars[i].classList.add('active');
  }
}

function removeActiveStars() {
  stars.forEach(star => {
    star.classList.remove('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .star');
  
    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        this.parentNode.setAttribute('data-rating', rating);
        // You can perform further actions here, like sending the rating to a server.
      });
    });
  });
  