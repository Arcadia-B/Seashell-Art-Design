import React from "react";
import about from "../../Assets/about.jpg";

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row pt-12 container mx-auto items-center">
      <div className="md:flex-1 bg-cover bg-center">
        <img src={about} alt="" className="rounded-md" />
      </div>
      <div className="md:flex-1 p-5">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-center">
          Hakkımızda
        </h1>
        <p className="text-center md:text-left">
          Biz, teknoloji ve yenilik tutkusuyla bir araya gelmiş bir ekip olarak,
          kullanıcılarımıza en iyi dijital deneyimleri sunmayı hedefliyoruz.
          2010 yılında kurulan şirketimiz, o zamandan bu yana müşterilerimizin
          ihtiyaçlarına yönelik yaratıcı çözümler geliştiriyor ve onların
          dijital dünyada başarılı olmalarını sağlıyoruz. Müşteri memnuniyeti ve
          kaliteli hizmet anlayışıyla hareket eden firmamız, sürekli olarak
          gelişmekte ve yeni teknolojilere adapte olmaktadır. Ekibimizdeki her
          birey, alanında uzmanlaşmış ve en son trendleri takip eden
          profesyonellerden oluşmaktadır. Siz de bizimle birlikte çalışarak
          dijital dünyada başarıya ulaşmak istiyorsanız, bize katılın ve
          birlikte büyüyelim.
        </p>
        <div className="flex justify-center md:text-left mt-6"></div>
      </div>
    </div>
  );
};

export default About;
