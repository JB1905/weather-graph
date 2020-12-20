import { memo } from 'react';
import { Helmet } from 'react-helmet';

type HeadProps = {
  readonly title?: string;
};

const Head = memo<HeadProps>(({ title }) => (
  <Helmet defaultTitle="Weather Graph" titleTemplate="%s | Weather Graph">
    <title>{title}</title>
  </Helmet>
));

export default Head;
