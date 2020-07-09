import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/auth'

class Register extends React.Component{
    state = {
        username:'',
        email:'',
        password:'',
        password2:''
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e =>{
        e.preventDefault()
        const { username,email,password,password2} = this.state
        if (password === password2){
            console.log("OK")
            this.props.registerUser(username,email,password)
        }
    }
    render(){
        const { username,email,password,password2} = this.state
        return (
        <section>
            <h1>Registration</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" className="form-control" name="username" value={username} onChange={this.onChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Enter email"  className="form-control" name="email" value={email} onChange={this.onChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" className="form-control" name="password" value={password} onChange={this.onChange} />
                </div>
                <div>
                    <label> Confurm Password</label>
                    <input type="password" placeholder="Confirm password" className="form-control" name="password2" value={password2} onChange={this.onChange} />
                </div>
                <button className="primary-btn"> Register</button>
            </form>
        </section>
        )

    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect (mapStateToProps,{registerUser})(Register)