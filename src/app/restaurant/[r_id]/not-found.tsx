import RestaurantNav from "@/components/RestaurantNav";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-FC">
      <RestaurantNav title="Restaurant Not Found" />
      
      <div className="max-w-lg mx-auto h-full px-6 w-full">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-F6 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-97" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-32 mb-2">Restaurant Not Found</h1>
            <p className="text-gray-97 mb-6">
              The restaurant you&apos;re looking for doesn&apos;t exist or may have been removed.
            </p>

            {/* Action Button */}
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-orange-FE text-white font-medium rounded-xl hover:bg-orange-F5 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
