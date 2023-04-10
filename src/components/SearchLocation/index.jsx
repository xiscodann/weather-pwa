import { useEffect, useState, useContext } from 'react';
import StateContext from '../../base/context';
import './style.scss';

const SearchLocation = () => {
  const [dispatch] = useContext(StateContext);
  const [coincidence, setCoincidence] = useState([]);
  const [text, setText] = useState('');

  const handlerCoincidence = (e) => {
    e.preventDefault();
    if (text.length > 3) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=827409e1392e93208b272c5b1b9a370a`
      )
        .then((response) => response.json())
        .then((res) => setCoincidence(res))
        .catch((err) => console.error(err));
    }
  };
  const handlerCity = (e) => {
    const value = e.target.value;
    setText(value);
  };
  const selectCity = (city, country, latitude, longitude) => {
    dispatch({
      type: TYPES.GET_LOCATION,
      payload: {
        latitude,
        longitude,
        city,
        country,
      },
    });
  };

  return (
    <section className='search'>
      <h1>
        Bienvenido a <span>WeatherTime</span>
      </h1>
      <p>Selecciona tu ubicación</p>
      <form onSubmit={(e) => handlerCoincidence(e)}>
        <input
          type='text'
          value={text}
          onChange={(e) => handlerCity(e)}
          placeholder='Bogotá, CO'
          required
        />
        <button>Buscar ciudad</button>
      </form>
      {coincidence.map(({ name, country, lat, lon, state }, index) => (
        <button
          type='button'
          key={`${name}-${index}`}
          onClick={() => selectCity(name, country, lat, lon)}
        >
          <p>
            {name} {state ? `, ${state}` : ''}, {country}
          </p>
        </button>
      ))}
    </section>
  );
};

export default SearchLocation;
