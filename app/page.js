import Image from "next/image";
import bg from "../public/assets/snow.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-200">
      <div className="flex justify-center flex-col items-center p-10">
        <h1 className="text-4xl text-purple-600 font-bold mb-10">About Us</h1>
        <div className="flex custom:flex-row flex-col justify-center gap-8 w-full max-w-6xl">
          {/* About Us Cards */}
          <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 rounded-md shadow-lg">
            <span className="text-xl font-semibold text-purple-600 mb-2">Kurumsal</span>
            <span className="text-lg font-semibold text-gray-400 mb-4">MİSYON</span>
            <p className="text-gray-200">
              Bahçeşehir Üniversitesi bünyesinde kurulmuş olan “BlockchainIST (Blockchain İstanbul) Center”, Blockchain
              teknolojisi alanında faaliyet gösteren, Türkiye'nin ilk üniversite araştırma ve geliştirme merkezidir.
              Merkezimiz, başta üniversiteler olmak üzere tüm sivil toplum kuruluşlarına, özel ve kamu sektöründe faaliyet
              gösteren firmalara gerek danışmanlık gerekse eğitim hizmeti sunmaktadır.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 rounded-md shadow-lg">
            <span className="text-xl font-semibold text-purple-600 mb-2">Gelecek</span>
            <span className="text-lg font-semibold text-gray-400 mb-4">VİZYON</span>
            <p className="text-gray-200">
            LinkedIn'e göre, “Blockchain”, 2020'de firmalar tarafından en çok ihtiyaç duyulan 10 teknik beceri listesinde
             1. sırada yer almaktadır. “BlockchainIST Center”, Blockchain teknolojisi ile ilgilenen herkesi eğitmeyi, firmalar
              ve kamu kurumları için stratejik öncelikleri tasarlamayı ve yetiştirdiği Blockchain uzmanları ile dünyayı dönüştürmeyi
               amaçlamaktadır.
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Section 1 */}
      <div className="relative h-screen bg-white  bg-center bg-clip-content bg-fixed bg-no-repeat" style={{ backgroundImage: `url("/assets/crypto2.jpg")` }}>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Section 1</h1>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="p-10 bg-gray-800 text-gray-200 flex flex-1 justify-center items-center">
        <h2 className="text-3xl text-purple-600 mb-0">Content for Section 1</h2>
        <p className="mb-4">
        </p>
      </div>

      {/* Parallax Section 2 */}
      <div className="relative h-screen bg-fixed   bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url("/assets/crypto1.jpg")`}}>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Section 2</h1>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="p-10 bg-gray-800 text-gray-200 flex justify-center items-center">
        <h2 className="text-3xl text-purple-600 mb-0 ">Content for Section 2</h2>
        <p className="mb-4">
        </p>
      </div>

      {/* Parallax Section 3 */}
      <div className="relative h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("/assets/crypto.jpg")` }}>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Section 3</h1>
        </div>
      </div>

      {/* Content Section 3 */}
      <div className="p-10 bg-gray-800 text-gray-200 justify-center items-center flex ">
        <h2 className="text-3xl text-purple-600 mb-0">Content for Section 3</h2>
        <p className="mb-4">

        </p>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col justify-center items-center p-10 bg-gray-900">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Contact Us</h1>

        <div className="flex custom:flex-row flex-col gap-3 w-full ">
          {/* Location Section */}
          <div className=" bg-white p-4 rounded-md shadow-lg" style={{flex:4}}>
            <h2 className="text-xl font-semibold text-black mb-4">Our Location</h2>
            <iframe
            className="border-2 border-white rounded-lg"
              src="https://maps.google.com/maps?q=Bahçeşehir%20Üniversitesi,41.04235516109231,29.00928055767128&z=15&output=embed"
              width="100%"
              height="300px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className=" bg-gray-800 text-gray-200 p-4 rounded-md shadow-lg" style={{flex:1}}>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <p>Email: contact@example.com</p>
            <p>Address: Bahçeşehir Üniversitesi, Beşiktaş, Istanbul, Turkey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
