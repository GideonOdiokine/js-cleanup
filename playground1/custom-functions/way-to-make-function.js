// function doctorize(firstName){
//     return `Dr. ${firstName}`
// }

// Anonymous function
// function (firstName){
//     return `Dr. ${firstName}`
// }

// Function Expression
// console.log(doctorize('Gideon'))
// console.log(doctorize2('Odiokine'))
// console.log(ok)
// var ok = 'sam'
// const doctorize = function (firstName){
//     return `Dr. ${firstName}`
// }

// function doctorize2(name){
//     return `My name is ${name}`
// }

// Arrow Functions
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

// const inchToCM = (inches) => inches * 2.54;
// const add2 = (a, b = 3) => a + b;

// function makeBaby(first, last){
//     const baby = {
//         name: `${first} ${last}`,
//         age: 10
//     }
//     return baby;
// }

// const makeBaby = (first, last) => {
//   return {
//     name: `${first} ${last}`,
//     age: 10,
//   };
// };
const makeBaby = (first, last) => ({ name: `${first} ${last}`, age: 10 });

// IIFE
// Immediately Invoked Function Expression
(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!
const gid = {
  name: "Gideon Odiokine",
  //   Method!
  sayHi: function() {
    return "Hey Gideon";
  },
  //   Short hand method
  yellHi() {
    console.log("HIIIIIIIIIIIIIIII");
  },
  //   Arrow function
  wisperHi: () => {
    console.log("Wisper hiiiiiiiiii");
  },
};
// console.log(gid.yellHi());

// Callback function
// click callback
const button = document.querySelector(".clickMe");
// function handleClick(){
//     console.log("Hello!!!!!!!!!!")
// }
button.addEventListener("click", function() {
  console.log("Nice Job");
});

// Timer callback
setTimeout(() => {
  console.log("Hello time to eat");
}, 1000);
