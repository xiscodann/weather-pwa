import { useEffect, useReducer } from 'react';
import { reducer } from './reducers';
import StateContext from './base/context';
import { store } from './states';
import * as TYPES from './base/types';
import './styles/app.scss';

import SearchLocation from './containers/SearchLocation';
import WeatherApp from './containers/WeatherApp';
import { usePermissionGeo } from './hook/usePermissionGeo';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, store);
  const { userLocation, denied } = usePermissionGeo();
  const { initialLat, initialLng } = state || null;

  useEffect(() => {
    if (initialLat === '' && initialLng === '') {
      const { latitude, longitude, city, country } = userLocation;
      if (latitude && longitude) {
        dispatch({
          type: TYPES.GET_LOCATION,
          payload: {
            latitude,
            longitude,
            city,
            country,
          },
        });
      }
    }
  }, [userLocation, denied]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {!denied && state.city !== '' ? (
        <WeatherApp />
      ) : (
        <SearchLocation state={''} />
      )}
    </StateContext.Provider>
  );
};
