//DSA
/*
var start, end;
function sum(n) {
  return (n / 2) * (n + 1);
}
start = performance.now();
sum(1000000000);
end = performance.now();
console.log(end - start);
*/

/*
 * Programmer: @Khalid

 *** User will give input with the firstNumber and the last number, if needed, I have to sort the data first!
 *** Then, I have to find the missing number from the input list;
 */

/*
 
let array = [1, 3, 10, 2, 5, 6, 7, 8, 9];
const arr = [];
function inputNumber(num) {
  for (let i = 1; i <= 9; i++) {
    arr.push(Number(prompt("Input here")));
  }
}
inputNumber();
*/

const arr = [22, 29, 25, 30, 24, 23, 28, 26, 27, 31];
const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = temp;
  }
  return nums;
};
const newArray = insertion_Sort(arr);

console.log("array 👉", newArray);

let firstNumber = newArray.slice(0, 1);
let lastNumber = newArray.slice(-1);

console.log("FirstNumber 👉 ", firstNumber);
console.log("lastNumber 👉 ", lastNumber);

let hNum = firstNumber;
let lNum = lastNumber;

function missingNum(hNum, lNum) {
  const array = [];
  //oldArr, newArr
  let i = hNum;

  console.log(String(i));

  for (i; i <= lNum; i++) {
    const arr = array.push(i);
  }
  // console.log(array);
  // for (let value of arr) {
  //   (arr)
  //   // const arr = [];
  //   // arr.push(array);
  // }
  console.log(array);
}
// missingNum(firstNumber, lastNumber);

missingNum(Number(firstNumber), Number(lastNumber));
