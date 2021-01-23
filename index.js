const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  if (jokePromise.ok) {
    if (punchlineDiv.textContent) punchlineDiv.classList.add("hidden");
    const joke = await jokePromise.json();
    const { punchline, setup } = joke[0];
    setupDiv.textContent = setup;
    setupDiv.addEventListener("click", () => {
      punchlineDiv.textContent = punchline;
      punchlineDiv.classList.add("bubble");
      punchlineDiv.classList.remove("hidden");
    });
    // console.log(setup, punchline);
  } else {
    console.error(`Error: status code ${jokePromise.status}`);
  }
}
getJoke();
newJokeBtn.addEventListener("click", getJoke);
