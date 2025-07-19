
const people = [
  { name: "Wes", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "Merica" },
  { name: "Snickers", cool: false, country: "Dog Country" },
];

people.forEach((person, index) => {
    // debugger;

    console.log(`${person.name}`)

    // console.groupCollapsed(`${person.name}`)
    // console.log(`${person.country}`)
    // console.log(`${person.cool}`)
    // console.log(`I am done`)
    // console.groupEnd(`${person.name}`)
});
// console.table(people);
// Console Methods

// Callstack, Stack Tree

// Grabbing Elements


// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
//   console.count(`Running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function doALotOfStuff(){
    console.group("Doing some stuff")
    console.log("hey Im one")
    console.warn("watch out")
    console.error("hey")
    console.groupEnd('Doing some stuff')
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet("Wes"));
  console.log(name);
}

function bootStrap(){
    console.log("Starting the app");
    go()
}

const button = document.querySelector(".bigger");
button.addEventListener("click", function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
