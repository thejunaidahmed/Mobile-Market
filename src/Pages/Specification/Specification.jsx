import React from 'react'
import './Specification.css'
import { useSelector } from 'react-redux'

function Specification() {

    const cartItems = useSelector(state => state.cart)

    return (
        <div className='spec'>
            <h1>Product Specifications</h1>
            {cartItems.length === 0 ? (
                <div className="empty-spec">
                    <h2>No products in cart</h2>
                    <p>Add some products to see their specifications!</p>
                </div>
            ) : (
                <div className="spec-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="spec-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="price">Rs. {parseInt(item.price).toLocaleString()}</p>
                                <div className="specs">
                                    <p><strong>Display:</strong> {item.display}</p>
                                    <p><strong>Processor:</strong> {item.processor}</p>
                                    <p><strong>Protection:</strong> {item.protection}</p>
                                    <p><strong>Storage:</strong> {item.storage}</p>
                                    <p><strong>GPU:</strong> {item.gpu}</p>
                                    <p><strong>Rear Camera:</strong> {item.rearCamera}</p>
                                    <p><strong>Front Camera:</strong> {item.frontCamera}</p>
                                    <p><strong>Battery:</strong> {item.battery}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Specification