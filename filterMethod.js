//? filter() - Creates a new array with all elements that pass the last implemented by the provided function.

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);