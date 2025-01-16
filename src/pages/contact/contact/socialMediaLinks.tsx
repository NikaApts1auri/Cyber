import React from "react";
import { Link } from "react-router-dom";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      <Link
        to="https://facebook.com"
        target="_blank"
        className="text-blue-600 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"  
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M22 12c0-5.523-4.478-10-10-10S2 6.477 2 12c0 4.958 3.657 9.077 8.438 9.876V15.5h-2.53v-3h2.53v-2.23c0-2.483 1.489-3.88 3.841-3.88 1.116 0 2.357.083 2.66.12v2.94h-1.78c-1.39 0-1.72.82-1.72 1.69v2.06h3.44l-.5 3h-2.94v6.38c4.78-.8 8.42-4.92 8.42-9.38z"
          />
        </svg>
      </Link>
      <Link
        to="https://instagram.com"
        target="_blank"
        className="text-purple-600 hover:text-purple-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"  
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.5 0C3.357 0 0 3.357 0 7.5S3.357 15 7.5 15 15 11.643 15 7.5 11.643 0 7.5 0zm0 12.075c-2.536 0-4.575-2.038-4.575-4.575 0-2.536 2.039-4.575 4.575-4.575 2.536 0 4.575 2.039 4.575 4.575 0 2.537-2.039 4.575-4.575 4.575zM7.5 1.85c1.002 0 1.85.848 1.85 1.85 0 1.002-.848 1.85-1.85 1.85-1.002 0-1.85-.848-1.85-1.85 0-1.002.848-1.85 1.85-1.85z"
          />
        </svg>
      </Link>
      <Link
        to="https://twitter.com"
        target="_blank"
        className="text-blue-400 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"  
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.643 4.937c-.882.39-1.83.653-2.83.773 1.017-.608 1.796-1.574 2.163-2.724-.951.56-2.003.978-3.127 1.2-.89-.948-2.16-1.54-3.567-1.54-2.71 0-4.91 2.194-4.91 4.91 0 .385.045.76.127 1.118-4.09-.205-7.72-2.16-10.15-5.14-.424.728-.666 1.57-.666 2.48 0 1.71.87 3.22 2.18 4.1-.804-.026-1.566-.246-2.23-.616-.03 2.2 1.56 4.27 3.89 4.72-.407.11-.835.17-1.268.17-.31 0-.615-.03-.916-.085.62 1.93 2.44 3.33 4.59 3.37-1.68 1.31-3.79 2.1-6.07 2.1-.394 0-.785-.023-1.17-.067 2.17 1.39 4.73 2.21 7.48 2.21 8.98 0 13.91-7.44 13.91-13.91 0-.21-.005-.42-.015-.62.951-.689 1.78-1.55 2.43-2.53z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
