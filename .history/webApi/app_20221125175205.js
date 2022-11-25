let btn = document.getElementById("btn");
let output = document.getElementById("response");
btn.addEventListener("click", function () {
  console.log("btn");
});

console.log("app.js file has run!");
function dataFetch(arg) {
  //   fetch(`https://api.funtranslations.com/translate/${arg}.json`)
  let url = "./test.txt";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      console.log(err);
    });
}

dataFetch();
