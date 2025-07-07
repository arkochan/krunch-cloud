"use client";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Add from "./svg/Add";

interface MenuItemCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  restaurantId: number;
}

export default function MenuItemCard({
  id,
  name,
  description,
  price,
  imageUrl,
  category,
  restaurantId,
}: MenuItemCardProps) {
  const addItemToCart = useCartStore((state) => state.addItem);
  const activeRest = useCartStore((state) => state.activeRest);
  const setActiveRest = useCartStore((state) => state.setActiveRest);

  function addItem() {
    if (activeRest === null) {
      setActiveRest(restaurantId);
    }
    
    if (activeRest === null || activeRest === restaurantId) {
      addItemToCart({ 
        itemId: id, 
        name, 
        price, 
        quantity: 1, 
        image_url: imageUrl 
      });
    } else {
      alert("Must be from same restaurant");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-1 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex">
        {/* Image Section */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
          
          {/* Add Button */}
          <button
            onClick={addItem}
            className="absolute bottom-2 right-2 bg-orange-FE text-white rounded-full p-2 shadow-lg hover:bg-orange-F5 transition-colors duration-200 transform hover:scale-110"
          >
            <Add className="w-4 h-4" onClick={addItem} />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-32 leading-tight">{name}</h3>
              <span className="text-lg font-bold text-orange-FE ml-2">${price.toFixed(2)}</span>
            </div>
            
            <p className="text-sm text-gray-97 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Category Badge */}
          <div className="mt-3">
            <span className="inline-block bg-orange-FF text-orange-FE text-xs font-medium px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
