import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer as any
});

export default rootReducer;
