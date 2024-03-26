//the code

//function called divide
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

//arrow function 'square'
const square = (x) => x * x;

//arrow function called 'add'
const add = (a, b) => {
    return a + b;
  }
  