import React from 'react';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
interface CartItemProps {
  className?: string;
  imageUrl: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartItem({
  className,
  imageUrl,
  title,
  description,
  quantity,
  price,
  onIncrease,
  onDecrease,
}: CartItemProps) {
  return (
    <div className={`m-4 p-4 shadow-1 rounded-xl h-32 flex flex-row items-center justify-between ${className}`}>
      <div className="flex">
        <div>
          <Image
            src={imageUrl}
            height={100}
            width={100}
            alt={title}
            className="border rounded-lg shadow-1"
          />
        </div>
        <div className='ml-4'>
          <div className='text-orange-FE font-bold'>{title}</div>
          <div className='line-clamp-3 text-gray-8A max-w-32'>
            {description}
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <button onClick={onDecrease} className="bg-orange-F5 rounded-lg px-2 py-0 text-white font-extrabold">-</button>
        <span className="text-red-600">{quantity}</span>
        <button onClick={onIncrease} className="bg-orange-F5 rounded-lg px-2 py-0 text-white font-extrabold">+</button>
      </div>
      <div className="">{price.toFixed(2)}</div>
    </div>
  );
}
