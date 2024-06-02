import React from "react";
const ProductItem = ({ product }) => {
  return (
    <div className="product bg-white rounded-lg shadow-md overflow-hidden w-64 h-80 mx-4 my-8 transition-transform duration-300 transform hover:-translate-y-2">
      <img
        className="w-full h-2/3 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="product-info p-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-purple-600">
            {product.name}
          </h2>
          <div className="flex justify-center items-baseline space-x-2 mt-2">
            <span className="text-gray-500 line-through">
              {product.originalPrice} $
            </span>
            <span className="text-gray-900 font-bold">{product.price} $</span>
          </div>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            Satın Al
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
