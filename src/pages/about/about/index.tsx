
export default function About() {
  return (
    <div className="min-h-screen pt-20 items-center bg-gray-50 py-16 px-8 md:px-24 lg:px-40">
    {/* Title Section */}
    <section className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
       Story
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
        We offer high-quality technological products that meet all aspects of your daily needs.
      </p>
    </section>
  
    {/* Mission Section */}
    <section className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">
         Mission
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
        Our goal is to provide customers with the latest technology, maximum comfort, and quality. Additionally, we create a secure and reliable platform where you can purchase the latest models that meet all your needs.
      </p>
    </section>
  
    {/* Product Categories Section */}
    <section className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">
         Products
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        We have a wide selection in various categories:
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phones</h3>
          <p className="text-gray-600 text-lg">The latest models with cutting-edge technology.</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tablets</h3>
          <p className="text-gray-600 text-lg">High screen quality and durability.</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Other Tech</h3>
          <p className="text-gray-600 text-lg">Computers, accessories, smartwatches, and more.</p>
        </div>
      </div>
    </section>
  
    {/* Contact Section */}
    <section className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">Contact Us</h2>
      <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        If you have any questions or would like more information about our products, please feel free to contact us.
      </p>
      <a
        href="Cyber@gmail.com"
        className="mt-6 inline-block bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 text-lg font-medium"
      >
        Notify Us Later
      </a>
    </section>
  </div>
  
  
  );
}
