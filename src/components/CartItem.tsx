import React from 'react';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
export default function CartItem({ className }: { className?: string }) {
  return <div className="m-4 p-4 border border-gray-32 h-32 flex flex-row items-center justify-between">

    <div className="flex">
      <div>
        <Image
          src="https://i.ibb.co.com/6g2M0q1/food-image.png"
          height={100}
          width={100}
          alt={"food"}
          className="border rounded-lg shadow-1 "

        />
      </div>
      <div className='ml-4'>
        <div className='text-orange-FE font-bold'> Item tittle</div>
        <div className='line-clamp-3 text-gray-8A  max-w-32'>
          OhioOhio Ohio OhioOhio Open
          OhioOhio
          OhioOhio OhioOhio Ohio
          OhioOhio
          OhioOhio
          OhioOhio
        </div>
      </div>
    </div>
    <div className="flex flex-row space-x-2">
      <button className="bg-orange-F5 rounded-lg px-2 py-0 text-white font-extrabold">-</button>
      <span className="text-red-600">1</span>
      <button className="bg-orange-F5 rounded-lg px-2 py-0 text-white font-extrabold">+</button>
    </div>
    <div className="">Price</div>
  </div>
}
