import { useDispatch, useSelector } from 'react-redux';
import Color from 'color';

import { SET_BACKGROUND_COLOR } from '../actions/appearanceActions';

import { weatherThemes } from '../constants/weatherThemes';

export const useBackground = () => {
  const dispatch = useDispatch();

  const setBackground = (description: string, isDark: boolean) => {
    const transformColors = () => {
      if (weatherThemes[description]) {
        if (isDark) {
          return weatherThemes[description].map((color: string) =>
            Color(color).darken(0.5)
          );
        } else {
          return weatherThemes[description];
        }
      } else {
        return weatherThemes[description];
      }
    };

    dispatch({
      type: SET_BACKGROUND_COLOR,
      payload: transformColors(),
    });
  };

  const { backgroundColor } = useSelector(
    (state: { appearance: { backgroundColor: [string, string] } }) =>
      state.appearance
  );

  return { setBackground, backgroundColor };
};
