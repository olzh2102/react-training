import React from 'react'
import ProductItem from './ProductItem'
import './ProductsList.sass'

const ProductsList = ({context}) => (
    context.items.map(product => (
        <div 
            className="siimple-card siimple-grid-col siimple-grid-col--4 siimple-grid-col--lg-6 siimple-grid-col--md-12" 
            key={product.productID}
        >
            <ProductItem 
                product={product} 
                addProductToCart={context.addProductToCart} 
                key={product.productID}
            />
        </div>
    ))
)

export default ProductsList