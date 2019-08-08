import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import City from './pages/City';

import Layout from './components/Layout';
import Global from './components/Global';
import Background from './components/Background';

const App: React.FC = () => (
  <Layout>
    <Router basename="/">
      <Global />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city/:id" component={City} />
        <Redirect from="*" to="/" />
      </Switch>

      <Background />
    </Router>
  </Layout>
);

export default App;
