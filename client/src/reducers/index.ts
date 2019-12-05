import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  favorite: favoriteReducer
});

export default rootReducer;
