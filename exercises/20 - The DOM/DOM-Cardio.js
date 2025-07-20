// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement("img");
// set the source to an image
img.setAttribute("src", "https://picsum.photos/500");
// set the width to 250
img.setAttribute("width", "200");
// add a class of cute
img.classList.add("oute");
// add an alt of Cute Puppy
img.alt = "Cute puppy";
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
  <div class="myDiv">
    <p>I am the first paragraph </p>
    <p>I am the second paragraph </p>
  </div>
`;
div.insertAdjacentHTML("afterbegin", myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph
const myDiv = div.querySelector(".myDiv");
myDiv.children[0].remove();
myDiv.children[0].classList.add("warning");

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>

    </div>
  `;
  return html;
}
// have that function return html that looks like this:
{
  /* <div class="playerCard">
    <h2>NAME — AGE</h2>
    <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  </div> */
}

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");

// Have that function make 4 cards
let cardsHTML = generatePlayerCard("gid", 12, 120);
cardsHTML += generatePlayerCard("scott", 12, 120);
cardsHTML += generatePlayerCard("kate", 12, 120);
cardsHTML += generatePlayerCard("Bobo", 12, 120);
// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
const wrapper = document.querySelector(".wrapper");
wrapper.insertAdjacentElement("beforebegin", cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll(".delete");
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest(".playerCard").remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener("click", deleteCard));
