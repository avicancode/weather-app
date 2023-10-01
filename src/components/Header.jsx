import React from 'react'
import cloud from './icons/icons8-partly-cloudy-day-48.png'
import '../App.css';

function Header({ index }) {
  const now = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit', hour12: 'true' })
  console.log(index)

  return (
    <div className='header'>
      <div className="appIcon">
        <img src={cloud} alt='cloud'></img>
      </div>
      <div className="app-name">
        <div className="col-7 name">
          <h1 className='app-name-header'>WeatherMe</h1>
          <h6 className='current-time'>{now.slice(11)}</h6>
        </div>
        <div className='col tabs'>
          <div>
            <h3 className={index === 0 ? 'active-tab' : ''}>Today</h3>
          </div>
          <div>
            <h3 className={index === 1 ? 'active-tab' : ''}>Tommorow</h3>
          </div>
          <div>
            <h3 className={index > 1 ? 'active-tab' : ''}>Weekly</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header