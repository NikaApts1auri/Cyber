const LoadingFallback = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      <h2 className="mt-6 text-xl font-semibold text-gray-700">
        Loading, please wait...
      </h2>
    </div>
  );
  
  export default LoadingFallback;
  