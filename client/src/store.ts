import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'store',
  storage,
  blacklist: ['appearance'],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools()
);

persistStore(store);

export default store;
