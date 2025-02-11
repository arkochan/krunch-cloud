import React from 'react';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import CartItem from './CartItem';
export default function Cart({ className }: { className?: string }) {
  return (<div className={cn("", className)} >
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />


  </div >
  );
}
