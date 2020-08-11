import { useDispatch, useSelector } from "react-redux";
import Color from "color";

import {
  setBackgroundColor,
  resetBackgroundColor,
} from "actions/appearanceActions";

import { weatherThemes } from "constants/weatherThemes";

import { RootState } from "reducers";

export const useBackground = () => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector(
    (state: RootState) => state.appearance,
  );

  const setBackground = (description: string, isDark: boolean) => {
    const transformColors = () => {
      if (!weatherThemes[description]) {
        return weatherThemes[description];
      }

      if (isDark) {
        return weatherThemes[description].map((color: string) =>
          Color(color).darken(0.5)
        );
      } else {
        return weatherThemes[description];
      }
    };

    dispatch(setBackgroundColor(transformColors()));
  };

  const resetBackground = () => dispatch(resetBackgroundColor());

  return {
    backgroundColor,
    setBackground,
    resetBackground,
  };
};
