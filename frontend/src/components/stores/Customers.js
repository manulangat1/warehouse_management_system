import React from 'react'
import { connect } from 'react-redux'
import { loadCustomers} from '../../actions/customer'
class Customers extends React.Component{
    componentDidMount(){
        this.props.loadCustomers()
    }
    render(){
        return(
            <section id="customer">
            <h1>Customers</h1>
            <div className="container">
                <div className="grid">     
            {
                this.props.customers.map(customer => (
                    <div key={customer.id}>
                        <h1>{customer.firstname}</h1>
                        <p>{customer.lastname}</p>
                    </div>
                ))
            }
            </div>
            </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    customers:state.customers.customers
})
export default connect(mapStateToProps,{loadCustomers})(Customers) 