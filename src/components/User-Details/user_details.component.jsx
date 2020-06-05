import React from 'react';
import './user_details.style.scss';
import Image from '../../assets/avatar.jpg';

const UserDetails = ({id,user:{name,address,phone,about,likes,dislikes}}) => (
    <div>
    <div className = 'image-container'>
        <img src={Image} alt='Profile-Pic'/>
    </div>
    <div className= 'details-container'>
    <div className= 'name'>{name}</div>
    <div className= 'about'>{about}</div>
    <div className= 'phone'>{phone}</div>
    <div className='address'>{address}</div>

    </div>
    <div className = 'preference-container'>
    <div className = 'likes-container'>
        <div><strong>Likes</strong></div>
        <div className= 'like-items'>
        {
        likes.map(like => (
            <div>{like}</div>
        ))
        }
        </div>
    </div>
    <div className= 'dislikes-container'>
        <div><strong>Dislikes</strong></div>
        <div className= 'dislike-items'>
        {
        dislikes.map(dislike => (
            <div>{dislike}</div>
        ))
        }
        </div>
    </div>
    </div>
    </div>
)

export default UserDetails;