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
import PrivateRoute from './components/common/PrivateRoute'
import Customers from './components/stores/Customers'
import Shipment from './components/stores/Shipment'
import Products from './components/stores/Products'
import ProductAdd from './components/stores/ProductAdd'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './styles/main.scss'
class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
      <Provider store={store}>
        <Router>
          <Header />
        <Switch>
      <main>
        <PrivateRoute exact path="/" component={Customers} />
        <PrivateRoute exact path="/shipments" component={Shipment} />
        <PrivateRoute exact path="/products" component={Products} />
        <PrivateRoute exact path="/products/add" component={ProductAdd} />
        < Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </main>
      </Switch>
      <Footer />
      </Router>
      </Provider>
    )
  }
}
export default App