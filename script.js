
window.onload = function() {
    // Handle flashing background images
    const textElement = document.getElementById('flashingText');
    const backgroundImages = [
        'url(images/image2.jpeg)',
        'url(images/image3.jpeg)',
        'url(images/image4.jpeg)',
        'url(images/image6.jpeg)'
    ];
    
    let bgCurrentIndex = 0;

    function changeBackground() {
        textElement.style.backgroundImage = backgroundImages[bgCurrentIndex];
        textElement.style.backgroundSize = 'cover';
        bgCurrentIndex = (bgCurrentIndex + 1) % backgroundImages.length;
    }

    // Call changeBackground every second
    setInterval(changeBackground, 1000);

    // Handle stacking images
    const portfolioElement = document.getElementById('flashingImage');
    const portImages = [
        '../images/roam-home.jpeg',
        '../images/roam-login.jpeg'
    ];

    let portCurrentIndex = 0;

    // function getRandomRotation() {
    //     return Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
    // }

    function stackImages() {
        // Clear previous images to avoid infinite stacking
        // portfolioElement.innerHTML = '';
        while (portfolioElement.childNodes.length > 1) {
            portfolioElement.removeChild(portfolioElement.lastChild);
        }

        for (let i = 0; i <= portCurrentIndex; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = portImages[i % portImages.length];
            imgElement.className = 'stacked-image';
            imgElement.style.zIndex = i + 1;
            imgElement.style.position = 'absolute';
            // imgElement.style.transform = `rotate(${getRandomRotation()}deg) translate(${i * 10}px, ${i * 10}px)`;
            // imgElement.style.transform = `rotate(${portCurrentIndex % 2 === 0 ? -5 : 5}deg) translate(${portCurrentIndex * 10}px, ${portCurrentIndex * 10}px)`;
            portfolioElement.appendChild(imgElement);
        }

        portCurrentIndex = (portCurrentIndex + 1) % portImages.length;
    }

    // Call stackImages every second to stack images
    setInterval(stackImages, 2000);

     // Handle stacking images for the second set
     const portfolioElement2 = document.getElementById('flashingImage2');
     const portImages2 = [
        '../images/venntime-home.jpeg',
         '../images/venntime-event.jpeg',
     ];
 
     let portCurrentIndex2 = 0;
 
     function stackImages2() {
         // Clear previous images to avoid infinite stacking
        //  portfolioElement2.innerHTML = '';
        while (portfolioElement2.childNodes.length > 1) {
            portfolioElement2.removeChild(portfolioElement2.lastChild);
        }

         for (let i = 0; i <= portCurrentIndex2; i++) {
             const imgElement = document.createElement('img');
             imgElement.src = portImages2[i % portImages2.length];
             imgElement.className = 'stacked-image';
             imgElement.style.zIndex = i + 1;
             imgElement.style.position = 'absolute';
            //  imgElement.style.transform = `rotate(${getRandomRotation()}deg) translate(${i * 10}px, ${i * 10}px)`;
            // imgElement.style.transform = `rotate(${portCurrentIndex2 % 2 === 0 ? -5 : 5}deg) translate(${portCurrentIndex2 * 10}px, ${portCurrentIndex2 * 10}px)`;
            portfolioElement2.appendChild(imgElement);
         }
 
         portCurrentIndex2 = (portCurrentIndex2 + 1) % portImages2.length;
     }
 
     // Call stackImages2 every second to stack images
     setInterval(stackImages2, 2000);

     // Handle stacking images for the second set
     const portfolioElement3 = document.getElementById('flashingImage3');
     const portImages3 = [
        '../images/roomies-home.jpeg',
         '../images/roomies-cal.jpeg',
     ];
 
     let portCurrentIndex3 = 0;
 
     function stackImages3() {
         // Clear previous images to avoid infinite stacking
        //  portfolioElement2.innerHTML = '';
        while (portfolioElement3.childNodes.length > 1) {
            portfolioElement3.removeChild(portfolioElement3.lastChild);
        }

         for (let i = 0; i <= portCurrentIndex3; i++) {
             const imgElement = document.createElement('img');
             imgElement.src = portImages3[i % portImages3.length];
             imgElement.className = 'stacked-image';
             imgElement.style.zIndex = i + 1;
             imgElement.style.position = 'absolute';
            //  imgElement.style.transform = `rotate(${getRandomRotation()}deg) translate(${i * 10}px, ${i * 10}px)`;
            // imgElement.style.transform = `rotate(${portCurrentIndex2 % 2 === 0 ? -5 : 5}deg) translate(${portCurrentIndex2 * 10}px, ${portCurrentIndex2 * 10}px)`;
            portfolioElement3.appendChild(imgElement);
         }
 
         portCurrentIndex3 = (portCurrentIndex3 + 1) % portImages3.length;
     }
 
     // Call stackImages2 every second to stack images
     setInterval(stackImages3, 2000);


     // code to cycle fonts on homepage body text
     const element = document.getElementById('homeText');
     const fonts = ['Orelega One', 'Fontdiner Swanky', 'Orbitron', 'Eater', 'Danfo', 'Imbue', 'Ewert', 'Silkscreen', 'Rye', 'Smokum', 'Almendra'];
     let currentFontIndex = 0;
 
     function changeFont() {
         element.style.fontFamily = fonts[currentFontIndex];
         currentFontIndex = (currentFontIndex + 1) % fonts.length;
     }
 
     setInterval(changeFont, 1000);

     // Second text element with reverse order fonts
    const homeTextElement = document.getElementById('homeText2');
    const fonts2 = ['Almendra', 'Smokum', 'Rye', 'Silkscreen', 'Ewert', 'Imbue', 'Danfo', 'Eater', 'Orbitron', 'Fontdiner Swanky', 'Orelega One'];
    let currentFontIndex2 = 0;

    function changeFont2() {
        homeTextElement.style.fontFamily = fonts2[currentFontIndex2];
        currentFontIndex2 = (currentFontIndex2 + 1) % fonts2.length;
    }

    setInterval(changeFont2, 1000);

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
