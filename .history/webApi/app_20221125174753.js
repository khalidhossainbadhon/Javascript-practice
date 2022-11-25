let btn = document.getElementById("btn");
let output = document.getElementById("response");
console.log("Hello World");
function dataFetch(arg) {
  //   fetch(`https://api.funtranslations.com/translate/${arg}.json`)
  fetch(`https://api.funtranslations.com/translate/`)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      console.log(err);
    });
}

dataFetch();
