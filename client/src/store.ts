import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import { loadState, saveState } from './helpers/storeManager';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState({
    favorite: store.getState().favorite,
    unit: store.getState().unit,
  });
});

export default store;
