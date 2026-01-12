/* =========================
1. E-Commerce Product Catalog
========================= */
let products = [];

async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  products = await res.json();
  renderProducts(products);
}

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.title} - $${p.price}`;
    li.onclick = () => (productDetails.innerHTML = `<p>${p.description}</p>`);
    productList.appendChild(li);
  });
}

function filterByPrice() {
  renderProducts(products.filter((p) => p.price < 500));
}

function sortByPrice() {
  renderProducts([...products].sort((a, b) => a.price - b.price));
}

loadProducts();

/* =========================
2. Movie Search App
========================= */
async function searchMovie() {
  const title = movieInput.value;
  const res = await fetch(
    `https://www.omdbapi.com/?t=${title}&apikey=564727fa`
  );
  const data = await res.json();

  movieResult.innerHTML = `
    <h3>${data.Title}</h3>
    <p>${data.Year}</p>
    <p>${data.Plot}</p>
    <img src="${data.Poster}" />
  `;
}

/* =========================
3. Weather App
========================= */
async function getWeather() {
  const city = cityInput.value;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=demo&units=metric`
  );
  const data = await res.json();

  weatherResult.innerHTML = `
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}

/* =========================
4. Employee Management
========================= */
let employees = [];

function renderEmployees() {
  employeeList.innerHTML = "";
  employees.forEach((e, i) => {
    employeeList.innerHTML += `<li>${e} <button onclick="deleteEmp(${i})">X</button></li>`;
  });
}

function addEmployee() {
  employees.push(empName.value);
  empName.value = "";
  renderEmployees();
}

function deleteEmp(i) {
  employees.splice(i, 1);
  renderEmployees();
}

/* =========================
5. Crypto Tracker
========================= */
async function loadCrypto() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
  );
  const data = await res.json();

  cryptoList.innerHTML = "";
  data.forEach((c) => {
    const cls = c.price_change_percentage_24h > 0 ? "green" : "red";
    cryptoList.innerHTML += `<li class="${cls}">
        ${c.name} (${c.symbol}) - $${c.current_price}
      </li>`;
  });
}

loadCrypto();
setInterval(loadCrypto, 60000);

/* =========================
6. Country Explorer
========================= */
let countries = [];

async function loadCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  countries = await res.json();

  countries.forEach((c) => {
    const option = document.createElement("option");
    option.value = c.name.common;
    option.textContent = c.name.common;
    countryDropdown.appendChild(option);
  });
}

countryDropdown.onchange = () => {
  const c = countries.find((x) => x.name.common === countryDropdown.value);
  countryDetails.innerHTML = `
    <h3>${c.name.common}</h3>
    <img src="${c.flags.png}" />
    <p>Capital: ${c.capital}</p>
    <p>Region: ${c.region}</p>
    <p>Population: ${c.population}</p>
  `;
};

countrySearch.oninput = () => {
  const val = countrySearch.value.toLowerCase();
  [...countryDropdown.options].forEach((o) => {
    o.hidden = !o.value.toLowerCase().includes(val);
  });
};

loadCountries();
