import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hook/UseProducts";
import ReactLoading from "react-loading";

const ProductDetails = () => {
  const { id } = useParams();
  const { fetchProductById, product } = useProducts();

  useEffect(() => {
    fetchProductById(id);
  }, []);

  return (
    <>
      {!product ? (
        <div className="flex justify-center items-center">
          <ReactLoading
            type={"bars"}
            color={"black"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="container mx-auto p-4  ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-gray-900 text-xl font-bold mr-2">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    {product.price}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{"★".repeat(2)}</span>
                <span className="text-gray-400">{"★".repeat(5 - 2)}</span>
                <span className="text-gray-500 ml-2">(2 reviews)</span>
              </div>
              <p className="text-gray-700 mt-4">{product.description}</p>
              <div className="mt-4">
                <label htmlFor="quantity" className="block text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-16 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button className="mt-4 w-full md:w-auto bg-gray-800 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
              <div className="flex items-center mt-4">
                <button className="text-gray-700 hover:underline mr-4">
                  Add to wishlist
                </button>
                <button className="text-gray-700 hover:underline">Share</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
