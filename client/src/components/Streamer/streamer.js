import React, { Component } from 'react';

class Streamer extends Component {



  static defaultProps = {
    streamer: {}
  }


  render() {
    console.log("Im trying to render!");
    return (
      <div>
        <h1> I am a Streamer! My name is {this.props.streamer.display_name}</h1>
      </div>
    );
  }
}

export default Streamer;
