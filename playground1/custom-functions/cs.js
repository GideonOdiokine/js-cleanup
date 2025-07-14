function calculateBill(billAmount, taxRate) {
  console.log({ billAmount, taxRate });
  // this is the function body;
  const total = billAmount * 1 + taxRate;
  return total;
}

const myTotal = calculateBill(100, 0.13);
console.log(`my total is ${myTotal}`);

// function sayHiTo(firstName){
//     return `Hello ${firstName}`
// }

// const greeting = sayHiTo("Gid");
// console.log(greeting)

// const myTotal3= calculateBill(100, 0.15)
// console.log(myTotal3)

// function doctorize(name="samuel") {
//   return `DR. ${name}`;
// }

// function yell(name = "okon") {
//   return `Hey ${name.toUpperCase()}`;
// }
// console.log(yell(doctorize()));
