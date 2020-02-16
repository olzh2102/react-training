import React, { useContext, useEffect } from 'react'

import ShopContext from '../context/shop-context'
import MainNavigation from '../components/MainNavigation'

import CartItem from '../components/Cart/CartItem'
import './Cart.css'


const CartPage = () => {
    const context = useContext(ShopContext);

    function calculateTotalAmount() {
        if(context.cart.length === 0) {
            return
        }

        const total = context.cart.reduce((acc, cur) => (
            acc + (cur.unitPrice * cur.quantity)
        ), 0)

        return total
    }

    useEffect(() => {
        console.log('context from cart page', context);
    }, []);

    return (
        <>
            <MainNavigation
                cartItemNumber={context.cart.reduce((count, curItem) => (
                    count + curItem.quantity
                ), 0)}
            />
            <main className="cart">
                {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                <CartItem context={context}/>
                {context.cart.length !== 0 && <h1>Total amount: ${calculateTotalAmount()}</h1>}
            </main>
        </>
    )
}

export default CartPage
