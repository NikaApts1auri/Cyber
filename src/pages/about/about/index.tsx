
export default function About() {
  return (
    <div className="min-h-screen pt-[15rem] items-center bg-gray-50 py-10 px-6 md:px-20">
      {/* Title Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          ჩვენი ისტორია
        </h1>
        <p className="text-lg text-gray-600">
          ჩვენ გთავაზობთ მაღალხარისხიან ტექნოლოგიურ პროდუქტებს, რომელიც
          დააკმაყოფილებს თქვენი ყოველდღიური საჭიროებების ყველა ასპექტს.
        </p>
      </section>

      {/* Mission Section */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          ჩვენი მისია
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          ჩვენი მიზანია მომხმარებლებს შევთავაზოთ უახლესი ტექნოლოგიები,
          მაქსიმალური კომფორტი და ხარისხი. ამასთან, ვიქმნით უსაფრთხო და
          საიმედო პლატფორმას, სადაც შეგიძლიათ შეიძინოთ უახლესი მოდელები,
          რომლებიც ასრულებს ყველა თქვენს საჭიროებას.
        </p>
      </section>

      {/* Product Categories Section */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          ჩვენი პროდუქცია
        </h2>
        <p className="text-lg text-gray-600">
          ჩვენ გვაქვს ფართო არჩევანი სხვადასხვა კატეგორიაში:
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">ტელეფონები</h3>
            <p className="text-gray-600">ყველაზე ახალი მოდელები უახლესი ტექნოლოგიებით.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">ტაბლეტები</h3>
            <p className="text-gray-600">მაღალი ეკრანის ხარისხი და მაღალი გამძლეობა.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">სხვადასხვა ტექნიკა</h3>
            <p className="text-gray-600">კომპიუტერები, აქსესუარები, ჭკვიანი საათები და სხვა.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">დაგვიკავშირდით</h2>
        <p className="text-lg text-gray-600">
          თუ გაქვთ შეკითხვები ან გსურთ მეტი ინფორმაცია ჩვენი პროდუქციის შესახებ, გთხოვთ
          დაგვიკავშირდეთ.
        </p>
        <a
          href="mailto:info@techstore.com"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          შეატყობინეთ მოგვიანებით
        </a>
      </section>
    </div>
  );
}
