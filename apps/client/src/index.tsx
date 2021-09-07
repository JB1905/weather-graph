import ReactDOM from 'react-dom';

import App from 'App';
import * as serviceWorker from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';
import { AppProviders } from 'components/AppProviders';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);

serviceWorker.register();

reportWebVitals(console.log); // TODO connect reports
