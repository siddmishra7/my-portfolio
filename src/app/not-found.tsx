'use client'

import { FC } from 'react';
import Link from 'next/link';
const ErrorPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl p-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse">Oops! Something Went Wrong</h1>
        <p className="mt-2 text-xl text-gray-400">
          Sorry, an unexpected error occurred on the server.
        </p>
        <Link legacyBehavior href="/">
          <a className="mt-6 text-xl text-blue-500 hover:text-blue-700">
            Go back to the homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
