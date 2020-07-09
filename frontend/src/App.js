import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'

import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import { Provider} from 'react-redux'
import { connect } from 'react-redux'
import { loadUser } from './actions/auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
      <Provider store={store}>
        <Router>
        <Switch>
      <main>
        < Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </main>
      </Switch>
      </Router>
      </Provider>
    )
  }
}
export default App