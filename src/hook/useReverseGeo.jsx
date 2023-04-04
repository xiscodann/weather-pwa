import { useState } from 'react';

export const useReverseGeo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCityGeoLocation = async (lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=827409e1392e93208b272c5b1b9a370a`
      );
      if (!response.ok) throw Error(`Error status: ${response.status}`);

      return response.json();
    } catch (err) {
      console.error(`Error call open weather: ${err}`);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { getCityGeoLocation, loading, error };
};
