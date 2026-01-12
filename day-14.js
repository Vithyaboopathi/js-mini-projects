/* =========================
1. Typing Speed Tester
========================= */
let startTime, sentenceText;

async function startTyping() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  sentenceText = data.content;

  sentence.innerText = sentenceText;
  typingInput.value = "";
  typingResult.innerText = "";
  startTime = new Date().getTime();
}

typingInput.addEventListener("input", () => {
  if (typingInput.value === sentenceText) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    const words = sentenceText.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);

    typingResult.innerText = `Typing Speed: ${wpm} WPM`;
  }
});

/* =========================
2. Air Quality Checker
========================= */
async function getAQI() {
  const city = cityAQI.value;
  const res = await fetch(`https://api.waqi.info/feed/${city}/?token=demo`);
  const data = await res.json();

  aqiResult.innerHTML = `
    <p>AQI: ${data.data.aqi}</p>
    <p>Status: ${data.data.aqi < 50 ? "Good 😊" : "Poor ⚠️"}</p>
  `;
}

/* =========================
3. GitHub User Finder
========================= */
async function findGitHubUser() {
  const username = githubUser.value;
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    githubResult.innerText = "User not found ❌";
    return;
  }

  const data = await res.json();
  githubResult.innerHTML = `
    <img src="${data.avatar_url}" width="100" />
    <p>${data.bio}</p>
    <p>Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
  `;
}

/* =========================
4. Currency Converter
========================= */
async function loadCurrencies() {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await res.json();

  Object.keys(data.rates).forEach((c) => {
    fromCurrency.innerHTML += `<option>${c}</option>`;
    toCurrency.innerHTML += `<option>${c}</option>`;
  });
}

async function convertCurrency() {
  const res = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`
  );
  const data = await res.json();

  const rate = data.rates[toCurrency.value];
  currencyResult.innerText =
    "Converted Amount: " + (amount.value * rate).toFixed(2);
}

loadCurrencies();

/* =========================
5. Dictionary App
========================= */
async function searchWord() {
  const word = wordInput.value;
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    dictionaryResult.innerText = "Word not found ❌";
    return;
  }

  const data = await res.json();
  dictionaryResult.innerText = data[0].meanings[0].definitions[0].definition;
}

/* =========================
6. NASA Picture of the Day
========================= */
async function loadNASA() {
  const date = nasaDate.value;
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
  );
  const data = await res.json();

  nasaResult.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.explanation}</p>
    ${
      data.media_type === "image"
        ? `<img src="${data.url}" />`
        : `<iframe src="${data.url}" width="400"></iframe>`
    }
  `;
}
