import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
 
    <div class="bg-blue-700 w-full h-16 flex justify-between items-center px-4">

    <h1 class="text-white font-bold text-xl">Commerse</h1>
  
    <nav>
      <ul class="flex space-x-4">
        <li>
          <Link to="/" class="text-white hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/men" class="text-white hover:text-gray-200">Men</Link>
        </li>
        <li>
          <Link to="/women" class="text-white hover:text-gray-200">Women</Link>
        </li>
        <li>
          <Link to="/unisex" class="text-white hover:text-gray-200">Unisex</Link>
        </li>
      </ul>
    </nav>
  
  </div>
  
     
   
  );
};

export default Header;
