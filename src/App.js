import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent.js'

class App extends Component {
  state = {
    isLoggedIn: false,
    isOn: false,
  }

  render() {
    const displayText = this.state.iSon ? 'On' : 'Off'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ChildComponent />
          <div>{this.state.isLoggedIn ? <button>Logic</button> : null}</div>
          <h1 className="display">{displayText}</h1>
          <button className="toggle-bn" onClick={this.toggle}>Toggle</button>
        </header>
      </div>
    );
  }

  toggle = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }));
  }
}

export default App;
