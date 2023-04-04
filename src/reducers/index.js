import * as TYPES from '../base/types';
import { store } from '../states';

export const reducer = (state = store, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.GET_LOCATION:
      const { latitude, longitude, city, country } = payload;
      return {
        ...state,
        initialLat: latitude,
        initialLng: longitude,
        city,
        country,
      };

    default:
      return state;
  }
};
