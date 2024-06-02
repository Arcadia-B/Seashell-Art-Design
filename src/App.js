import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Products from "./Components/Products/Products";
import MoreProducts from "./Components/Products/MoreProducts";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Faq from "./Components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Title subTitle="Biz Kimiz" title="Neler Yapıyoruz" />
              <About />
              <Title subTitle="Ürünlerimiz" title="Şimdi Al" />
              <Products />
              <Title title="Sıkça Sorulan Sorular" />
              <Faq />
              <Title subTitle="İletişim" title="Mesaj Gönder" />
              <Contact />
            </>
          }
        />
        <Route path="/more-products" element={<MoreProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
