import { useDispatch, useSelector } from 'react-redux';
import Color from 'color';

import {
  // setBackgroundColor,
  resetBackgroundColor,
} from 'state/actions';

// import { weatherThemes } from 'constants/weatherThemes';

import { RootState } from 'state/reducers';

export const useBackground = () => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector(
    (state: RootState) => state.appearance
  );

  const setBackground = (description: string, isDark: boolean) => {
    // TODO
    const transformColors = newFunction(description, isDark);

    // dispatch(setBackgroundColor(transformColors()));
  };

  const resetBackground = () => dispatch(resetBackgroundColor());

  return {
    backgroundColor,
    setBackground,
    resetBackground,
  };
};

// TODO
function newFunction(description: string, isDark: boolean) {
  return () => {
    // if (!weatherThemes[description]) {
    //   return weatherThemes[description];
    // }

    if (isDark) {
      // return weatherThemes[description].map((color: string) => Color(color).darken(0.5)
      // );
    } else {
      // return weatherThemes[description];
    }
  };
}
