import { useNavigate } from 'react-router';
import Button from '../components/Shared/Button/Button';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full text-lime-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-gray-800">
          Oops! Something Went Wrong
        </h1>
        <p className="mt-3 text-gray-600 text-sm">
          We couldn’t find the page you’re looking for. Try one of the options below.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Go Back
          </button>

          <Button label="Take Me Home" onClick={() => navigate('/')} />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
