const item = document.querySelector(".item");

const width = 500;
const src = `https://picsum.photos/${width}`;
const myHTML = `
<div class="wrapper">
<h1>Cute puppy</h1>
<img src="${src}" alt="pup" />
</div>
`;


// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML)
document.body.appendChild(myFragment)

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add("papa")
