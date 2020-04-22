import { SET_BACKGROUND_COLOR } from 'actions/appearanceActions';

export interface AppearanceState {
  backgroundColor: [string, string];
}

export interface SetBackgroundColorAction {
  type: typeof SET_BACKGROUND_COLOR;
  payload: [string, string];
}
