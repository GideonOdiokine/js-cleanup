const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a P";
myParagraph.classList.add("special");
console.log(myParagraph);

// document.body.appendChild(myParagraph)

const ul = document.createElement("ul");
const li = document.createElement("li");
const li5 = document.createElement("li");

li.textContent = "three";
li.insertAdjacentText('beforeend', '🙌🙌')

ul.appendChild(li)
li5.textContent ='four'
ul.insertAdjacentElement('beforeend', li5)

document.body.appendChild(ul)


// const heading = document.querySelector('h2')
// // console.dir(heading.outerHTML)
// // heading.textContent += '❤️❤️❤️'
// // heading.textContent += '❤️❤️❤️'

// heading.insertAdjacentText('beforeend', '🥰🥰🥰')
