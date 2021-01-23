//get html elements
const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

newJokeBtn.addEventListener("click", getJoke);

// Get a joke asyn
async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  if (jokePromise.ok) {
    const joke = await jokePromise.json();

    const { punchline, setup } = joke[0];
    setupDiv.textContent = setup;
    punchlineDiv.textContent = punchline;

    punchlineDiv.classList.add("hidden");

    toggleNewJokeAndPunchlineBtns();
  } else {
    console.error(`Error: status code ${jokePromise.status}`);
  }
}
getJoke();

punchlineBtn.addEventListener("click", getPunchline);

// Joke punchline
function getPunchline() {
  punchlineDiv.classList.add("bubble");
  punchlineDiv.classList.remove("hidden");

  toggleNewJokeAndPunchlineBtns();
}

// toggle joke and punchline btns
function toggleNewJokeAndPunchlineBtns() {
  newJokeBtn.classList.toggle("hidden");
  punchlineBtn.classList.toggle("hidden");
}
