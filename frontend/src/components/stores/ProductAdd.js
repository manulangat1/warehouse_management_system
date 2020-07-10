import React from 'react'

import {connect } from 'react-redux'
import { addProduct} from '../../actions/products'
class ProductAdd extends React.Component{
    state = {
        warehouse:1,
        name:'',
        price:null,
        quantity:null
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { name,price,quantity,warehouse } = this.state
        console.log(name,price,quantity,warehouse)
        const newProduct = {
            name,price,quantity,warehouse
        }
        this.props.addProduct(newProduct)
    }
    render(){
        const { name,price,quantity } = this.state
        return(
            <section>
                <h1>Add Product</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="name" name="name" value={name} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" placeholder="price" name="price" value={price} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" placeholder="quantity" name="quantity" value={quantity} onChange={this.onChange} />
                    </div>
                    <button className="btn-primary">Add</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    products:state.products.products
})
export default connect(mapStateToProps,{ addProduct })(ProductAdd)