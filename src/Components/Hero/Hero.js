import React from "react";
import { Link } from "react-router-dom";
import hero from "./../../Assets/hero.jpg";
import arrow from "./../../Assets/arrow.png";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero relative">
      <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-white mb-4 text-lg md:text-xl lg:text-5xl font-semibold bg-opacity-50 p-4 rounded-lg max-w-2xl mx-auto">
            Lego dünyasına adım atın ve hayal gücünüzü serbest bırakın.
          </h1>
          <p className="text-white max-w-lg mx-auto md:text-center text-sm md:text-lg lg:text-xl">
            "Seashell ile keşfetmeye hazır olun! Yaratıcılığınızı ve öğrenme
            deneyiminizi bir araya getiren eğlenceli ve yenilikçi
            çözümlerimizle, her adımda heyecan verici bir yolculuk sizi
            bekliyor."
          </p>
          <Link
            to="/more-products"
            onClick={scrollToTop}
            className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 mt-6 rounded-full text-xs md:text-sm inline-flex items-center"
          >
            Şimdi Keşfet
            <img src={arrow} alt="Arrow" className="w-3 md:w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
