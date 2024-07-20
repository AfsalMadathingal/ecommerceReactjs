import React from 'react';
import ProductCard from '../Products/ProductsCard';

const FeaturedProducts = () => {

    const products = [
        {
          name: 'Clothing Box Subscription',
          category: 'Uncategorized',
          price: '$150.00 / month',
          description: 'A monthly subscription for a curated box of clothing.',
          rating: 0,
          image: 'https://via.placeholder.com/300x300?text=Product+1',
        },
        {
          name: 'DNK Yellow Shoes',
          category: 'Men',
          price: '$120.00',
          onSale: true,
          description: 'Stylish yellow shoes for men.',
          rating: 5,
          image: 'http://localhost:3000/uploads/images/1cb45d28-f90c-4508-b358-21b51052f246.png',
        },
        {
          name: 'DNK Red Shoes',
          category: 'Men',
          price: '$150.00',
          description: 'Comfortable red shoes for everyday wear.',
          rating: 4,
          image: 'https://via.placeholder.com/300x300?text=Product+3',
        },
        {
          name: 'Dark Brown Jeans',
          category: 'Men',
          price: '$150.00',
          description: 'Durable dark brown jeans.',
          rating: 3,
          image: 'https://via.placeholder.com/300x300?text=Product+4',
        },
        {
          name: 'Blue Denim Jeans',
          category: 'Women',
          price: '$150.00',
          description: 'Classic blue denim jeans for women.',
          rating: 4,
          image: 'https://via.placeholder.com/300x300?text=Product+5',
        },
      ];
    
  return (
    <div className="py-8 p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
