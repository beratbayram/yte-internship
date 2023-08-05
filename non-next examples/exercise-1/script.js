console.log("Hello World");


function fetchJson(){
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => alert(json.title));
}


// async function fetchAsync() {
//   const ul = document.querySelector("ul#banana");

//   for (let index = 1; index < 10; index++) {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${index}`
//     );
//     const json = await response.json();

//     ul.innerHTML += `<li>${json.title}</li>`;
//   }
// }

//fetchAsync();

document
  .querySelector("#dummy")
  .addEventListener("click", fetchJson);
