"use client";

import RestaurantNav from "@/components/RestaurantNav";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Restaurant page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-FC">
      <RestaurantNav title="Something went wrong" />
      
      <div className="max-w-lg mx-auto h-full px-6 w-full">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-6 bg-orange-FF rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-FE" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-32 mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-97 mb-6">
              We encountered an error while loading the restaurant. Please try again.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center px-6 py-3 bg-orange-FE text-white font-medium rounded-xl hover:bg-orange-F5 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
              
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gray-F6 text-gray-32 font-medium rounded-xl hover:bg-gray-EF transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
