import React, { useState } from "react";
import Input from "./input";
import TextArea from "./textArea";
import { z } from "zod";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import SocialMediaLinks from "./socialMediaLinks";



const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Zod ვალიდაციის სქემა
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Mail is incorrect"),
    message: z.string().min(10, "The message must includes min 10 symbols"),
  });

  // ფორმის შევსების ფუნქცია
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Zod ვალიდაცია
    const result = schema.safeParse(formData);

    if (!result.success) {
      const newErrors: { name: string; email: string; message: string } = {
        name: "",
        email: "",
        message: "",
      };

      result.error.errors.forEach((err) => {
        newErrors[err.path[0] as keyof typeof newErrors] = err.message; // type assertion
      });

      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      {/* Contact Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
         Contact
        </h1>
        <p className="text-lg text-gray-600">
        We are always ready to help you and provide you with information about our products.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
      <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacts</h2>
    <div className="space-y-4">
      {/* Phone */}
      <div className="flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h18M3 12h18M3 19h18"
          />
        </svg>
        <span className="text-lg">+995 555 555 555</span>
      </div>
      {/* Email */}
      <div className="flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12l-8-8m0 0L5 12m8-8v16"
          />
        </svg>
        <span className="text-lg">info@cyberstore.com</span>
      </div>
      {/* Address */}
      <div className="flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4h4V3h5V1H9c-1.11 0-2 .89-2 2zm7 9v4H5V8H3V6l3-3 3 3h5l3 3v2h-2z"
          />
        </svg>
        <span className="text-lg">Tbilisi, Rustaveli Avenue 10</span>
      </div>
      {/* Working Hours */}
      <div className="flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 6h8m-4 0v12"
          />
        </svg>
        <span className="text-lg">Mon-Fri: 9:00 AM - 6:00 PM</span>
      </div>
      {/* Social Media */}
      <div className="flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 2a2 2 0 01-2 2h-8a2 2 0 01-2-2m10 20h-8m12-18a10 10 0 11-20 0m10 18v-2"
          />
        </svg>
        <div className="flex space-x-4">
      <a
        href="https://facebook.com"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://twitter.com"
        className="text-blue-400 hover:text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com"
        className="text-pink-500 hover:text-pink-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
    </div>
      </div>
    </div>
  </div>

        {/* Map Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Location</h2>
  <iframe
    className="w-full h-64 rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.732912897357!2d44.78335111592652!3d41.72164000776259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446cd122bded1b%3A0x89d55bde5efeb78b!2z0J_QsNCy0LzQu9G_0YUg0YPQs9Cz0YPRgtC-0LPQviD0!5e0!3m2!1sen!2sus!4v1678217392279!5m2!1sen!2sus"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

      </section>

      {/* Contact Form Section */}
      <section className="bg-white p-6 shadow-md max-w-[70rem] mx-auto rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Send us a message.
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder=" Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            id="email"
            label="E-maill"
            type="email"
            placeholder="Enter emaill address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextArea
            id="message"
            label="Message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
      {/* <section className=" m-10 ">
        <SocialMediaLinks/>
      </section> */}
    </div>
  );
};

export default Contact;
