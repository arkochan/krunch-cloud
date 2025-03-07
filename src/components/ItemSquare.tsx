"use client";
import Favourite from "@/components/ui/Favourite";
import RatingRound from "@/components/ui/RatingRound";
import Image from "next/image";
import Add from "./svg/Add";
import { useCartStore } from "@/store/cartStore";
interface ItemSquareProps {
  id: number;
  imageUrl: string;
  favourite: boolean;
  price: number;
  rating: number;
  rateCount: number;
  title: string;
  description: string;
  restnId: number;
}

export default function ItemSquare({
  id,
  imageUrl,
  favourite,
  price,
  rating,
  rateCount,
  title,
  description,
  restnId,
}: ItemSquareProps) {
  // use the cart store to add an item to the cart
  const addItemToCart = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const activeRest = useCartStore((state) => state.activeRest);
  const setActiveRest = useCartStore((state) => state.setActiveRest);
  // interface CartItem {
  //   itemId: number;
  //   name: string;
  //   price: number;
  //   quantity: number;
  // }
  function addItem() {
    if (activeRest === null || activeRest === restnId) {
      addItemToCart({ itemId: id, name: title, price, quantity: 1, image_url: imageUrl })
      console.log("Item added to cart")
    }
    else alert("Must be from same restarant")
  }
  return (
    //using cn from utils take a classname props
    <div onClick={() => addItem()} className="h-56 mr-6 shadow-1 min-w-44 overflow-hidden rounded-2xl">
      <div className="relative">
        <Image
          className="h-40 rounded-xl w-44 shadow-1 object-cover relative"
          src={imageUrl}
          width={300}
          height={300}
          alt=""
        />
        <Favourite favourite={favourite} />
        <div onClick={() => addItem()} className="absolute right-2 top-2 bg-white rounded-full px-2 py-1">
          <Add onClick={() => addItem()} className="" />
        </div>
        <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1">
          <span className="text-orange-FE">$</span>
          <span className="text-xl">{price.toFixed(2)}</span>
        </div>
        <RatingRound
          className="absolute left-2 shadow bottom-0 -my-3 top-auto bg-white"
          rating={rating}
          rateCount={rateCount}
        />
      </div>
      <div className="px-2 py-4">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
