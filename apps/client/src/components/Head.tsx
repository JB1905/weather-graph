import { memo } from 'react';
import { Helmet } from 'react-helmet';

// interface
type HeadProps = {
  readonly title?: string;
};

const Head = (({ title }: HeadProps) => (
  // TODO use globals
  <Helmet defaultTitle="Weather Graph" titleTemplate="%s | Weather Graph">
    <title>{title}</title>
  </Helmet>
));

export default Head;
