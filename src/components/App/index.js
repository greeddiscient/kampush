import React, { Component } from 'react';
import logo from './logo.svg';
import steamlogin from './steamlogin.png'
import './style.css';

class App extends Component {
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
        <p><a href="auth/steam">Sign On with Steam</a></p>
        <a href="auth/steam"><img src={steamlogin} /></a>
      </div>
    );
  }
}

export default App;
