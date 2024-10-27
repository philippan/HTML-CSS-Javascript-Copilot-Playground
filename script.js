document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.related-recipes tr');

    rows.forEach(row => {
        row.addEventListener('mouseover', function() {
            row.style.backgroundColor = '#333'; // Darker color on hover
        });

        row.addEventListener('mouseout', function() {
            row.style.backgroundColor = ''; // Reset to original color
        });
    });

    // Hide all images in the image-carousel except the first two
    const images = document.querySelectorAll('.image-carousel img');
    let currentIndex = 0;

    function updateImageVisibility() {
        images.forEach((img, index) => {
            if (index >= currentIndex && index < currentIndex + 2) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    updateImageVisibility();

    const rightButton = document.querySelector('.image-carousel .right-button');
    rightButton.addEventListener('click', function() {
        if (currentIndex + 2 < images.length) {
            currentIndex += 2;
            updateImageVisibility();
        }
    });

    const leftButton = document.querySelector('.image-carousel .left-button');
    leftButton.addEventListener('click', function() {
        if (currentIndex - 2 >= 0) {
            currentIndex -= 2;
            updateImageVisibility();
        }
    });
});