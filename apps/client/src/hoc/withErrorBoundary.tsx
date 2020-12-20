import { ErrorBoundary } from 'react-error-boundary';

export function withErrorBoundary() {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    // TODO fallback
    <ErrorBoundary fallback={<p>err</p>}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
}
