// components/page.tsx

import React from 'react';

export interface ProductProps {
  index: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  isNew: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  index,
  productName,
  description,
  image,
  price,
  isNew,
}) => {
  return (
    <div key={index} className="border p-4 rounded shadow">
      <img src={image} alt={productName} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold">{productName}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="font-bold mt-2">${price.toFixed(2)}</p>
      {isNew && <span className="text-green-600">New!</span>}
    </div>
  );
};

export default ProductCard;
