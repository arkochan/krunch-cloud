"use client";
import React, { useState } from 'react';

interface MenuCategoriesProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export default function MenuCategories({ categories, onCategorySelect }: MenuCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-32 mb-4">Menu</h2>
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-orange-FE text-white shadow-lg transform scale-105'
                : 'bg-gray-F6 text-gray-97 hover:bg-gray-EF'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
