import React from 'react'

import {connect} from 'react-redux'
import { Link,NavLink } from 'react-router-dom'
import { logout } from '../../actions/auth'


class Header extends React.Component {
    
    render(){
        const authLinks = (
            <ul>
            <li> <NavLink to="/">Home</NavLink> </li>
            {/* <li> <NavLink to="/register">Register</NavLink> </li> */}
            <button onClick={this.props.logout} className="primary-btn" >Logout</button>
            </ul>
        )
        const guestLinks = (
            <ul>
            <li> <NavLink to="/login">Login</NavLink> </li>
            <li> <NavLink to="/register">Register</NavLink> </li>
            </ul>
        )
        return(
            <header>
                <h1>Warehouse management System</h1>
                {this.props.isAuthenticated ? authLinks :guestLinks }
            </header>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{logout})(Header)