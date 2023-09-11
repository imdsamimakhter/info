// Create a document object
const doc = document.implementation.createHTMLDocument('My Styled Webpage');

// Create a head element and add a title
const head = doc.createElement('head');
const title = doc.createElement('title');
title.textContent = 'My Styled Webpage';
head.appendChild(title);

// Create a style element and add CSS rules
const style = doc.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h1 {
    color: #333;
    padding: 20px;
  }

  p {
    color: #666;
  }
`;

// Create a body element and add content
const body = doc.createElement('body');
const heading = doc.createElement('h1');
heading.textContent = 'Welcome to My Styled Webpage';
const paragraph = doc.createElement('p');
paragraph.textContent = 'This webpage was generated using JavaScript without HTML or PHP.';

// Add elements to the body
body.appendChild(heading);
body.appendChild(paragraph);

// Append head and body to the document
head.appendChild(style); // Add the style element to the head
doc.documentElement.appendChild(head);
doc.documentElement.appendChild(body);

// Convert the generated HTML to a string
const htmlString = new XMLSerializer().serializeToString(doc);

// Display the generated HTML
console.log(htmlString);

// You can also display it in a new window or an iframe
const newWindow = window.open();
newWindow.document.write(htmlString);
