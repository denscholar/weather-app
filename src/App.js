import './App.scss';
import { useState, CSSProperties } from "react";
import CloudItem from './component/CloudItem/CloudItem';
import WeatherItem from './component/WeatherItem/WeatherItem'
import cloudy from './assets/weather.png';
import humidity from './assets/humidity.png';
import windspeed from './assets/wind.png'
import sun from './assets/sun.png';
import PuffLoader from 'react-spinners/PuffLoader';


function App() {

  // Spiner (css properties)
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [search, setSearch] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;

  const api = {
    url: 'https://api.weatherapi.com/v1/'
  }
  const apiKey = process.env.REACT_APP_ACCESS_KEY

  const getInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }


  const getWeatherData = (e) => {
    if (e.key === 'Enter' && search === '') {
      setErrorMsg('Input cannot be empty');
      setError(true)
    };

    if (e.key === 'Enter' && search !== '') {
      setLoading(true)
      setError(true)
      fetch(`${api.url}current.json?key=${apiKey}&q=${search}&aqi=no`)
        .then((res) => {
          if (!res.ok) {
            throw Error('Failed to fetch data')
          }
          return res.json();
        }).then((data) => {
          setWeather(data)
          setSearch('');
          setError(false);
          setLoading(false);
        }).catch((err) => {
          setError(true);
          setErrorMsg(err.message);
          setLoading(false)
        })
    }
  }

  return (
    <section className="App">
      <div className="example">
        <input type="text" placeholder="Search city or country" value={search} onChange={getInput} onKeyDown={getWeatherData} />
      </div>
      <img className='sun_img' src={sun} alt="sun" />
      <h1 className='app__title'>Weather Application</h1>
      <p className='date'>{date}</p>
      <>
        <WeatherItem
          img={cloudy}
          city={weather.location?.name}
          temp={weather.current?.temp_c}
          country={weather.location?.country}
          desc={weather.current?.condition?.text}
        />
        {error ? (<div className={errorMsg ? 'error' : ''}>{errorMsg}</div>) : ('')}
        <div className="weather__container-bottom">
          <CloudItem
            img={humidity}
            desc='Humidity'
            figure={weather.current?.humidity}
          />
          <CloudItem
            img={windspeed}
            desc='Wind Speed'
            figure={weather.current?.wind_kph}
          />
        </div>
          {loading && (<PuffLoader color={color} loading={loading} cssOverride={override} size={150} />)}

          
      </>
    </section>
  );
}

export default App;


