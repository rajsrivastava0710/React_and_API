import React, { Component } from 'react';
import './order_page.style.scss';
import { calculateTotal } from '../../utils/order/order.utils.js';

import OrderDetails from '../../components/Order-Details/order_details.component.jsx';

class OrderPage extends Component{
    constructor(){
        super();
        this.state = {
            data:{
                user:{},
                items:[],
                restaurant:{}
            }
        }
    }
    componentDidMount(){
        fetch('https://indapi.kumba.io/webdev/assignment',{mode:'cors'})
        .then(response => response.json())
        .then(apiData => this.setState({data:apiData}))
    }
    render(){

       const { data } = this.state;
       const {restaurant, items, order_id} = data;

        return(
        <div className = 'order-page-container'>
        <div className='order-id'><strong>Order Id:</strong>{order_id}</div>
        <div className= 'orders-list-container'>
            <div className = 'single-order-detail-container-header'>
                <div>Name</div>
                <div>Category</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Tax</div>
            </div>
        {
        items.map((item, index) => (            
         <OrderDetails item = {item} />
         // No unique key available in the API
        ))
        }
        </div>
        <div className= 'total-counts-container'>
        <div><strong>Total Quantity: &nbsp;</strong>
        {   
            calculateTotal(items,'quantity')
        }
        </div>
        <div><strong>Normal Cost: &nbsp;</strong>
        &#8377;
        {
            calculateTotal(items,'quantity','price')
        }
        </div>
        <div><strong>Taxed: &nbsp;</strong>
        &#8377;
        {
            calculateTotal(items,'quantity','price','tax_pct')
        }
        </div>
        <div><strong>Net Price: &nbsp;</strong>
        &#8377;
        {
            calculateTotal(items,'quantity','price') - calculateTotal(items,'quantity','price','tax_pct')
        }
        </div>
        </div>
        <div className= 'restaurant-details-container'>
        <div className= 'heading'><strong>Restaurant Details</strong></div>
        <div className= 'details'>
            <div><strong>Name: </strong> {restaurant.name}</div>
            
            <div><strong>State: </strong> {restaurant.state}</div>
            
            <div><strong>Street: </strong> {restaurant.street}</div>

            <div><strong>ZipCode: </strong> {restaurant.zipcode}</div>

        </div>
        </div>
    </div>
        )
    }
}

export default OrderPage;