import React from 'react'
//import { Form } from 'react-router-dom';

function First () {
  return (
    
      <div className='t9'>
        <label>Username</label>
        <input type="text" name="t1" required/><br></br>
        <label>Email</label>
        <input type="email" name="em" required/><br></br>
        <label>Password</label>
        <input type="Password" name="pa" required/>
       
      </div>
   
  )
}
export default First;
