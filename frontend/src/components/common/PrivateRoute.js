import React from 'react'
import { Route,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = ({component:Component,auth,...rest}) => (
    <Route 
     {...rest}
     render={
         props =>{
            if(auth.isLoading){
                return <h2>Loading ...</h2>
            } else if(!auth.isAuthenticated){
                // alert("You need to be authenticated to view this page")
                return <Redirect to='/login' />
            } else{
                return <Component {...props} />
            }
         }
     }
     />
)
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps)(PrivateRoute)