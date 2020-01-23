import React from 'react'
import './App.css';

export default function TeamList(props) {
    return (
        <div className='team-list'>
            
            <div>Name : {props.name}</div>
            <div>Email : {props.email}</div>
            <div>Role : {props.role}</div>

            </div>
  )
}
