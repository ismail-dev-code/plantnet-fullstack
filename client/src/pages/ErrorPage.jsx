import Button from '../components/Shared/Button/Button';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center p-8 rounded-xl">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-lime-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">Oops! Something Went Wrong</h1>
        <p className="mt-3 text-gray-500">
          We couldn’t process your request. Try going back or head to the homepage.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex cursor-pointer items-center text-nowrap justify-center px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-lime-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
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
