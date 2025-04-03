// Variáveis e seleção de elementos
const apiKey = "ff872ae07928f484207374718e952052";
const apiCountryURL = "https://flagsapi.com/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector(".icon-img");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const weatherData = document.querySelector("#weather-data");

const weatherContainer = document.querySelector("#weather-data");

// Funções
const getWeatherData = async (city) => {
  try {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    if (data.cod && data.cod !== 200) {
      throw new Error(data.message || "Cidade não encontrada");
    }

    return data;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  if (!data) return;

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  weatherIconElement.setAttribute("alt", data.weather[0].description);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${(data.wind.speed * 3.6).toFixed(1)}km/h`;
  countryElement.setAttribute(
    "src",
    `${apiCountryURL}${data.sys.country}/flat/64.png`
  );
  countryElement.setAttribute("alt", `Bandeira do ${data.sys.country}`);

  weatherData.classList.remove("hide");
};

// Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (city) {
    showWeatherData(city);
  } else {
    alert("Por favor, digite o nome de uma cidade");
  }
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value.trim();

    if (city) {
      showWeatherData(city);
    }
  }
});
