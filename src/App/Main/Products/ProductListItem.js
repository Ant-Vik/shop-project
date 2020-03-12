import React,{ Component } from 'react'
import PropTypes from 'prop-types'

import './ProductListItem.css'

class ProductListItem extends Component {


    state = {
        productCount:1,
    }

    onIncrementClick = () => {
        this.setState((prevState)=> ({
            productCount:prevState.productCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState)=> ({
            productCount:prevState.productCount - 1
        }))
    }

    render() {

        const {
            name,
            description,
            type,
            capacity,
            price,
            image,
            addProductToCart,
            id,
        } = this.props

        return(
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt=""/>
                </div>
                <h2 className= "prod uct-title">{name}</h2>
                <div className="product-description">{description}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-features">Type: {type}</div>
                <div className="quantity-input">
                    <button onClick= {this.onDecrementClick}
                    disabled={this.state.productCount <= 1}>-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button onClick={this.onIncrementClick}>+</button>
                </div>
                <div className="product-price">{price} $</div>
                <button className="btn-add-to-cart" onClick={()=>addProductToCart(id,this.state.productCount)}>Add to cart </button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    capacity:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string 
}

ProductListItem.defaultProps ={
    description: 'No description...',
}


export default ProductListItem