import { SET_BACKGROUND_COLOR, RESET_BACKGROUND_COLOR } from 'state/actions';

export interface AppearanceState {
  readonly backgroundColor: string[];
  // readonly backgroundColor: [string, string];
}

export interface SetBackgroundColorAction {
  readonly type: typeof SET_BACKGROUND_COLOR;
  readonly payload: string[];
  // readonly payload: [string, string];
}

export interface ResetBackgroundColorAction {
  readonly type: typeof RESET_BACKGROUND_COLOR;
}
