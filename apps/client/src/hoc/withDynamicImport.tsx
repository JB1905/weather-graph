import { withSuspense } from 'react-suspenser';
import { compose } from 'recompose';

import { withErrorBoundary } from './withErrorBoundary';

import Widget from 'components/Widget';
import Loader from 'components/Loader';

// TODO
export const withDynamicImport = compose<any, any>(
  withErrorBoundary(),
  withSuspense(
    <Widget>
      <Loader />
    </Widget>
  )
);
