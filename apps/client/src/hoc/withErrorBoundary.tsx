import { ErrorBoundary } from 'react-error-boundary';

export function withErrorBoundary(errorScreen?: any) {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <ErrorBoundary fallback={<p>err</p>}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
}
