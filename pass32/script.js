// fetch = function used for making http requests to fetch resources.
// (json style data, img, files)
// Simplifies asynchronous data fetching in js and
// used for interacting with APIs to retrieve  and
// send data asynchrounously over the web.

// fetch(url, {options})
// options = method : GET | POST | DELETE | UPDATE
//

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((err) => console.log(err));

// using async/await

fetchData();
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (err) {
    console.error(err);
  }
}
