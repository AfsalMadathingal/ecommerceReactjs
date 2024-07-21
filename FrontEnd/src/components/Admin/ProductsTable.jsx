import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import useProducts from "../../Hook/UseProducts";
import ConfirmAlert from "./ConfirmAlert";


const ProductsTable = () => {

    const {products, fetchProducts,deleteProductById} = useProducts();
    const [isAlertVisible,setIsAlertVisible] = useState()



  const handleConfirm = async ({id}) => {
    deleteProductById(id);
  };

  const handleCancel = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="flex-grow p-6  bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg text-white shadow-md rounded-lg  ">
      <div className="flex justify-between mb-4 bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg text-white shadow-md rounded-lg h-10 items-center">
        <h2 className="text-2xl font-semibold">All Products</h2>
        <Button onClick={handleCancel}>
          Add Product
        </Button>
      </div>
     
      <table className="w-full text-left table-auto rounded-lg">
        <thead>
          <tr className="">
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2 hidden md:table-cell">Price</th>
            <th className="px-4 py-2 hidden md:table-cell">Description</th>
            <th className="px-4 py-2  md:table-cell">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            
            <tr
              key={index}
              className="hover:bg-gray-800 hover:text-white  transition duration-200  cursor-pointer "
            >
            <td  className="border-b px-4 py-2 hidden md:table-cell"><img className="w-24 h-full  " src={product.image} alt="product" /></td>
              <td className="border-b px-4 py-2">{product.name}</td>
              <td className="border-b px-4 py-2 hidden md:table-cell">
                {product.price}
              </td>
              <td className="border-b px-4 py-2 hidden md:table-cell">
                {product.description}
              </td>
              <td className="border-b px-4 py-2   md:table-cell ">
                {/* <productDetailsModal
                  setSelectedproduct={setSelectedproduct}
                  product={product}
                  setViewing={setViewing}
                  setEditing={setEditing}
                /> */}

                <Button
                  className="ml-2"
                  onClick={() => setIsAlertVisible(true)}
                  color="danger"
                >
                  Delete product
                </Button>
                {isAlertVisible && (
                  <ConfirmAlert
                    message="Are you sure you want to proceed?"
                    onConfirm={() => handleConfirm(product)}
                    onCancel={handleCancel}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
