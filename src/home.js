import React from 'react'
//import { Link } from 'react-router-dom'
import image from './facebook.jpg'
import image1 from './google.jpg'
import image2 from './twitter.jpg'
function Home ()  {
  return (
    <div className='icon'>
       <button className='new'><img src={image} alt="u"/></button>&nbsp; 
      <button className='new'><img src={image1} alt="u"></img></button>&nbsp;
      <button className='new'><img src={image2} alt="u"></img></button>&nbsp;
     
    </div>
    
  )
}


export default Home;