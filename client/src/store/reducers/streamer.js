import {GET_STREAMER} from '../actions/constants';

const streamerReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_STREAMER:
        return payload
      default:
        return state
    }
}

export default streamerReducer;
