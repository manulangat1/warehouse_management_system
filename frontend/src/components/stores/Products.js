import React from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../../actions/products'
class Products extends React.Component{
    componentDidMount(){
        this.props.loadProducts()
    }
    render(){
        return(
            <section>
                {
                    this.props.products.map(product => (
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                        </div>
                    ))
                }
            </section>
        )
    }
}
const mapStateToProps = state => ({
    products:state.products.products
})

export default connect(mapStateToProps,{loadProducts})(Products)