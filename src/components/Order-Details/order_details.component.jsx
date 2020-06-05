import React from 'react';
import './order_details.style.scss';

const OrderDetails = ({item:{name, category, price, tax_pct, quantity}, restaurant}) => {
    return(
    <div className= 'single-order-detail-container'>
        <div className='name'>{name}</div>
        <div className= 'category'>{category}</div>
        <div className= 'quantity'>{quantity}</div>
        <div className= 'price'>{price}</div>
        <div>{tax_pct} %</div>
    </div>
    )
    }

export default OrderDetails;