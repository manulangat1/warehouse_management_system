import React from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
import {loginUser} from '../../actions/auth'


class Login extends  React.Component {
    state = {
        username:'',
        password:''
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        console.log(this.state.username)
        const {username,password} = this.state
        this.props.loginUser(username,password)
    }
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const {username,password} = this.state
        return (
        <section id="login">
            <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} placeholder="Username" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={password} placeholder="password" onChange={this.onChange}/>
                </div>
                <button className="primary-btn">Login</button>
            </form>
            </div>
        </section>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{loginUser})(Login)