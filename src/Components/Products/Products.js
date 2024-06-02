import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import "./Products.css";
import product1 from "../../Assets/product-1.jpg";
import product2 from "../../Assets/product-2.jpg";
import product3 from "../../Assets/product-3.jpg";
import product4 from "../../Assets/product-4.jpg";
import arrow from "../../Assets/arrow.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ürün 1",
      originalPrice: 39.99,
      price: 29.99,
      image: product1,
    },
    {
      id: 2,
      name: "Ürün 2",
      originalPrice: 29.99,
      price: 19.99,
      image: product2,
    },
    {
      id: 3,
      name: "Ürün 3",
      originalPrice: 29.99,
      price: 19.99,
      image: product3,
    },
    {
      id: 4,
      name: "Ürün 4",
      originalPrice: 39.99,
      price: 29.99,
      image: product4,
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <div className="more-button mt-4">
        <Link
          to="/more-products"
          onClick={scrollToTop}
          className="bg-purple-600  text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-purple-700"
        >
          Daha Fazla Ürün
          <img
            src={arrow}
            className="w-3 md:w-4 inline-block text-center ml-1  "
          />
        </Link>
      </div>
    </div>
  );
};

export default Products;
