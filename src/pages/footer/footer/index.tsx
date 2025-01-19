import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p>
            We are an e-commerce platform offering a wide range of products.
            Our mission is to provide the best quality at affordable prices.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="space-y-2">
            <li>Email: <a href="Cyber@gmail.com" className="text-blue-400">Cyber@gmail.com</a></li>
            <li>Phone: <a href="tel:+995 597 61 06 15" className="text-blue-400">+995 597 61 06 15</a></li>
            <li>Address: Georgia,Tbilisi, Rustaveli Avenue 10</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <ul className="space-y-2">
            <li><a href="#shipping" className="text-blue-400">Shipping Information</a></li>
            <li><a href="#returns" className="text-blue-400">Returns & Exchanges</a></li>
            <li><a href="#payment" className="text-blue-400">Payment Methods</a></li>
          </ul>
        </div>

        <div className="space-y-4 flex flex-col gap-[3rem]">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className="flex space-x-6">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4 mt-10">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 Ecommerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
