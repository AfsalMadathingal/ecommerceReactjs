import React, { useEffect } from "react";
import ProductCard from "../Products/ProductsCard";
import useProducts from "../../Hook/UseProducts";
import ReactLoading from "react-loading";

const FeaturedProducts = () => {
  const { fetchProducts, products, loading } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <ReactLoading
            type={"bars"}
            color={"black"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="py-8 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Featured Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
