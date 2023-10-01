import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import Forecast from './Forecast';
import location from './icons/icons8-location-32.png'

function Home({ setIndex }) {

    const [city, setCity] = useState('Delhi');
    const [search, setSearch] = useState("")
    const [unit, setUnit] = useState('metric')
    const [hourlyWeatherData, setHourlyWeatherData] = useState([]);
    const [dailyWeatherData, setDailyWeatherData] = useState([]);
    const [temp, setTemp] = useState('C');
    const [currentIndex, setCurrentIndex] = useState('');

    function getWeather() {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=acedd143244550e1188fb9a210bd0e82&units=${unit}`
        )
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.list)
                setHourlyWeatherData(data.list.slice(0, 7));
                const dailyMap = new Map();
                data.list.forEach((value) => {
                    const date = new Date(value.dt_txt);
                    const date_str = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
                    dailyMap.set(date_str, value);
                });
                const dailyData = Array.from(dailyMap.values());
                setDailyWeatherData(dailyData);
                setCurrentIndex(0);
            })
            .catch((err) => console.error(err));
    }

    const getComponentData = (index) => {
        if (dailyWeatherData.length === 0) return []

        if (index < 0) {
            return dailyWeatherData
        }

        return [dailyWeatherData.at(index)];
    }

    useEffect(() => {
        if (city !== '') {
            getWeather(city, unit);
        }
    }, [city, unit]);

    function changeCity(event) {
        if (event.keyCode === 13) {
            setCity(search)
        }
    }

    function changeUnit() {
        if (unit === 'metric') {
            setUnit('imperial')
            setTemp('F')
        } else {
            setUnit('metric')
            setTemp('C')
        }
    }


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-3 unit">
                    <h4>&deg;F</h4>
                    <label className="switch">
                        <input type="checkbox" checked={unit === 'metric'} onChange={changeUnit} />
                        <span className="slider round"></span>
                    </label>
                    <h4>&deg;C</h4>
                </div>
            </div>
            <div className="row">
                <div className='search-input'>
                    <input
                        className="form-control mb-1"
                        onChange={(e) => { setSearch(e.target.value) }}
                        onKeyDown={changeCity}
                        placeholder='Search Location...'
                    />
                </div>
            </div>
            <div className='row'>
                <div id="carouselExampleIndicators" className="carousel slide ">

                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <div className="card-today">
                                <div className='location'>
                                    <h2>{city}</h2>
                                    <div className="loc-icon">
                                        <img src={location} alt='location' ></img>
                                    </div>
                                </div>
                                <div className='row'>
                                    <Weather data={getComponentData(0)} unit={temp} />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-tommorow">
                                <div className='location'>
                                    <h2>{city}</h2>
                                    <div className="loc-icon">
                                        <img src={location} alt='location' ></img>
                                    </div>
                                </div>
                                <div className='row'>
                                    <Weather data={getComponentData(1)} unit={temp} />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-weekly">
                                <div className='location'>
                                    <h2>{city}</h2>
                                    <div className="loc-icon">
                                        <img src={location} alt='location' ></img>
                                    </div>
                                </div>
                                <div className='row'>
                                    <Weather data={getComponentData(-1)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => setIndex('Prev')}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => setIndex('Next')}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div >
            <div className="row">
                <Forecast data={hourlyWeatherData} />
            </div>
        </div >

    )
}

export default Home