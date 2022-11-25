/* const arr = [1, 2, 3, 4];
const arr2 = arr.map((item) => item * item);
const arr3 = arr2.reduce(
  (prevValue, currentValue, index, array) => prevValue + currentValue
);

console.log("Original array", arr);
console.log("Map()", arr2);
console.log("reduce()", arr3);
 */
// using bind method

const person = {
  name: "Max",
  age: 25,
};

const printName = () => console.log(`Name: ${this.name}, age: ${this.age}`);
const person1 = printName.bind(person);
person1();
// console.log(person1);
