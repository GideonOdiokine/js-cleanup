const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("Hello");
}
butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", handleClick);

// butts.removeEventListener('click', handleClick)

// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");
let pap = buyButtons.item(4)
console.log(pap)

buyButtons.forEach((button) => {
  button.addEventListener("click", function() {
    console.log("Papa me!!!!");
  });
});
