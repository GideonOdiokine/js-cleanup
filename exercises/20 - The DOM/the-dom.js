// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const heading = document.querySelector('h2')
// // console.dir(heading.outerHTML)
// // heading.textContent += '❤️❤️❤️'
// // heading.textContent += '❤️❤️❤️'

// heading.insertAdjacentText('beforeend', '🥰🥰🥰')

// classes!
const pic = document.querySelector(".nice");
// pic.classList.forEach(function(val){
//     console.log(val)
// })
// pic.addEventListener("click", function() {
//   pic.classList.toggle("round");
// });

pic.setAttribute("alt", 'cute pup')
pic.setAttribute('width', 100)

console.log(pic.naturalWidth)

// pic.addEventListener('load', ()=>{
// console.log(pic.naturalWidth)

// })

// console.log(pic.getAttribute('alt'))
const custom = document.querySelector('.custom')
console.log(custom.dataset)
