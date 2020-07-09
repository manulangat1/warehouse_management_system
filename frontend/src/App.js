import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'

import { Provider} from 'react-redux'
import { connect } from 'react-redux'
import { loadUser } from './actions/auth'
import Login from './components/auth/Login'

class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
      <Provider store={store}>
      <main>
        <Login />
      </main>
      </Provider>
    )
  }
}
export default App