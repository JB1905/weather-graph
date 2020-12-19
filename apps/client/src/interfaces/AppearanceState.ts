import { SET_BACKGROUND_COLOR, RESET_BACKGROUND_COLOR } from 'state/actions';

import type { Gradient } from 'types/Gradient';

export interface AppearanceState {
  readonly backgroundColor: Gradient;
}

export interface SetBackgroundColorAction {
  readonly type: typeof SET_BACKGROUND_COLOR;
  readonly payload: Gradient;
}

export interface ResetBackgroundColorAction {
  readonly type: typeof RESET_BACKGROUND_COLOR;
}
