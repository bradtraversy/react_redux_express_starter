import {GET_STREAMER} from '../actions/constants';

export const getStreamers = (streamerNames) => dispatch => {

  return Promise.all( streamerNames.map( name =>{
      return fetch('https://wind-bow.glitch.me/twitch-api/users/'+name)
        .then( res => res.json())
      }
    ))
    .then( streamers => {
      return dispatch({type:GET_STREAMER, payload: streamers})
    })
}
