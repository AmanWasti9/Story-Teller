import React from 'react';

export default function Navbar() {
  return (
    <div style={{
        textAlign:'center'
    }}>
      <h1>Aman - The Story Teller</h1>
      <hr />
      <ul style={{
        listStyle:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'50px'
      }}>
        <li className='c-p'>Home</li>
        <li className='c-p'>Ask Story</li>
        <li className='c-p'>Contact</li>
      </ul>
    </div>
  );
}
