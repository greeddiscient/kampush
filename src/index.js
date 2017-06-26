import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  Route,
  BrowserRouter,
  IndexRoute,
  Link,
  Switch
} from 'react-router-dom'
import App from './components/App'
import Directory from './components/Directory'
import NotFoundPage from './components/NotFoundPage'
import SteamLogin from './components/SteamLogin'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path="/directory" component={Directory}/>
            <Route path="/steamLogin" component={SteamLogin}/>
            <Route path="*" component={NotFoundPage}/>
            </Switch>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
