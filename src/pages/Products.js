import React from 'react'

import ShopContext from '../context/shop-context'
import MainNavigation from '../components/MainNavigation'

import ProductsList from '../components/Products/ProductsList'
import './Products.css'

const ProductsPage = () => (
    <ShopContext.Consumer>
        {context => (
            <>
                {console.log('context', context)}
                <MainNavigation
                    cartItemNumber={
                        context.cart.reduce((count, curItem) => (
                            count + curItem.quantity
                        ), 0)
                    }
                />

                <div className="siimple-content theme-content siimple-content--large">
                    <div className="siimple-grid">
                        <div className="siimple-grid-row">
                            <ProductsList context={context}/>
                        </div>
                    </div>
                </div>
            </>
        )}
    </ShopContext.Consumer>
)

export default ProductsPage
