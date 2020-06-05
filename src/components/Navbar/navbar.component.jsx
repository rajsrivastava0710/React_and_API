import React from 'react';
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom';

import './navbar.style.scss';

const Navbar = ({location}) => (
    <div className='navbar'>
        {
            location.pathname === '/'?
            <div style = {{background:'#8fe58f'}}><Link to='/'>My Profile</Link></div>
            :
            <div><Link to='/'>My Profile</Link></div>
        }
        {
            location.pathname === '/orders'?
            <div style = {{background: '#8fe58f'}}><Link to='/orders'>My Orders</Link></div>
            :      
            <div><Link to='/orders'>My Orders</Link></div>
        }
    </div>
)

export default withRouter(Navbar);