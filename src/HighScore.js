import React, { Component } from 'react';

class HighScore extends Component {
  render() {
    return (
      <p>
        Current Player : {this.props.name} <br/>
        High Score :
      </p>
    );
  }

}

export default HighScore;
