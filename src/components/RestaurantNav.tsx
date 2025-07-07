"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface RestaurantNavProps {
  title?: string;
}

export default function RestaurantNav({ title = "Restaurant" }: RestaurantNavProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-EF">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-F6 hover:bg-gray-EF transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-gray-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-32 truncate mx-4 flex-1 text-center">
          {title}
        </h1>

        {/* Share Button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-F6 hover:bg-gray-EF transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
