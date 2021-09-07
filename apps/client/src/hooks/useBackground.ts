import { useDispatch, useSelector } from 'react-redux';
import Color from 'color';

import * as Actions from 'state/actions';
import { weatherThemes } from 'constants/weatherThemes';
import type { Gradient } from 'types/Gradient';

export const useBackground = () => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector(
    (state) => state.appearance
  );

  const setBackground = (description: string, isDark?: boolean) => {
    // useCallback
    const transformColorsToDarken = () => {
      return (weatherThemes[description].map((color: string) =>
        Color(color).darken(0.5)
      ) as unknown) as Gradient;
    };

  // useCallback
    // TODO
    const transformColors = () => {
      if (isDark) {
        return transformColorsToDarken();
      }

      return weatherThemes[description];
    };

    dispatch(Actions.setBackgroundColor(transformColors()));
  };

  // useCallback
  const resetBackground = () => dispatch(Actions.resetBackgroundColor());

  return {
    backgroundColor,
    setBackground,
    resetBackground,
  };
};
