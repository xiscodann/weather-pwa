import { useContext, useEffect } from 'react';
import StateContext from '../../base/context';
import { useOpenWeather } from '../../hook/useOpenWeather';
import { useReverseGeo } from '../../hook/useReverseGeo';

const WeatherApp = () => {
  const [state] = useContext(StateContext);
  const { getOpenWeatherAPI, loading, error } = useOpenWeather();

  useEffect(() => {
    const { city } = state;
    if (city !== '') {
      getOpenWeatherAPI(city).then((res) => {
        console.log(res, loading);
      });
    }
  }, [state]);

  return <div>WeatherApp</div>;
};

export default WeatherApp;
