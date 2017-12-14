import React, { Component } from 'react';
import './GameBoard.css';
import initialTiles from './initial-tiles';
import { moveLineToLeft, moveLineToRight } from './gameFunctions.js';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: initialTiles
    };
  }

  popRandomNumber() {
    const possibleTiles = this.state.tiles.filter(tile => !tile.value);
    const randomTile = possibleTiles[Math.floor(Math.random() * possibleTiles.length)];

    if (!randomTile) {
      // game over
      return false;
    }

    randomTile.value = '2'; // TODO p 0.9 -> 2, p 0.1 -> 4
    const tileIndex = this.state.tiles
      .findIndex(tile => tile.x === randomTile.x && tile.y === randomTile.y);

    const newTiles = [...this.state.tiles];
    newTiles[tileIndex] = randomTile;

    this.setState({
      tiles: newTiles
    });
  }

  gameTurn(direction) {
    console.log(direction);
    let newTiles;
    switch (direction) {
      case 'Left' :
        newTiles = [0,1,2,3]
          .map(rowIndex => {
            return this.state.tiles
              .filter(tile => tile.y === rowIndex)
          })
          .map(moveLineToLeft);
          newTiles = [].concat.apply([], newTiles);
        break;
      default:
        newTiles = this.state.tiles;
    }

    this.setState({
      tiles: newTiles
    }, () => {this.popRandomNumber();});
  }

  keyDownFunction(e){
    console.log(moveLineToLeft);
    console.log(initialTiles);
    const supportedKeys = [
      'ArrowDown',
      'ArrowUp',
      'ArrowLeft',
      'ArrowRight'
    ];
    const isSupported = supportedKeys.some((supportedKey) => supportedKey === e.code);
    if (isSupported) {
      e.preventDefault();
      this.gameTurn(e.code.replace('Arrow', ''));
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyDownFunction.bind(this), false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyDownFunction, false);
  }

  render() {
    return this.state.tiles.map(tile =>
      <div
       className="game-tile"
       key={'' + tile.x + tile.y}>
        {/* {JSON.stringify(tile)} */}
        {tile.value}
      </div>
    )
  }

}

export default GameBoard;
