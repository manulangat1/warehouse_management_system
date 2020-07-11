import React from 'react'
import { connect } from 'react-redux'
import { loadShipment } from '../../actions/shipments'
class Shipment extends React.Component{
    componentDidMount(){
        this.props.loadShipment()
    }
    render(){
        return(
            <section>
                {
                    this.props.shipments.map(shipment => (
                        <div key={shipment.id}>
                            <h1>{shipment.customer}</h1>
                            <p>{shipment.destination}</p>
                            {
                                shipment.product && shipment.product.map(product => (
                                    <div key={product.id}>
                                        <h1>{product.name}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </section>
        )
    }
}
const mapStateToProps = state => ({
    shipments:  state.shipments.shipments
})
export default connect(mapStateToProps,{loadShipment})(Shipment)