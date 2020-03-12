import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from './../../App/Main/Products/products'

const CartTotal = ({
    productsInCart,
    productsMap = getProductsMap(products)
}) =>{

    return(
        <div>
            Total : {
                keys(productsInCart).reduce((total,productsId)=>(
                    total + (productsMap[productsId].price * productsInCart[productsId])
                ),0)
            } $ 
        </div>
    )
}

export default CartTotal