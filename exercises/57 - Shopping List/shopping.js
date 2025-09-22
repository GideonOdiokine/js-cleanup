const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  let name = shoppingForm.querySelector(`[name="item"]`).value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    completed: false,
  };

  items.push(item);
  shoppingForm.reset();
  // fire off a custom event that will tell anyone else who cares that the items have been updated!
  //   displayItems()
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function displayItems() {
  console.log(items);
  const html = items
    .map((item) => {
      return `<li class="shopping-item">
        <input type='checkbox' />
        <span>${item.name}</span>
        <button arial-label="remove">&times;</button>
      </li>`;
    })
    .join("");
  list.innerHTML = html;
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
