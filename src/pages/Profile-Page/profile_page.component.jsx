import React, { Component } from 'react';

import './profile_page.style.scss';

import UserDetails from '../../components/User-Details/user_details.component.jsx';
class ProfilePage extends Component{
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }
    componentDidMount(){
        console.log('Mounted');
        fetch('https://indapi.kumba.io/webdev/assignment',{mode:'cors'})
        .then(response => response.json())
        .then(apiData => this.setState({data:apiData}))
    }
    render(){

       const { data } = this.state;
       const {user} = data;
        return(
        <div className = 'profile-page-container'>        
        {
        user && Object.keys(user).length>0?
        <UserDetails key = { user.id } user = { user }/>
        :
        null
        }


        </div>
        )
    }
}


export default ProfilePage;