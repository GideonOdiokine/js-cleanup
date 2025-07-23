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
// let pap = buyButtons.item(4)
// console.log(pap)

// buyButtons.forEach((button) => {
//   button.addEventListener("click", function() {
//     console.log(button);
//   });
// });

function handleBuyButtonClick(e) {
  const button = e.target;
  //   console.log(e.currentTarget);
  //   console.log(e.target.dataset.price);
  //   console.log("You are buying it");

  //   Stop this event from bubbling up
  e.stopPropagation();
  console.log(e.currentTarget)
  console.log(e.target)
  console.log(e.target === e.currentTarget)
}

buyButtons.forEach((button) => {
  button.addEventListener("click", handleBuyButtonClick);
});
