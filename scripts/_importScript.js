// Load HTML content from a file and insert it into a DOM element
function loadHtmlFromFile(elementQuery, filePath, fncWhenLoaded, retryCount = 3) {
    const element = document.querySelector(elementQuery);

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
                        fncWhenLoaded();
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
        loadHtmlFromFile('#hero-section_placeholder', 'components/hero.html', trackMousePosition);

    }, 100);
}
initFind();

