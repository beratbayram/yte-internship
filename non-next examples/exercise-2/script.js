console.log("Hello World");

const arr = ["a", "b", "c"];

for (const item of arr) {
  console.log(item);
}

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function fetchAsync() {
  const ul = document.querySelector("ul#banana");

  for (let index = 1; index < 10; index++) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${index}`
    );
    const json = await response.json();

    ul.innerHTML += `<li>${json.title}</li>`;
  }
}

//fetchAsync();
