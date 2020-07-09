import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'

import { Provider} from 'react-redux'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <main>
        <h1>Hey there</h1>
      </main>
      </Provider>
    )
  }
}
export default App