import React from "react";
import FilterItem from "./FilterItem";
import Image from "next/image";
export default function FilterBar({ className = "" }: { className: string }) {
  const items = [
    {
      id: 1,
      name: "burger",
      image_source: "https://i.ibb.co.com/6sssL3B/burger.png",
    },
    {
      id: 2,
      name: "donat",
      image_source: "https://i.ibb.co.com/FxtcR0V/donat.png",
    },
    {
      id: 3,
      name: "hotdog",
      image_source: "https://i.ibb.co.com/DbCHjkb/hotdog.png",
    },
    {
      id: 4,
      name: "pizza",
      image_source: "https://i.ibb.co.com/KwfjsrK/pizza.png",
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <FilterItem
          key={item.id}
          imageSource={item.image_source}
          itemTitle={item.name}
        />
      ))}
    </div>
  );
}
