import { useDispatch, useSelector } from 'react-redux';
import Color from 'color';

import { SET_BACKGROUND_COLOR } from '../actions/appearanceActions';

import { weatherThemes } from '../constants/weatherThemes';

export const useBackground = () => {
  const dispatch = useDispatch();

  const setBackground = (description: string, isDark: boolean) => {
    // console.log(description, isDark);

    // console.log(weatherThemes[description], description);

    dispatch({
      type: SET_BACKGROUND_COLOR,
      payload: weatherThemes[description],
    });
  };

  const { backgroundColor } = useSelector(
    (state: { appearance: { backgroundColor: [string, string] } }) =>
      state.appearance
  );

  return { setBackground, backgroundColor };
};
