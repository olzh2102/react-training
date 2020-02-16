import React from 'react'

const CartItem = ({context}) => {
    const leftInStock = function(unitsInStock, quantity) {
        if((unitsInStock - quantity) === 0) {
            return 'No more in Stock'
        }
        return unitsInStock - quantity
    }
    
    return (
        <ul>
            {
            context.cart.map(cartItem => (
                <li key={cartItem.productID}>
                    <div>
                        <strong>{cartItem.name}</strong> - ${cartItem.unitPrice} (
                        {cartItem.quantity})
                        <span>({leftInStock(cartItem.unitsInStock, cartItem.quantity)} in Stock)</span>

                        {}
                        <button
                            className="siimple-btn siimple-btn--grey"
                            onClick={
                                context.addProductToCart.bind(this, cartItem)
                            }
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={context.removeProductFromCart.bind(
                                this,
                                cartItem.productID
                            )}
                        >
                        Remove from Cart
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CartItem