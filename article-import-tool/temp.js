const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function getDataFromHTMLFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const elements = doc.querySelectorAll('a');
    return Array.from(elements).map(el => {
        // anchor is an ancestor of the element
        return {
            Name: el.querySelector('h3').textContent.trim(),
            ImgLink: el.querySelector('img') ? el.querySelector('img').getAttribute('src') : "",
            // Description: el.querySelector('.course-list') ? el.querySelector('.course-list').innerHTML.trim() : ""
            Description: el.querySelector('.text-xs') ? el.querySelector('.text-xs').textContent.trim() : "",
            SubDescription: el.getAttribute('href').trim(),
            Email: el.querySelector('h3') ? el.querySelector('h3').textContent.trim().toLowerCase().replace(/\s/g, '') + '@example.com' : "",
        };
    });
}

const filePath = path.join(__dirname, 'temp.html');
const Xa2 = getDataFromHTMLFile(filePath);
console.log(Xa2);