// scripts.js

function selectImage(element) {
    // Get all gallery items and remove 'selected' class
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => item.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    element.classList.add('selected');

    // Update the large image
    const largeImage = document.getElementById('largeImage');
    const imgSrc = element.querySelector('img').src;
    largeImage.src = imgSrc;
}
