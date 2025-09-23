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
    const html = items
        .map((item) => {
            return `<li class="shopping-item">
         <input
        value="${item.id}"
        type="checkbox"
        ${item.completed && "checked"}
      >
        <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</buttonaria-label="Remove>
      </li>`;
        })
        .join("");
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

function restoreFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem("items"));
    if (lsItems.length) {
        items = lsItems;
        list.dispatchEvent(new CustomEvent("itemsUpdated"));
    }
}

function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    items = newItems;
}

function markAsComplete(id) {
    let itemRef = items.find(item => item.id === id)
    itemRef.completed = !itemRef.completed
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);

list.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        deleteItem(parseInt(e.target.value));
        list.dispatchEvent(new CustomEvent("itemsUpdated"));
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(parseInt(e.target.value))
    }
});

restoreFromLocalStorage();
