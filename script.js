// Shared by every page; each feature skips itself when its elements aren't on the current page.

// Cycle background images behind the homepage title
function cycleBackground(element, images, interval) {
    if (!element) return;
    let index = 0;

    function changeBackground() {
        element.style.backgroundImage = `url(${images[index]})`;
        element.style.backgroundSize = 'cover';
        index = (index + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, interval);
}

// Stack project screenshots on top of each other, then reset
function cycleStack(container, images, interval) {
    if (!container) return;
    let index = 0;

    function stackImages() {
        const stacked = images.slice(0, index + 1).map((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = container.dataset.alt || '';
            img.className = 'stacked-image';
            img.style.zIndex = i + 1;
            return img;
        });
        container.replaceChildren(...stacked);
        index = (index + 1) % images.length;
    }

    setInterval(stackImages, interval);
}

// Cycle the font of a text element
function cycleFont(element, fonts, interval) {
    if (!element) return;
    let index = 0;

    function changeFont() {
        element.style.fontFamily = fonts[index];
        index = (index + 1) % fonts.length;
    }

    setInterval(changeFont, interval);
}

document.addEventListener('DOMContentLoaded', function () {
    cycleBackground(document.getElementById('flashingText'), [
        'images/image2.jpeg',
        'images/image3.jpeg',
        'images/image4.jpeg',
        'images/image6.jpeg'
    ], 1000);

    cycleStack(document.getElementById('flashingImage'), [
        '../images/roam-home.jpeg',
        '../images/roam-login.jpeg'
    ], 2000);

    cycleStack(document.getElementById('flashingImage2'), [
        '../images/venntime-home.jpeg',
        '../images/venntime-event.jpeg'
    ], 2000);

    cycleStack(document.getElementById('flashingImage3'), [
        '../images/roomies-home.jpeg',
        '../images/roomies-cal.jpeg'
    ], 2000);

    const fonts = ['Orelega One', 'Fontdiner Swanky', 'Orbitron', 'Eater', 'Danfo', 'Imbue', 'Ewert', 'Silkscreen', 'Rye', 'Smokum', 'Almendra'];
    cycleFont(document.getElementById('homeText'), fonts, 1000);
    cycleFont(document.getElementById('homeText2'), fonts.slice().reverse(), 1000);
});
