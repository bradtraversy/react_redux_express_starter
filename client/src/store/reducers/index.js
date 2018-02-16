import {combineReducers} from 'redux';
import customerReducer from './customer';
import streamerReducer from './streamer';

export default combineReducers({
  customers: customerReducer,
  streamer: streamerReducer
})
