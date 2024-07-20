// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/api/v1/products');
     const data = response.data.map(item => ({
        ...item,
        id: item._id,
        _id: undefined  
      }))
      setProducts(data);
      
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single product by ID
  const fetchProductById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // // Use useEffect to fetch all products on initial render
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProductById,
  };
};

export default useProducts;
