import React, { Component } from 'react';
import Streamer from './streamer.js';
import PropTypes from 'prop-types';
import {getStreamers} from '../../store/actions/streamer';
import {connect } from 'react-redux';
import './streamers.css';

class Streamers extends Component {

  static propTypes = {
    streams: PropTypes.array.isRequired
  }

  componentWillMount(){
    this.props.getStreamers(this.props.streamerNames);
  }

  static defaultProps = {
    streamerNames: [
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "freecodecamp",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas"],
    streams: []
  }

  render() {
    return (
      <div>
        <h2>Streamers</h2>
        <ul>
        {
          this.props.streams.map( (stream)=>{
            console.log("Making stream for ", stream);
            return <li><Streamer  streamer={stream}/></li>
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: state.streamer
})

const dispatchToProps = (dispatch) => ({
  getStreamers: (streamerNames) => dispatch(getStreamers(streamerNames))
})

export default connect(mapStateToProps, dispatchToProps)(Streamers);
