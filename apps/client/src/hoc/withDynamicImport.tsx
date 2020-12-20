import { withSuspense } from 'react-suspenser';
import { compose } from 'recompose';

import { withErrorBoundary } from './withErrorBoundary';

// TODO
export const withDynamicImport = compose<any, any>(
  withErrorBoundary(),
  withSuspense()
);
