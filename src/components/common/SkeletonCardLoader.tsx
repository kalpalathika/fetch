import React from 'react';

interface SkeletonCardLoaderProps {
  count: number; // Number of skeletons to display
}

export const SkeletonCardLoader: React.FC<SkeletonCardLoaderProps> = ({ count }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div key = {index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white animate-pulse">
            <div className="w-full h-64 bg-gray-300"></div>
            <div className="px-6 py-4">
            <div className="w-3/4 h-6 bg-gray-300 mb-4"></div>
            <div className="w-1/2 h-4 bg-gray-300 mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-300"></div>
            </div>
            <div className="flex justify-end w-full">
            <button className="bg-transparent border-none cursor-pointer p-4 rounded-lg flex justify-end">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </button>
            </div>
        </div>
      ))}
    </div>
  );
};

