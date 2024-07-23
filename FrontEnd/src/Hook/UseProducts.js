// src/hooks/useProducts.js
import { useState, useEffect } from "react";
import axios from "axios";
import { adminApi, userApi } from "../api/axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      const data = response.data.map((item) => ({
        ...item,
        id: item._id,
        _id: undefined,
      }));
      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductForAdmin = async (setProductsData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await adminApi.get("/products");
      const data = response.data.map((item) => ({
        ...item,
        id: item._id,
        _id: undefined,
      }));
      setProductsData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      );
      setProduct(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  

  const deleteProductById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await adminApi.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.image);

    try {
       await adminApi.post("/products/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
   
      
      return await fetchProducts();
     
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (formData,id) => {
    setLoading(true);
    setError(null);
    try {
      await adminApi.put(`/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchProducts();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); 
    } 
  };


 
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    product,
    loading,
    error,
    fetchProducts,
    fetchProductById,
    deleteProductById,
    addProduct,
    fetchProductForAdmin,
    editProduct
  };
};

export default useProducts;
