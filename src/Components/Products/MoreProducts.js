import React from "react";
import ProductItem from "./ProductItem";
import product5 from "../../Assets/product-5.jpg";
import product6 from "../../Assets/product-6.jpg";
import product7 from "../../Assets/product-7.jpg";
import product8 from "../../Assets/product-8.jpg";
import product9 from "../../Assets/product-9.jpg";
import product10 from "../../Assets/product-10.jpg";
import product11 from "../../Assets/product-11.jpg";
import product12 from "../../Assets/product-12.jpg";

const MoreProducts = () => {
  const moreProducts = [
    {
      id: 5,
      name: "Yeni Ürün 1",
      originalPrice: 49.99,
      price: 39.99,
      image: product5,
    },
    {
      id: 6,
      name: "Yeni Ürün 2",
      originalPrice: 59.99,
      price: 49.99,
      image: product6,
    },
    {
      id: 7,
      name: "Yeni Ürün 3",
      originalPrice: 69.99,
      price: 59.99,
      image: product7,
    },
    {
      id: 8,
      name: "Yeni Ürün 4",
      originalPrice: 79.99,
      price: 69.99,
      image: product8,
    },
    {
      id: 9,
      name: "Yeni Ürün 5",
      originalPrice: 79.99,
      price: 69.99,
      image: product9,
    },
    {
      id: 10,
      name: "Yeni Ürün 6",
      originalPrice: 79.99,
      price: 69.99,
      image: product10,
    },
    {
      id: 11,
      name: "Yeni Ürün 7",
      originalPrice: 79.99,
      price: 69.99,
      image: product11,
    },
    {
      id: 12,
      name: "Yeni Ürün 8",
      originalPrice: 79.99,
      price: 69.99,
      image: product12,
    },
  ];
  return (
    <div>
      <div className="products">
        {moreProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
