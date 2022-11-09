//! I made this Closures for Better/Secure code!
function count() {
  let count = 0;
  let res = document.getElementById("res");

  function increase() {
    document.getElementById("btn").addEventListener("click", function () {
      let result = !(count < 0) ? ++count : "Value can't be a negetive number";
      res.innerHTML = result;
      console.log(result);
      return result;
    });
  }
  increase();

  function decrease() {
    // let count = 0;
    document.getElementById("btn1").addEventListener("click", function () {
      let result = count > 0 ? --count : "Value can't be a negetive number";
      res.innerText = result;
      console.log(`${result}`);
      console.log(typeof result);
      return result;
    });
  }
  decrease();
  //   increase(() => typeof result);

  //   decrease(() => typeof result);
  // function x() {
  //   console.log(typeof result);
  // }
}

count();
