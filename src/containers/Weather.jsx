import { useState, useEffect, useContext } from 'react';
import { useOpenWeather } from '../hook/useOpenWeather';
import { usePermissionGeo } from '../hook/usePermissionGeo';

import SearchLocation from '../components/SearchLocation';
import WeatherApp from '../components/WeatherApp';

const Weather = () => {
  const { userLocation, denied } = usePermissionGeo();
  const { getOpenWeatherAPI } = useOpenWeather();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userLocation?.city) {
      const { city } = userLocation;
      getOpenWeatherAPI(city)
        .then((res) => setData(res))
        .finally(() => setLoading(false));
    }
    if (denied) setLoading(false);
  }, [userLocation, denied]);

  if (loading) return <p>Cargando</p>;

  return (
    <>
      {denied && !data ? <SearchLocation /> : <WeatherApp dataWeather={data} />}
    </>
  );
};
export default Weather;
