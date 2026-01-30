function trackMousePosition() {
    const heroElement = document.querySelector('#hero');

    let scrollOffsetX = 0;
    let scrollOffsetY = 0;

    window.addEventListener('scroll', () => {
        scrollOffsetX = window.scrollX;
        scrollOffsetY = window.scrollY;
    });

    heroElement.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const normalizedX = (clientX / window.innerWidth) * 100 + scrollOffsetX / window.innerWidth * 100;
        const normalizedY = (clientY / window.innerHeight) * 100 + scrollOffsetY / window.innerHeight * 100;

        // Update spotlight
        heroElement.style.setProperty('--mouse-x', `${normalizedX}%`);
        heroElement.style.setProperty('--mouse-y', `${normalizedY}%`);

        // Parallax effect for background slides
        const parallaxOffsetX = (clientX - window.innerWidth / 2 + scrollOffsetX) / 50;
        const parallaxOffsetY = (clientY - window.innerHeight / 2 + scrollOffsetY) / 50;
        const backgroundSlidesElement = document.querySelector('.bg-slides');
        backgroundSlidesElement.style.transform = `translate(${parallaxOffsetX}px, ${parallaxOffsetY}px) scale(1.05)`;

        // Add value to text
        const textElements = document.querySelector('#hero .tech-coords-value')
        textElements.innerHTML = `OFFSET: X: ${normalizedX.toFixed(2)}, Y: ${normalizedY.toFixed(2)}`;
    });
}

function headerScroll() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
}
