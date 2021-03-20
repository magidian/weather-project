import './App.css';

function App() {
  const fetchWeather = city => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        process.env.REACT_APP_API_KEY +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
      console.log()
  }
    const displayWeather = data => {
      const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    // document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    }

    const search = () => {
      fetchWeather(document.querySelector(".search-bar").value);
      document.querySelector(".search-bar").value = ''
    }

    function keyHandler(e) {
      if (e.key === "Enter") {
        search()
      }
    }
  return (
    <div className="App">
      <div className="card">
      <div className="search">
        <input onKeyDown={keyHandler} type="text" className="search-bar" placeholder="Search" />
        <button onClick={search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
            />
          </svg>
        </button>
      </div>
      <div className="weather loading">
        <h2 className="city"></h2>
        <h1 className="temp"></h1>
        <div className="flex">
          <img src="" alt="" className="icon" />
          <div className="description">Search city</div>
        </div>
        <div className="humidity"></div>
        <div className="wind"></div>
      </div>
    </div>
    </div>
  );
}

export default App;
