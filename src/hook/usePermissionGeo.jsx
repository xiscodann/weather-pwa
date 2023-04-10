import { useEffect, useState } from 'react';

export const usePermissionGeo = () => {
  const [userLocation, setUserLocation] = useState('');
  const [denied, setDenied] = useState(false);

  const revealPosition = ({ coords }) => {
    const { latitude, longitude } = coords;
    const reverseCity = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=827409e1392e93208b272c5b1b9a370a`
        );
        if (!response.ok) throw Error(`Error stratus city: ${response.status}`);
        return response.json();
      } catch (err) {
        console.error(`Error get city: ${err}`);
      }
    };
    reverseCity().then((res) => {
      const { name, country } = res[0];
      setUserLocation({
        latitude,
        longitude,
        city: name.split(' ')[0],
        country,
      });
    });
  };
  const errorPosition = (error) => {
    console.error('ERROR', error);
    setDenied(error);
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      const { state } = result;
      if (state === 'denied') setDenied(true);
      navigator.geolocation.getCurrentPosition(revealPosition, errorPosition);
    });
  }, []);

  return { userLocation, denied };
};
