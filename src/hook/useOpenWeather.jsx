import { useEffect, useState, useContext } from 'react';

export const useOpenWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getOpenWeatherAPI = async (city = 'Bogota') => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=827409e1392e93208b272c5b1b9a370a`
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

  return { getOpenWeatherAPI, loading, error };
};
