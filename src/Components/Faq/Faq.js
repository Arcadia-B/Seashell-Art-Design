import React from "react";
import faqImage from "../../Assets/faq.jpg";

const Faq = () => {
  return (
    <section
      id="faq"
      className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center py-12 px-4"
    >
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={faqImage}
          alt="FAQ"
          className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-2xl space-y-4">
        <details className="bg-white shadow rounded group">
          <summary className="cursor-pointer list-none px-4 py-4 text-xl text-purple-800 font-medium group-open:bg-purple-800 group-open:text-white transition duration-300 rounded-t-lg">
            İade politikası nedir?
          </summary>
          <div className="px-4 py-4 text-gray-700 bg-white rounded-b-lg">
            Ürünlerimizi 30 gün içerisinde iade edebilirsiniz. İade işlemleri
            için müşteri hizmetlerimizle iletişime geçmeniz yeterlidir.
          </div>
        </details>
        <details className="bg-white shadow rounded group">
          <summary className="cursor-pointer list-none px-4 py-4 text-xl text-purple-800 font-medium group-open:bg-purple-800 group-open:text-white transition duration-300 rounded-t-lg">
            Kargo süresi ne kadardır?
          </summary>
          <div className="px-4 py-4 text-gray-700 bg-white rounded-b-lg">
            Kargo süresi, bulunduğunuz bölgeye göre değişiklik gösterebilir.
            Genellikle 3-5 iş günü içinde teslimat yapılmaktadır.
          </div>
        </details>
        <details className="bg-white shadow rounded group">
          <summary className="cursor-pointer list-none px-4 py-4 text-xl text-purple-800 font-medium group-open:bg-purple-800 group-open:text-white transition duration-300 rounded-t-lg">
            Ürünün kullanım ömrü nedir?
          </summary>
          <div className="px-4 py-4 text-gray-700 bg-white rounded-b-lg">
            Ürünlerimiz kaliteli malzemelerden üretilmiştir ve uzun yıllar
            boyunca güvenle kullanılabilir.
          </div>
        </details>
        <details className="bg-white shadow rounded group">
          <summary className="cursor-pointer list-none px-4 py-4 text-xl text-purple-800 font-medium group-open:bg-purple-800 group-open:text-white transition duration-300 rounded-t-lg">
            Ürünleriniz hangi malzemelerden üretiliyor?
          </summary>
          <div className="px-4 py-4 text-gray-700 bg-white rounded-b-lg">
            Ürünlerimiz yüksek kaliteli ve dayanıklı malzemelerden
            üretilmektedir. Detaylı malzeme bilgisi için ürün açıklamalarını
            inceleyebilirsiniz.
          </div>
        </details>
        <details className="bg-white shadow rounded group">
          <summary className="cursor-pointer list-none px-4 py-4 text-xl text-purple-800 font-medium group-open:bg-purple-800 group-open:text-white transition duration-300 rounded-t-lg">
            Satış sonrası destek hizmetiniz var mı?
          </summary>
          <div className="px-4 py-4 text-gray-700 bg-white rounded-b-lg">
            Evet, satış sonrası destek hizmetimiz mevcuttur. Herhangi bir
            sorunuz veya sorununuz olduğunda bizimle iletişime geçebilirsiniz.
          </div>
        </details>
      </div>
    </section>
  );
};

export default Faq;
