import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import App from './components/App'
import Directory from './components/Directory'
import NotFoundPage from './components/NotFoundPage'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/directory" component={Directory}/>
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
