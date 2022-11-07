import React, { useContext } from 'react'
import { UserContext } from '../Usercontext';

function Home() {
  const {reg} = useContext(UserContext);
  return (

    <div className='home'>
    <div className='profile-box'>
       <img src='https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png' className='profile-pic' alt="profile"/>
       <h4>Name: {reg.name}</h4>
       <h4>Email id: {reg.email}</h4>
       <h4>Phone Number: {reg.phoneno}</h4>
       
    </div>          
  </div>
 
  )
}

export default Home