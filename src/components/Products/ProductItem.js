import React from 'react'

const ProductItem = ({product, addProductToCart}) => (
    <div class="siimple-card" style={{maxWidth: '300px'}}>
        <div class="siimple-card-body">
            <div className="siimple-card-header">
                <div className="card-header__title">
                    <span>{product.name}</span>
                    <span className="siimple-tag siimple-tag--red">
                        ${product.unitPrice}
                    </span>
                </div>
            </div>

            <div className="siimple-card-body">
                <img src={product.image} alt="" />
            </div>

            <div className="siimple-card-footer">
                {
                    product.unitsInStock !== 0 
                    ? (<button
                        className="siimple-btn siimple-btn--grey"
                        onClick={
                            addProductToCart.bind(this, product)
                        }
                        >
                            +
                        </button>)
                    : (
                        'Item is out of stock'
                    )
                }
            </div>
        </div>
    </div>     
)

export default ProductItem