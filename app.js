// Make a drawing of your app. Simple "wireframes"
// -- Input (type name here)
// -- Button (initiate change/input)
// -- Div (display words inputed)

// Once you have a drawing, name the HTML elements you'll need to realize your vision
// For each HTML element ask: Why do I need this?
// Ask which of out HTML elements are hard coded, and which are dynamically generated?
// Once we know why we need each element, think about how to implement the "Why" as a "How"

// Is there some state we need to initialize?
// Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
// Think about how to validate each of your steps
// Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
// Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
// Consider what features depend on what other features. Use this dependency logic to figure out what order to complete tasks.

const nameInputElem = document.getElementById('name-placeholder');
const nameButtonElem = document.getElementById('button-name');
const namePlaceElem = document.getElementById('name-place');

// console.log(nameInputElem);
// console.log('nameButtonElem');
// console.log('namePlaceElem');

nameButtonElem.addEventListener('click', () => {
    const wordsUserTypes = nameInputElem.value;
    // console.log(wordsUserTypes);
    // console.log('nameButtonElem');
    namePlaceElem.textContent = wordsUserTypes;
});

const yellowChange = document.getElementById('yellow');
const redChange = document.getElementById('red');
const blueChange = document.getElementById('blue');
const greenChange = document.getElementById('green');

// console.log(yellowChange);
// console.log(redChange);
// console.log(blueChange);
// console.log(greenChange);