const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function getDataFromHTMLFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom  = new JSDOM(html);
    const doc  = dom.window.document;

    const elements = doc.querySelectorAll('a');
    return Array.from(elements).map(el => {
        // name is inside a sibling <h3> of the same wrapper div
        const nameEl = el.querySelector('h3');
        // anchor is an ancestor of the element
        return {
            Name: nameEl ? nameEl.textContent.trim() : '',
            LinkedIn: el.getAttribute('href'),
            Position: el.querySelector('.a111').textContent.trim(),
            ImgLink: el.querySelector('img') ? el.querySelector('img').getAttribute('src') : undefined
        };
    });
}

const filePath = path.join(__dirname, 'temp.html');
const Xa2 = getDataFromHTMLFile(filePath);
console.log(Xa2);