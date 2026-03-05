const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function getDataFromHTMLFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom  = new JSDOM(html);
    const doc  = dom.window.document;

    const elements = doc.querySelectorAll('.course-item-11');
    return Array.from(elements).map(el => {
        // anchor is an ancestor of the element
        return {
            Name: el.querySelector('h3').textContent.trim(),
            ImgLink: el.querySelector('img') ? el.querySelector('img').getAttribute('src') : "",
            Description: el.querySelector('.course-list') ? el.querySelector('.course-list').innerHTML.trim() : ""
        };
    });
}

const filePath = path.join(__dirname, 'temp.html');
const Xa2 = getDataFromHTMLFile(filePath);
console.log(Xa2);