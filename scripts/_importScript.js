const analyzeCSSVariables = () => {
    const definitions = {};
    const usage = {};

    function processRules(rules) {
        Array.from(rules).forEach(rule => {

            // Nếu là rule có style (CSSStyleRule)
            if (rule.style) {
                Array.from(rule.style).forEach(prop => {
                    if (prop.startsWith('--')) {
                        definitions[prop] =
                            rule.style.getPropertyValue(prop).trim();
                    }
                });

                const cssText = rule.cssText;
                const varMatches = cssText.match(/var\((--[^,)]+)/g);

                if (varMatches) {
                    varMatches.forEach(match => {
                        const varName = match.replace('var(', '').trim();
                        if (!usage[varName]) usage[varName] = new Set();
                        usage[varName].add(rule.selectorText || "Inline/Unknown");
                    });
                }
            }

            // Nếu là grouping rule (@media, @supports, @layer...)
            if (rule.cssRules) {
                processRules(rule.cssRules);
            }

            // Nếu là @import
            if (rule.styleSheet && rule.styleSheet.cssRules) {
                processRules(rule.styleSheet.cssRules);
            }
        });
    }

    Array.from(document.styleSheets).forEach(sheet => {
        try {
            if (sheet.href && !sheet.href.startsWith(location.origin)) return;
            processRules(sheet.cssRules);
        } catch (e) {
            console.warn("Không thể đọc file CSS:", sheet.href);
        }
    });

    console.group("Báo cáo Biến CSS");
    Object.keys({ ...definitions, ...usage }).forEach(varName => {
        const isDefined = !!definitions[varName];
        const selectors = usage[varName] ? Array.from(usage[varName]) : [];

        console.log(
            `%c${varName}`,
            `color:${isDefined ? '#2ecc71' : '#e74c3c'};font-weight:bold`,
            isDefined ? `(Giá trị: ${definitions[varName]})` : "(CHƯA ĐỊNH NGHĨA!)",
            "\n- Sử dụng tại:", selectors
        );
    });
    console.groupEnd();
};
const analyzeCSSClasses = () => {
    const htmlClasses = new Map();      // className -> Set(elements)
    const cssClasses = new Map();       // className -> Set(selectors)

    /* ===============================
       1. Collect classes from HTML
    =============================== */

    document.querySelectorAll('[class]').forEach(el => {
        el.classList.forEach(cls => {
            if (!htmlClasses.has(cls)) htmlClasses.set(cls, new Set());
            htmlClasses.get(cls).add(el);
        });
    });

    /* ===============================
       2. Collect classes from CSS
    =============================== */

    function extractClassesFromSelector(selector) {
        // bắt các class dạng .abc-123
        const matches = selector.match(/\.([a-zA-Z0-9_-]+)/g);
        if (!matches) return [];

        return matches.map(m => m.slice(1));
    }

    function processRules(rules) {
        Array.from(rules).forEach(rule => {

            if (rule.selectorText) {
                const classes = extractClassesFromSelector(rule.selectorText);

                classes.forEach(cls => {
                    if (!cssClasses.has(cls)) cssClasses.set(cls, new Set());
                    cssClasses.get(cls).add(rule.selectorText);
                });
            }

            if (rule.cssRules) {
                processRules(rule.cssRules);
            }

            if (rule.styleSheet && rule.styleSheet.cssRules) {
                processRules(rule.styleSheet.cssRules);
            }
        });
    }

    Array.from(document.styleSheets).forEach(sheet => {
        try {
            if (sheet.href && !sheet.href.startsWith(location.origin)) return;
            processRules(sheet.cssRules);
        } catch (e) {
            console.warn("Không thể đọc CSS:", sheet.href);
        }
    });

    /* ===============================
       3. Report
    =============================== */

    const allClasses = new Set([
        ...htmlClasses.keys(),
        ...cssClasses.keys()
    ]);

    console.group(`
        Báo cáo Class HTML ↔ CSS \n 
        🟢 Xanh: Class OK (có HTML + có CSS) \n
        🔴 Đỏ: Có trong HTML nhưng không có CSS \n
        🟡 Cam: Có CSS nhưng không dùng (dead CSS) \n
        ⚪ Xám: Edge case \n
        `);

    allClasses.forEach(cls => {
        const inHTML = htmlClasses.has(cls);
        const inCSS = cssClasses.has(cls);

        let color = "#95a5a6";
        if (inHTML && inCSS) color = "#2ecc71";   // OK
        else if (inHTML && !inCSS) color = "#e74c3c"; // HTML không có CSS
        else if (!inHTML && inCSS) color = "#f39c12"; // CSS không được dùng

        console.groupCollapsed(
            `%c.${cls}`,
            `color:${color};font-weight:bold`
        );

        console.log("Có trong HTML:", inHTML);
        console.log("Có trong CSS:", inCSS);

        if (inHTML) {
            console.log("Số element dùng:", htmlClasses.get(cls).size);
        }

        if (inCSS) {
            console.log("Được define tại selectors:");
            console.log(Array.from(cssClasses.get(cls)));
        }

        console.groupEnd();
    });

    console.groupEnd();
};

// Load HTML content from a file and insert it into a DOM element
function loadHtmlFromFile(elementQuery, filePath, fncWhenLoaded, elementQuery2) {
    const element = document.querySelector(elementQuery);

    const retryCount = 3
    if (element === null) {
        throw new Error(`Cannot find element with query ${elementQuery}`);
    }

    function loadHtml() {
        if (retryCount > 0) {
            fetch(filePath)
                .then(response => response.text())
                .then(htmlContent => {
                    if (htmlContent === null) {
                        throw new Error(`Failed to load HTML content from ${filePath}`);
                    }
                    element.innerHTML = htmlContent;
                    if (typeof fncWhenLoaded === 'function') {
                        fncWhenLoaded(elementQuery2);
                    }
                })
                .catch(error => {
                    if (retryCount > 0) {
                        setTimeout(loadHtml, 1000, retryCount - 1);
                    } else {
                        throw new Error(`Failed to load HTML content from ${filePath} after ${retryCount} attempts`, error);
                    }
                });
        } else {
            throw new Error(`Failed to load HTML content from ${filePath} after ${retryCount} attempts`);
        }
    }
    loadHtml();
}
//
// function routeController() {
//     const path = window.location.pathname;

//     // landing page
//     if (path.includes('/index.html') || path === '/') {
//         fetch('pages/landing.html')
//             .then(response => response.text())
//             .then(data => {
//                 document.querySelector('#main_placeholder').innerHTML = data;
//             })
//             .catch(error => console.error('Error loading landing page:', error));
//     }
// }

// routeController();

const initFind = () => {
    loadHtmlFromFile('#header_placeholder', 'components/header.html');
    loadHtmlFromFile('#footer_placeholder', 'components/footer.html');
    // 
    loadHtmlFromFile('#main_placeholder', 'pages/landing.html');
    // add section
    setTimeout(() => {
        headerScroll();
        loadHtmlFromFile('#hero-section_placeholder', 'components/hero.html', () => {
            trackMousePosition('#hero'); autoNextSelection({
                container: '#hero',
                itemSelector: 'input[name="hero"]',
                interval: 5000,
                type: 'radio'
            });
        }, '#hero');
        loadHtmlFromFile('#event-section_placeholder', 'components/event.html', eventQuarterText);
        loadHtmlFromFile('#about_us-section_placeholder', 'components/about_us.html');
        loadHtmlFromFile('#core_value-section_placeholder', 'components/core_value.html');
        loadHtmlFromFile('#programme-section_placeholder', 'components/programme.html', trackMousePosition, '#Programme');
        loadHtmlFromFile('#network-section_placeholder', 'components/network.html', trackMousePosition, '#Contact');
        loadHtmlFromFile('#course-section_placeholder', 'components/course.html', () => {
            sliderControl({
                listElementQuery: '#Course_content_cards',
                childElement: '.card',
                nextBtnQuery: '#Course .cards-slider-controller-next',
                prevBtnQuery: '#Course .cards-slider-controller-prev'
            });
        });
        loadHtmlFromFile('#partner-section_placeholder', 'components/partner.html');
        loadHtmlFromFile('#contact-section_placeholder', 'components/contact.html');
        loadHtmlFromFile('#quote-section_placeholder', 'components/quote.html', () => {
            autoSlide({
                listElementQuery: '#Feedback_content_cards',
                itemQuery: '.card',
                delayTime: 3000
            });
        });
        loadHtmlFromFile('#FAQ-section_placeholder', 'components/FAQ.html');
        loadHtmlFromFile('#news-section_placeholder', 'components/news.html', () => {
            sliderControl({
                listElementQuery: '#News_content_cards',
                childElement: '.card',
                nextBtnQuery: '#News .cards-slider-controller-next',
                prevBtnQuery: '#News .cards-slider-controller-prev'
            });
        });
        trackMousePosition('#Contact')
        eventQuarterText();

    }, 100);
}
initFind();

setTimeout(() => {
    analyzeCSSVariables();
    // check CSS variables

    setTimeout(() => {
        analyzeCSSClasses();
        // check CSS classes
    }, 3000);
}, 3000);