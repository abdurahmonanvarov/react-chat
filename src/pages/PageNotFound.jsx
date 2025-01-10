import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary mt-6">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
