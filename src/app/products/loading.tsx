export default function ProductsLoading() {
  return (
    <div className="min-h-screen w-full flex mt-12 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:w-1/4">
          <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-3 rounded-lg bg-gray-200 mb-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="lg:w-3/4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-64 mx-auto mb-8"></div>
            
            {[...Array(4)].map((_, i) => (
              <div key={i} className="mb-8">
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="bg-white rounded-lg shadow-lg p-4 h-80">
                      <div className="h-48 bg-gray-300 rounded mb-4"></div>
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded mb-1"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}