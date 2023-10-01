import React, { useState } from 'react'
import thermometer from './icons/icons8-thermometer-64.png'
import clouds from './icons/icons8-partly-cloudy-day-96.png'
import cloudy from './icons/icons8-clouds-96.png'
import sunny from './icons/icons8-summer-96.png'
import rain from './icons/icons8-rain-cloud-96.png'
import rainy from './icons/icons8-rain-96.png'
// import stormy from './icons/icons8-storm-with-heavy-rain-96.png'
// import lighting from './icons/icons8-storm-96.png'

function Weather({ data, unit }) {

  const getImage = (condition) => {
    switch (condition) {
      case "few clouds":
        return clouds;
      case "broken clouds":
        return clouds
      case "overcast clouds":
        return cloudy
      case "light rain":
        return rain
      case "moderate rain":
        return rainy
      default:
        return sunny
    }
  }

  if (data.length === 0) {
    return (<div className="spinner">
      <span className="loader-text">Loading Data...</span>
    </div>)
  } else if (data.length === 1) {
    return (
      <div className='p-3'>
        <div className="content">
          {data.map((val) => {
            return (
              <div key={val.dt}>
                <div className='temp'>
                  <div>
                    <img src={thermometer} alt='themometer'></img>
                  </div>
                  <p>
                    {Math.round(val.main.temp)}&deg; {unit}
                  </p>
                  <div className='weather'>
                    <img src={getImage(val.weather[0].description)} alt='weather'></img>
                  </div>
                </div>
                <div className="date">
                  <h3>
                    {/* {new Date(data[1].dt_txt).toDateString()} */}
                  </h3>
                </div>
                <div className='values'>
                  <div className='value'>
                    <h4>HUMIDITY</h4>
                    <h3>{val.main.humidity}%</h3>
                  </div>
                  <div className='value'>
                    <h4>VISIBILITY</h4>
                    <h3>{(val.visibility) / 1000}km</h3>
                  </div >
                  <div className='value'>
                    <h4>PRESSURE</h4>
                    <h3>{val.main.pressure}hPa</h3>
                  </div>
                  <div className='value'>
                    <h4>WIND</h4>
                    <h3>{Math.round(val.wind.speed)}mph</h3>
                    {/* <h3>{val.wind ? <span>{val.wind.speed}</span> : null}</h3> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div >
    )
  } else {
    return (
      <div className="row">
        <div className="col" key={data[2].dt}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{new Date(data[2].dt_txt).toDateString()}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Temp: </h6>
              {<span>{data[2].main.temp}</span>}
              <h6 className="card-subtitle mb-2 text-body-secondary">Humidity: </h6>
              {<span>{data[2].main.humidity}</span>}%
              <h6 className="card-subtitle mb-2 text-body-secondary">Wind Speed: </h6>
              <span>{data[2].wind.speed}</span>
              <h6 className="card-subtitle mb-2 text-body-secondary">Pressure: </h6>
              {<span>{data[2].main.pressure}</span>}hPa
            </div>
          </div>
        </div>
        <div className="col" key={data[3].dt}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{new Date(data[3].dt_txt).toDateString()}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Temp: </h6>
              {<span>{data[3].main.temp}</span>}
              <h6 className="card-subtitle mb-2 text-body-secondary">Humidity: </h6>
              {<span>{data[3].main.humidity}</span>}%
              <h6 className="card-subtitle mb-2 text-body-secondary">Wind Speed: </h6>
              <span>{data[3].wind.speed}</span>
              <h6 className="card-subtitle mb-2 text-body-secondary">Pressure: </h6>
              {<span>{data[3].main.pressure}</span>}hPa
            </div>
          </div>
        </div>
        <div className="col" key={data[4].dt}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{new Date(data[4].dt_txt).toDateString()}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Temp: </h6>
              {<span>{data[4].main.temp}</span>}
              <h6 className="card-subtitle mb-2 text-body-secondary">Humidity: </h6>
              {<span>{data[4].main.humidity}</span>}%
              <h6 className="card-subtitle mb-2 text-body-secondary">Wind Speed: </h6>
              <span>{data[4].wind.speed}</span>
              <h6 className="card-subtitle mb-2 text-body-secondary">Pressure: </h6>
              {<span>{data[4].main.pressure}</span>}hPa
            </div>
          </div>
        </div>
        <div className="col" key={data[5].dt}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{new Date(data[5].dt_txt).toDateString()}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Temp: </h6>
              {<span>{data[5].main.temp}</span>}
              <h6 className="card-subtitle mb-2 text-body-secondary">Humidity: </h6>
              {<span>{data[5].main.humidity}</span>}%
              <h6 className="card-subtitle mb-2 text-body-secondary">Wind Speed: </h6>
              <span>{data[5].wind.speed}</span>
              <h6 className="card-subtitle mb-2 text-body-secondary">Pressure: </h6>
              {<span>{data[5].main.pressure}</span>}hPa
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather