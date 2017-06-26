import React, { Component } from 'react';
import './style.css';

class SteamLogin extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
     if (typeof window !== 'undefined') {
          window.location.assign("http://localhost:3000/auth/steam") ;
     }
   }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default SteamLogin;
