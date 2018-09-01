import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Private from './components/Private';
import Archive from './components/Archive'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          {/* style={{width:'1424px'}} */}
        <HashRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/twitter-marketing" exact component={Private} />
            <Route path="/twitter-marketing/archive" component={Archive} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;