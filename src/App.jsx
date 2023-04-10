import { useReducer } from 'react';
import { reducer } from './reducers';
import StateContext from './base/context';
import { store } from './states';
import './styles/app.scss';
import Weather from './containers/Weather';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      <Weather />
    </StateContext.Provider>
  );
};
