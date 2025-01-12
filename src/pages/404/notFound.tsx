export default function NotFound() {
  return (
    <div className="min-h-[100vh]  w-[100vw]  flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          404
        </h1>
        <p className="text-xl mt-4">
          Page Not Found
        </p>
        <p className="mt-2 text-lg">
          Oops! The page you are looking for
          doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
