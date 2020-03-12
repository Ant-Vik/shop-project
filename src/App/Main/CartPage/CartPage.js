import React from 'react'
import CartTotal from '../../../features/Cart/CartTotal';
import CartProductList from '../../../features/Cart/CartProductList';
import CartProductListItemExtended from '../../../features/Cart/CartProductListItemExtended';

const CartPage = ({
    productsInCart,
    removeProductFromCart
}) => { 
    return(
        <div>
            <h1 className="page-title">Cart Page</h1>
            <CartProductList 
                productsInCart={productsInCart}
                CartListItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}

            />
            <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}


export default CartPage