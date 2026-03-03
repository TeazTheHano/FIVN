const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function getDataFromHTMLFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom  = new JSDOM(html);
    const doc  = dom.window.document;

    const elements = doc.querySelectorAll('.a111');
    return Array.from(elements).map(el => {
        // name is inside a sibling <h3> of the same wrapper div
        const nameEl = el.parentElement.querySelector('h3');
        // anchor is an ancestor of the element
        const linkEl = el.closest('a');
        return {
            Name: nameEl ? nameEl.textContent.trim() : '',
            LinkedIn: linkEl ? linkEl.getAttribute('href') : undefined,
            Position: el.textContent.trim()
        };
    });
}

const filePath = path.join(__dirname, 'temp.html');
const Xa2 = getDataFromHTMLFile(filePath);
console.log(Xa2);