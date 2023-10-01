import React from 'react'
import clouds from './icons/icons8-partly-cloudy-day-96.png'
import cloudy from './icons/icons8-clouds-96.png'
import sunny from './icons/icons8-summer-96.png'
import rain from './icons/icons8-rain-cloud-96.png'
import rainy from './icons/icons8-rain-96.png'
// import stormy from './icons/icons8-storm-with-heavy-rain-96.png'
// import lighting from './icons/icons8-storm-96.png'

function Forecast({ data }) {


    // const urlMap = new Map()
    // urlMap.set("few clouds", fewCloud);    

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

    function getTime(value) {
        let time = Number(value);
        let timeStr = `${time.toString().length === 1 ? '0' + time.toString() : time}:00 ${time < 12 ? 'am' : 'pm'}`;
        return timeStr;

    }

    return (
        <div className='forecast'>
            {data.map((val) => {
                // console.log(typeof (val.dt_txt))
                return (
                    <div className="card-forecast" key={val.dt}>
                        <div>{getTime(val.dt_txt.slice(11, 13))}</div>
                        <img src={getImage(val.weather[0].description)} alt='{urlMap.get(val.weather[0].description)}' />
                        {/* <div>
                            <p>{val.weather[0].description}</p>
                        </div> */}
                        <div>{Math.round(val.main.temp)}&deg;</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Forecast