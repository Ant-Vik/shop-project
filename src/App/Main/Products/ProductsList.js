import React from 'react'

import './Products.css'

import ProductListItem from './ProductListItem'
import products from './products'

const ProductsList = ({
    addProductToCart
}
) => {
    return(
        <div>
            <h1 className= "page-title">ProductsList</h1>
            <div className="row">
            {
                products.map(({
                    id,
                    name,
                    description,
                    capacity,
                    type,
                    price,
                    image,
                })=>(
                    <div className="col-lg-6" key={id}>
                        <ProductListItem
                            image={image}
                            name={name}
                            description={description}
                            capacity={capacity}
                            type={type}
                            price={price}
                            addProductToCart={addProductToCart}
                            id={id}
                        />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ProductsList