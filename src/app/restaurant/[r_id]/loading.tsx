import RestaurantNav from "@/components/RestaurantNav";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-FC">
      <RestaurantNav />
      
      <div className="max-w-lg mx-auto h-full px-6 w-full">
        <div className="space-y-6 py-6 pb-24">
          {/* Restaurant Header Skeleton */}
          <div className="space-y-4">
            {/* Hero Image Skeleton */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-F6 animate-pulse" />
            
            {/* Info Skeleton */}
            <div className="space-y-4">
              <div>
                <div className="h-8 bg-gray-F6 rounded-lg w-3/4 mb-2 animate-pulse" />
                <div className="h-4 bg-gray-F6 rounded w-1/2 animate-pulse" />
              </div>
              
              <div className="bg-gray-F6 rounded-xl p-4 animate-pulse">
                <div className="h-16 bg-gray-EF rounded-lg" />
              </div>
            </div>
          </div>

          {/* Search Bar Skeleton */}
          <div className="h-12 bg-gray-F6 rounded-xl animate-pulse" />

          {/* Categories Skeleton */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-F6 rounded w-16 animate-pulse" />
            <div className="flex space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-gray-F6 rounded-full w-24 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Menu Items Skeleton */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-6 bg-gray-F6 rounded w-24 animate-pulse" />
              <div className="h-4 bg-gray-F6 rounded w-16 animate-pulse" />
            </div>
            
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-F6 rounded-2xl h-32 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
