import React from "react";
import msg from "../../Assets/msg.png";
import mail from "../../Assets/email.png";
import phone from "../../Assets/phone.png";
import location from "../../Assets/location.png";
import arrow from "../../Assets/arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Gönderiliyor....");
    const formData = new FormData(event.target);

    formData.append("access_key", "78711bf7-e7b6-4aa1-8f7d-d7d69b26706d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mesaj Başarıyla Gönderildi.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact bg-gray-100 p-8" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="contact-col flex-1 p-4">
          <h3 className="text-2xl font-bold mb-4">
            Mesaj Gönderin{" "}
            <img src={msg} alt="" className="inline-block w-6 h-6 ml-2" />
          </h3>
          <p className="text-gray-700 mb-6">
            Merhaba! Bizimle iletişime geçmek için aşağıdaki iletişim formunu
            kullanabilirsiniz. Size en kısa sürede geri dönüş yapacak ve
            ilgilendiğiniz konular hakkında daha fazla bilgi sağlayacağız.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img src={mail} alt="" className="w-6 h-6 mr-2" />
              by.yunusdeniz@gmail.com
            </li>
            <li className="flex items-center">
              <img src={phone} alt="" className="w-6 h-6 mr-2" />
              +90 538 617 41 27
            </li>
            <li className="flex items-center">
              <img src={location} alt="" className="w-6 h-6 mr-2" />
              İzmit/Kocaeli
            </li>
          </ul>
        </div>
        <div className="contact-col flex-1 p-4">
          <form
            onSubmit={onSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <label className="block text-gray-700 font-bold mb-2">Adınız</label>
            <input
              type="text"
              name="name"
              placeholder="Ad Giriniz"
              required
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <label className="block text-gray-700 font-bold mb-2">
              E-posta adresiniz
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-posta adresinizi giriniz"
              required
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <label className="block text-gray-700 font-bold mb-2">
              Mesajınızı Giriniz
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Mesaj Giriniz"
              required
              className="w-full p-2 mb-4 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Gönder{" "}
              <img src={arrow} alt="" className="inline-block w-4 h-4 ml-2" />
            </button>
          </form>
          <span className="block mt-4 text-gray-700">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
