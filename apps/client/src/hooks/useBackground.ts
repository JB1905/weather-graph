import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'state/actions';
import { weatherThemes } from 'constants/weatherThemes';
import type { RootState } from 'state/reducers';

export const useBackground = () => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector(
    (state: RootState) => state.appearance
  );

  const setBackground = (description: string, _isDark?: boolean) => {
    // TODO
    const transformColors = () => {
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
