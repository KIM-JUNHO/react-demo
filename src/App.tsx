import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Request from './pages/Request';
import History from './pages/History';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/history" component={History} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
