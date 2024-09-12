import React from "react";
import FilterItem from "./FilterItem";
import Image from "next/image";
export default function FilterBar({ className = "" }: { className: string }) {
  const items = [
    {
      id: 1,
      name: "burger",
      image_source: "https://i.ibb.co.com/6sssL3B/burger.png",
      selected: true,
    },
    {
      id: 2,
      name: "donat",
      image_source: "https://i.ibb.co.com/FxtcR0V/donat.png",
      selected: false,
    },
    {
      id: 3,
      name: "hotdog",
      image_source: "https://i.ibb.co.com/DbCHjkb/hotdog.png",
      selected: false,
    },
    {
      id: 4,
      name: "pizza",
      image_source: "https://i.ibb.co.com/KwfjsrK/pizza.png",
      selected: false,
    },
  ];
  return (
    <div className="flex flex-row mt-7 space-x-4">
      {items.map((item) => (
        <FilterItem
          key={item.id}
          imageSource={item.image_source}
          itemTitle={item.name}
          selected={item.selected}
          className=""
        />
      ))}
    </div>
  );
}
