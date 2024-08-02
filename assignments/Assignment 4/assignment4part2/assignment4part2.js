console.log("Hello!");

// Constants for image filenames and alternative text
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
  'pic1.jpg': 'Zoomed in blue human eye',
  'pic2.jpg': 'Wave',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'Section of a wall',
  'pic5.jpg': 'Moth on a leaf'
};

// Getting references to the required DOM elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Loop through the images and create thumbnail images
imageFilenames.forEach((filename) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);
});

// Event listener for thumbnail images
thumbBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const src = e.target.getAttribute('src');
    const alt = e.target.getAttribute('alt');
    displayedImage.setAttribute('src', src);
    displayedImage.setAttribute('alt', alt);
  }
});

// Event listener for the darken/lighten button
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
