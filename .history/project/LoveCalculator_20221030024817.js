//! Making a love calculator.
function loveCalculator() {
  let yourName = prompt("What is your name?");
  let partnerName = prompt("What is your parter's name?");
  let loveScore = Math.ceil(Math.random() * 100 + 1);

  let res = document.getElementById("res");
  res.innerText = `Love Percentige for '${yourName} + ${partnerName}' is : ${loveScore} %`;
}
