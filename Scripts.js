function selectImage(element) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => item.classList.remove('selected'));

    element.classList.add('selected');

    const largeImage = document.getElementById('largeImage');
    const imgSrc = element.querySelector('img').src;
    largeImage.src = imgSrc;
}
