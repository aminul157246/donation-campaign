
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-2xl font-semibold text-red-600 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-700 mb-4">
            An error occurred while loading the page. Please try again later.
          </p>
          
          
        </div>
      </div>
    );
};

export default ErrorPage;