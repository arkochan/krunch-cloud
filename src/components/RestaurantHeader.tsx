"use client";
import React from 'react';
import Image from 'next/image';
import RatingRound from './ui/RatingRound';
import LocationSGV from './svg/Location';
import Heart from './svg/Heart';

interface RestaurantHeaderProps {
  name: string;
  address: string;
  imageUrl?: string;
  rating?: number;
  rateCount?: number;
  deliveryTime?: string;
  deliveryFee?: number;
}

export default function RestaurantHeader({ 
  name, 
  address, 
  imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
  rating = 4.5,
  rateCount = 120,
  deliveryTime = "25-30 min",
  deliveryFee = 2.99
}: RestaurantHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Back Button */}
        <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg text-orange-FE">
          <Heart favourite={false} />
        </button>
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <RatingRound 
            rating={rating} 
            rateCount={rateCount} 
            className="bg-white/95 backdrop-blur-sm shadow-lg border-0" 
          />
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="mt-6 space-y-4">
        {/* Name and Address */}
        <div>
          <h1 className="text-3xl font-bold text-gray-32 mb-2">{name}</h1>
          <div className="flex items-center space-x-2 text-gray-97">
            <LocationSGV />
            <span className="text-sm">{address}</span>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="flex items-center justify-between bg-gray-F6 rounded-xl p-4">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-sm text-gray-97">Delivery Time</div>
              <div className="font-semibold text-gray-32">{deliveryTime}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-97">Delivery Fee</div>
              <div className="font-semibold text-orange-FE">${deliveryFee}</div>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="bg-teal text-white px-3 py-1 rounded-full text-xs font-medium">
            Open Now
          </div>
        </div>
      </div>
    </div>
  );
}
