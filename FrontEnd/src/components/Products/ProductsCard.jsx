/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();


  return (
    <div
     onClick={() => navigate(`/product/${product.id}`)}
     className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-900 font-bold">{product.price}</span>
        </div>
        <p className="text-gray-500 mt-2">{product.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
          <span className="text-gray-400">{'★'.repeat(5 - product.rating)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
