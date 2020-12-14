import { useDispatch, useSelector } from 'react-redux';
import Color from 'color';

import * as Actions from 'state/actions';
import type { RootState } from 'state/reducers';
import type { Gradient } from 'types/Gradient';

export const useBackground = () => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector(
    (state: RootState) => state.appearance
  );

  const setBackground = (description: string, isDark: boolean) => {
    // Actions.setBackgroundColor()
  };

  const resetBackground = () => {};

  return {
    backgroundColor,
    setBackground,
    resetBackground,
  };
};
