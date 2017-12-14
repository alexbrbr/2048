import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerNameInput from './PlayerNameInput';
import HighScore from './HighScore';
import GameBoard from './GameBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alex',
      score: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <PlayerNameInput
           name={this.state.name}
           onChange={this.handleChange}>
          </PlayerNameInput>
          <HighScore name={this.state.name}></HighScore>
          <div className="game-board">
            <GameBoard
              score={this.state.score}
              name={this.state.name}></GameBoard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
