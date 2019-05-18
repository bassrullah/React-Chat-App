import React, { Component } from 'react'
import { Router, Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import history from './history'
import LandingPage from '../src/containers/LandingPage'
import ChatPage from '../src/containers/ChatPage'
// import Login from '../src/components/Login'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/chatapp' exact component={ChatPage}/>
        </Router>
      </Provider>
    )
  }
}

export default App
