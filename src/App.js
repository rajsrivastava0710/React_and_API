import React from 'react';
import './App.scss';


import { Switch , Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar.component';
import OrderPage from './pages/Order-Page/order_page.component.jsx';
import ProfilePage from './pages/Profile-Page/profile_page.component.jsx';
// import ProfilePage from './components/Profile-Page/profile_page.component.jsx';

const App = () => (
  <div className='page-container'>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={ ProfilePage }/>
      <Route path='/orders' component= { OrderPage }/>
    </Switch>
  </div>
 
)

export default App;