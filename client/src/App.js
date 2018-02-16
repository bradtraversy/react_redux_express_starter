import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Streamers from './components/Streamer/streamers'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">Twitch.tv Viewer</h1>
          </header>
          <Streamers/>
        </div>
      </Provider>
    )
  }
}

export default App
