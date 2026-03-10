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

function autoNextSelection({
    container,
    itemSelector,
    interval = 5000,
    type = 'radio' // 'radio' | 'select'
}) {
    const root = document.querySelector(container);
    if (!root) return;

    let currentIndex = 0;
    let timerId;

    function getItems() {
        return document.querySelectorAll(itemSelector);
    }

    function autoSelect() {
        const items = getItems();
        if (!items.length) return;

        const nextIndex = (currentIndex + 1) % items.length;

        if (type === 'radio') {
            items[nextIndex].checked = true;
        } else if (type === 'select') {
            root.selectedIndex = nextIndex;
        }

        currentIndex = nextIndex;
    }

    function restartTimer() {
        clearInterval(timerId);
        timerId = setInterval(autoSelect, interval);
    }

    restartTimer();

    document.addEventListener('change', (e) => {
        if (e.target.matches(itemSelector)) {
            restartTimer();
        }
    });
}


function headerScroll() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
}


function eventQuarterText() {
    const eventlist = document.querySelectorAll('#Event_content_cards .card');

    function quarterText(event, startDateTime) {
        if (!startDateTime) return;

        const data = startDateTime;
        const quater = data.split(' ')[1];

        const target = event.querySelector('.event_content_cards_mark')
        if (target) target.innerHTML = quater
    }

    eventlist.forEach(event => {
        const startDateTimeUtc = event.querySelector('.bottom .time .startDateTimeUtc');
        const endDateTimeUtc = event.querySelector('.bottom .time .endDateTimeUtc');
        const dateP = event.querySelector('.bottom .time .card-date');
        const timeP = event.querySelector('.bottom .time .card-time');
        const eventSchedules = event.querySelector('.event-schedule');

        if (!startDateTimeUtc || !endDateTimeUtc || !dateP || !timeP) return;

        try {
            const startDateTime = new Date(startDateTimeUtc.innerText);
            const endDateTime = new Date(endDateTimeUtc.innerText);

            const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
            const optionsTime = { hour: '2-digit', minute: '2-digit' };


            let startdateText = startDateTime.toLocaleDateString('en-GB', optionsDate).toUpperCase();
            let enddateText = endDateTime.toLocaleDateString('en-GB', optionsDate).toUpperCase();
            let timeText = `${startDateTime.toLocaleTimeString('en-GB', optionsTime)} - ${endDateTime.toLocaleTimeString('en-GB', optionsTime)}`;

            dateP.innerText = startdateText === enddateText ? startdateText : `${startdateText} - ${enddateText}`;
            timeP.innerText = timeText;

            quarterText(event, startdateText);

        } catch (error) {
            console.error(`Error in eventQuarterText: ${error}`);
        }
    });
}

function sliderControl({
    listElementQuery,
    childElement,
    nextBtnQuery,
    prevBtnQuery,
    filtersQuery = null
}) {
    const slider = document.querySelector(listElementQuery)
    if (!slider) return

    const nextBtn = document.querySelector(nextBtnQuery)
    const prevBtn = document.querySelector(prevBtnQuery)

    if (!nextBtn || !prevBtn) return

    function getVisibleItems() {
        return [...slider.querySelectorAll(childElement)]
            .filter(el => getComputedStyle(el).display !== 'none')
    }

    function getStep() {
        const visible = getVisibleItems()
        if (visible.length < 2) return 0

        return visible[1].offsetLeft - visible[0].offsetLeft
    }

    function scrollNext(direction = 1) {
        const step = getStep()
        if (!step) return

        slider.scrollBy({
            left: step * direction,
            behavior: 'smooth'
        })
    }

    nextBtn.addEventListener('click', () => scrollNext(1))
    prevBtn.addEventListener('click', () => scrollNext(-1))

    slider.addEventListener('wheel', event => {
        const step = getStep()
        if (!step) return

        const isDown = event.deltaY > 0
        const isUp = event.deltaY < 0

        const isAtStart = slider.scrollLeft <= 0
        const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1

        if ((isUp && isAtStart) || (isDown && isAtEnd)) {
            return
        }

        event.preventDefault()
        scrollNext(isDown ? 1 : -1)

    }, { passive: false })

    // ✅ Reset scroll khi filter thay đổi
    if (filtersQuery) {
        const filters = document.querySelectorAll(filtersQuery)

        filters.forEach(filter => {
            filter.addEventListener('change', () => {
                requestAnimationFrame(() => {
                    slider.scrollTo({ left: 0, behavior: 'smooth' })
                })
            })
        })
    }
}

function autoSlide({
    listElementQuery,
    itemQuery,
    delayTime = 3000
}) {
    const slider = document.querySelector(listElementQuery)
    if (!slider) return

    const items = slider.querySelectorAll(itemQuery)
    if (!items.length) return

    const item = items[0]
    const gap = parseFloat(getComputedStyle(slider).columnGap || 0)
    const step = item.offsetWidth + gap

    let currentIndex = 0
    let timerId

    function getVisibleCount() {
        return Math.round(slider.clientWidth / step)
    }

    function getMaxIndex() {
        return items.length - getVisibleCount()
    }

    function slideNext() {
        const maxIndex = getMaxIndex()

        if (currentIndex >= maxIndex) {
            currentIndex = 0
        } else {
            currentIndex++
        }

        slider.scrollTo({
            left: currentIndex * step,
            behavior: 'smooth'
        })
    }

    function start() {
        timerId = setInterval(slideNext, delayTime)
    }

    function stop() {
        clearInterval(timerId)
    }

    start()

    slider.addEventListener('mouseenter', stop)
    slider.addEventListener('mouseleave', start)

    window.addEventListener('resize', () => {
        slider.scrollTo({ left: currentIndex * step })
    })
}

function PagingContent({
    containerQuery,
    itemsQuery,
    paginationContainerQuery,
    itemsPerPage = 6,
    filtersQuery = null,
    autoNextTime = 0,
}) {
    const container = document.querySelector(containerQuery)
    const paginationContainer = document.querySelector(paginationContainerQuery)

    if (!container || !paginationContainer) return

    const allItems = Array.from(container.querySelectorAll(itemsQuery))
    if (!allItems.length) return

    let filteredItems = [...allItems]
    let currentPage = 1

    function renderPage() {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
        const start = (currentPage - 1) * itemsPerPage
        const end = start + itemsPerPage

        // Ẩn toàn bộ
        allItems.forEach(item => item.classList.add('d-none'))

        // Hiển thị items của page hiện tại
        filteredItems.slice(start, end).forEach(item => {
            item.classList.remove('d-none')
        })

        // Render pagination
        paginationContainer.innerHTML = ''

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button')
            btn.innerText = i
            btn.classList.toggle('active', i === currentPage)

            btn.classList.add('button-chip', 'button-rounded')
            btn.style.lineHeight = '1'
            btn.addEventListener('click', () => {
                currentPage = i
                renderPage()
            })

            paginationContainer.appendChild(btn)
        }
    }

    // AUTO NEXT
    function autoNext() {
        setTimeout(() => {
            if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
                currentPage++
            } else {
                currentPage = 1
            }

            renderPage()
            autoNext()
        }, autoNextTime)
    }

    // FILTER
    if (filtersQuery) {
        const filters = document.querySelectorAll(filtersQuery)

        filters.forEach(filter => {
            filter.addEventListener('change', () => {
                const value = filter.value?.trim().toLowerCase()

                if (!value || value === 'all') {
                    filteredItems = [...allItems]
                } else {
                    filteredItems = allItems.filter(item => {
                        const cate = (item.getAttribute('course-cate') || '')
                            .trim()
                            .toLowerCase()

                        return cate === value
                    })
                }

                currentPage = 1
                renderPage()
            })
        })
    }

    renderPage()
    if (autoNextTime > 0) {
        autoNext()
    }
}

// CALLING FUNCTIONs
headerScroll();

function landingPageCall() {
    sliderControl({
        listElementQuery: '#Course_content_cards',
        childElement: '.card',
        nextBtnQuery: '#Course .cards-slider-controller-next',
        prevBtnQuery: '#Course .cards-slider-controller-prev',
        filtersQuery: 'input[name="Course_content_cate"]'
    });
    sliderControl({
        listElementQuery: '#News_content_cards',
        childElement: '.card',
        nextBtnQuery: '#News .cards-slider-controller-next',
        prevBtnQuery: '#News .cards-slider-controller-prev'
    });

    trackMousePosition('#Programme')
    trackMousePosition('#Contact')
    trackMousePosition('#hero')
    eventQuarterText();
    autoNextSelection({
        container: '#hero',
        itemSelector: 'input[name="hero"]',
        interval: 5000,
        type: 'radio'
    });

    autoSlide({
        listElementQuery: '#Feedback_content_cards',
        itemQuery: '.card',
        delayTime: 3000
    });
    PagingContent({
        containerQuery: '#Partner_content_cards',
        itemsQuery: '.card',
        paginationContainerQuery: '#Partner_pagination',
        itemsPerPage: 10,
        autoNextTime: 5000,
    });
}

function courseListPageCall() {
    PagingContent({
        containerQuery: '#Course_content_cards',
        itemsQuery: '.card',
        paginationContainerQuery: '#Course_pagination',
        itemsPerPage: 6,
        filtersQuery: 'input[name="Course_content_cate"]'
    })
}

switch (true) {
    case window.location.pathname.includes('/pages/danh-sach-khoa-hoc'):
        console.log('adsfasdf');
        courseListPageCall();
        break;
    default:
        landingPageCall();
        break;
}