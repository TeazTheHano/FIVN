function trackMousePosition(elementQuery) {
    const trackElement = document.querySelector(elementQuery);
    if (!trackElement) return;

    const reset = () => {
        trackElement.style.setProperty('--mouse-x', '50%');
        trackElement.style.setProperty('--mouse-y', '50%');

        const bg = trackElement.querySelector('.bg-slides');
        if (bg) {
            bg.style.transform = 'translate(0, 0) scale(1.05)';
        }
    };

    trackElement.addEventListener('mousemove', (event) => {
        const rect = trackElement.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const normalizedX = (x / rect.width) * 100;
        const normalizedY = (y / rect.height) * 100;

        trackElement.style.setProperty('--mouse-x', `${normalizedX}%`);
        trackElement.style.setProperty('--mouse-y', `${normalizedY}%`);

        // Parallax (viewport-based cho cảm giác tự nhiên)
        const parallaxOffsetX = (event.clientX - window.innerWidth / 2) / 50;
        const parallaxOffsetY = (event.clientY - window.innerHeight / 2) / 50;

        const bg = trackElement.querySelector('.bg-slides');
        if (bg) {
            bg.style.transform =
                `translate(${parallaxOffsetX}px, ${parallaxOffsetY}px) scale(1.05)`;
        }

        // Debug text (optional)
        const text = trackElement.querySelector('.tech-coords-value');
        if (text) {
            text.innerHTML =
                `X: ${normalizedX.toFixed(2)}% | Y: ${normalizedY.toFixed(2)}%`;
        }
    });

    // 👇 RESET KHI RỜI CHUỘT
    trackElement.addEventListener('mouseleave', reset);

    // optional: reset khi vừa load
    reset();
}


function headerScroll() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
}


function eventQuarterText() {
    const eventlist = document.querySelectorAll('#Event_content_cards .card');

    eventlist.forEach(event => {
        const date = event.querySelector('.bottom .time > div:first-of-type p').innerHTML;
        const quadter = date.split(' ')[1];

        const target = event.querySelector('.event_content_cards_mark')
        target.innerHTML = quadter
    });
}

function sliderControl(listElementQuery, childElement, nextBtnQuery, prevBtnQuery) {
    const slider = document.querySelector(listElementQuery)
    const nextBtn = document.querySelector(nextBtnQuery)
    const prevBtn = document.querySelector(prevBtnQuery)
    const itemWidth = document.querySelector(childElement).offsetWidth
    const sliderGap = getComputedStyle(slider).gap

    console.log(slider, nextBtn, prevBtn, itemWidth);


    if (slider && nextBtn && prevBtn && itemWidth && sliderGap) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: itemWidth + parseFloat(sliderGap), behavior: 'smooth' })
        })
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -(itemWidth + parseFloat(sliderGap)), behavior: 'smooth' })
        })

    }
}

sliderControl('#Course_content_cards', '#Course_content_cards .card', '#Course_content_cate_list .slider-controller-next', '#Course_content_cate_list .slider-controller-prev');
trackMousePosition('#Programme')
trackMousePosition('#Contact')
trackMousePosition('#hero')
eventQuarterText();
headerScroll();