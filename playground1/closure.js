// function outer() {
//   const outerVar = "Hey, I am outer var!";
//   return function inner() {
//     const innerVar = "I am inner var!";
//     console.log(innerVar);
//     console.log(outerVar);
//   };
// }
// const innerFunc = outer();
// innerFunc();

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `Hello, ${myGreet} ${name}!`;
  };
}
const greetFunc = createGreeting("good morning");
console.log(greetFunc("Gideon"));
