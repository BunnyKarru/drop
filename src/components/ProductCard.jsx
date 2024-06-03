import React from 'react';


const Product = ({ image, name, description, price }) => {
  return (
    <div className="w-64 h-96 rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="h-2/3 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="px-6 py-4 h-1/3">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-red-500 text-lg font-semibold mt-2">{price}</p>
      </div>
    </div>
  );
};



export default Product;
