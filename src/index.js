import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  Route,
  Router,
  IndexRoute,
  Link,
  hashHistory
} from 'react-router'
import App from './components/App'
import Directory from './components/Directory'
import NotFoundPage from './components/NotFoundPage'
import SteamLogin from './components/SteamLogin'

class Routes extends Component {
  render() {
    return (
      <Router history= {hashHistory}>
            <Route path='/' component={App}/>
            <IndexRoute  component={App}/>
            <Route path="/directory" component={Directory}/>
            <Route path="/steamLogin" component={SteamLogin}/>
            <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
