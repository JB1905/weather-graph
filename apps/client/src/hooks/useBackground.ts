import { useDispatch, useSelector } from 'react-redux';
import Color from 'color';

import * as Actions from 'state/actions';
import type { RootState } from 'state/reducers';
import type { Gradient } from 'types/Gradient';
import { weatherThemes } from 'constants/weatherThemes';

export const useBackground = () => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector(
    (state: RootState) => state.appearance
  );

  const setBackground = (description: string, isDark: boolean) => {
    // TODO
    const transformColors = () => {
      // if (!weatherThemes[description]) {
      //   return weatherThemes[description];
      // }

      // if (isDark) {
      //   return weatherThemes[description].map((color: string) =>
      //     Color(color).darken(0.5)
      //   );
      // }

      return weatherThemes[description];
    };

    dispatch(Actions.setBackgroundColor(transformColors()));
  };

  const resetBackground = () => dispatch(Actions.resetBackgroundColor());

  return {
    backgroundColor,
    setBackground,
    resetBackground,
  };
};
