// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2><Link to="/">Home</Link> / <Link to="/About">About</Link></h2>    
      <ul>
        <li><Link to="/Product/">Go to Product </Link></li>
        <li><Link to="/product/1">Go to Product 1</Link></li>
        <li><Link to="/product/2">Go to Product 2</Link></li>
        <li><Link to="/user/42">Go to User 42</Link></li>
        <li><Link to="/user/100">Go to User 100</Link></li>
        
      </ul>
    </div>
  );
}

export default Home;
