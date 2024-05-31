
window.onload = function() {
    const textElement = document.getElementById('flashingText');
    const images = [
        'url(images/image2.jpeg)',
        'url(images/image3.jpeg)',
        'url(images/image4.jpeg)',
        'url(images/image6.jpeg)'
    ];
    let currentIndex = 0;

    function changeBackground() {
        textElement.style.backgroundImage = images[currentIndex];
        textElement.style.backgroundSize = 'cover';
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Call changeBackground every second
    setInterval(changeBackground, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
    const scrollingColumn = document.getElementById('info');
    const contentDiv = document.getElementById('content');
    let page = 1;

    function checkScroll() {
        if (scrollingColumn.scrollTop + scrollingColumn.clientHeight >= scrollingColumn.scrollHeight) {
            loadMoreContent();
        }
    }

    // Event listener for scroll
    scrollingColumn.addEventListener('scroll', checkScroll);
});
