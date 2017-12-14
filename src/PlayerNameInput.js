import React, { Component } from 'react';

class PlayerNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.name};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Player Name:
          <input type="text" value={this.state.name} onChange={this.props.onChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default PlayerNameInput;
