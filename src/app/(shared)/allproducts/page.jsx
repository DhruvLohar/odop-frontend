import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Handcrafted Wooden Table',
    price: '₹500',
    seller: 'John Doe',
    image: '/districtArtisanImage1.png', 
  },
  {
    id: 2,
    title: 'Organic Cotton Blanket',
    price: '₹500',
    seller: 'Sahil Doe',
    image: '/districtArtisanImage2.png', 
  },
  {
    id: 3,
    title: 'Vintage Ceramic Vase',
    price: '₹500',
    seller: 'Mohit Doe',
    image: '/districtArtisanImage3.png', 
  },
  
  
];

const ProductCard = ({ image, title, price, seller }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
    <div className="relative w-full h-56">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg font-semibold mb-2">{price}</p>
      <p className="text-gray-600">Seller : {seller}</p>
    </div>
  </div>
);

const ProductPage = () => {
  return (
    <div className="m-3 p-4">
      <h1 className="text-3xl font-bold mb-6">Explore all Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            seller={product.seller}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
