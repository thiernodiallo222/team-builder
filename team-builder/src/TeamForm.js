import React, { useState } from 'react'
import './App.css';
export default function TeamForm() {

    const [user, setUser] = useState({ name: "", email: "", role: "" });
    const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };


    const handleSubmit = (event) => {
     event.preventDefault();
        console.log(user.name);
        console.log(user.email);
        console.log(user.role);
  };

    
    return (
        <div className ='form-input'>
            <form >
                    <input onChange={event => handleChange(event)} name='name' type='text' placeholder='Name' />
                    <input onChange={event => handleChange(event)} name='email' type='email' placeholder='Email' />
                    <input onChange={event => handleChange(event)} name='role' type='text' placeholder='Role' />
                <button className='submit-button' onSubmit={() => handleSubmit()} > Submit</button> 
                </form>
                
        </div>


    )
}
