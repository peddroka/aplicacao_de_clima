// Variáveis e seleção de elementos
const apiKey = "ff872ae07928f484207374718e952052";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const cityElement = document.querySelector("#temperature span");
const cityElement = document.querySelector("#description");
const cityElement = document.querySelector("#weather-icon");
const cityElement = document.querySelector("#country");
const cityElement = document.querySelector("#umidity span");
const cityElement = document.querySelector("#wind span");

// Funções
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();
};

const showWeatherData = (city) => {
  console.log(city);
};

// Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  console.log("city");
});
