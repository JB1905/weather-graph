import { combineReducers } from 'redux';

import favoriteReducer from './favoriteReducer';
import appearanceReducer from './appearanceReducer';
import unitReducer from './unitReducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  appearance: appearanceReducer,
  unit: unitReducer,
});

export default rootReducer;
