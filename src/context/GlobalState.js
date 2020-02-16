import React, { useState, useEffect, useReducer } from 'react'

import ShopContext from './shop-context'
import { 
    shopReducer, 
    ADD_PRODUCT, 
    REMOVE_PRODUCT 
} from './reducers'
import { getItems } from '../services/api'

const GlobalState = ({children}) => {
    const [items, setItems] = useState([])
    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
        
    useEffect(() => {
        async function fetchItems() {
            const items = await getItems()
            setItems(items.products)
        }
        fetchItems()
    }, [])

    const addProductToCart = product => {
        dispatch({ 
            type: ADD_PRODUCT, 
            product: product 
        })
    }

    const removeProductFromCart = productId => {
        dispatch({ 
            type: REMOVE_PRODUCT, 
            productId: productId 
        })
    }

    return (
        <ShopContext.Provider
            value={{
                items,
                cart: cartState.cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export default GlobalState
