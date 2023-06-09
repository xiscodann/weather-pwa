import React from 'react';
import './style.scss';
import { getSunTime } from '../../helpers/getSunTime';
import AnimatedIcon from '../AnimatedIcons';

const WeatherApp = ({ dataWeather }) => {
  if (dataWeather) {
    const { main, weather, sys, name } = dataWeather;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const getTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateUserTimeZone = new Date().toLocaleString('en-US', {
      timeZone: getTimeZone,
    });
    const date = new Date(dateUserTimeZone);
    console.log(dataWeather);
    const image = `${weather[0]?.main.toLowerCase()}-${weather[0]?.id}.jpg`;
    return (
      <article className='weather'>
        <div
          className={`grid grid-cols-2 weather__${weather[0]?.main.toLowerCase()} ${getSunTime(
            sys?.sunrise,
            sys?.sunset,
            date
          )}`}
        >
          <div className='flex justify-center items-start flex-col weather__format'>
            <p className='weather__format--temp'>
              {main?.temp?.toString().split('.')[0]}°
            </p>
            <p className='weather__format--description capitalize '>
              {weather[0]?.description}
            </p>
            <p className='weather__format--country'>
              {name}, {sys?.country}
            </p>
          </div>
          <div className='flex justify-center items-end flex-col justify-end weather__format'>
            <p className='weather__format--time'>
              {date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}{' '}
              | {date.toLocaleDateString('en-US', options)}
            </p>
            <div className='h-4/5 w-full flex items-center justify-center weather__format--image'>
              <AnimatedIcon icon={weather[0]?.icon} />
            </div>
          </div>
          <div
            className={`${weather[0]?.main.toLowerCase()} ${getSunTime(
              sys?.sunrise,
              sys?.sunset,
              date
            )}`}
            style={{
              backgroundImage: `url('/src/assets/images/${image}')`,
            }}
          ></div>
        </div>
      </article>
    );
  }
  return <p>Sin data</p>;
};

export default WeatherApp;
