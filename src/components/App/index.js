import React, { Component } from 'react';
import logo from './logo.svg';
import steamlogin from './steamlogin.png'
import {Link} from 'react-router';
import './style.css';

class App extends Component {
  constructor(props,context) {
    super(props,context)
  }
  contextTypes={
    router: React.PropTypes.func.isRequired
  }

  steamLogin(){
    this.context.router.transitionTo("http://localhost:3000/auth/steam");
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="http://http://secret-meadow-32997.herokuapp.com/auth/steam"><img src={steamlogin} /></a>

      </div>
    );
  }
}

export default App;
