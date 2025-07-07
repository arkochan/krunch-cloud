"use client";
import { useState, useMemo } from "react";
import MenuCategories from "@/components/MenuCategories";
import MenuSearch from "@/components/MenuSearch";
import MenuItemCard from "@/components/MenuItemCard";
import { Item } from "@/types/item";
import { RestaurantDetails } from "@/types/restaurant";

interface RestaurantPageClientProps {
  restaurant: RestaurantDetails;
}

export default function RestaurantPageClient({ restaurant }: RestaurantPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from items
  const categories = useMemo(() => {
    if (!restaurant?.items) return ["All"];
    const uniqueCategories = Array.from(
      new Set(restaurant.items.map((item: Item) => item.category))
    );
    return ["All", ...uniqueCategories];
  }, [restaurant?.items]);

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    if (!restaurant?.items) return [];
    
    return restaurant.items.filter((item: Item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [restaurant?.items, searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <MenuSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search menu items..."
      />

      {/* Menu Categories */}
      <MenuCategories
        categories={categories}
        onCategorySelect={setSelectedCategory}
      />

      {/* Menu Items */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          <>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-32">
                {selectedCategory === "All" ? "All Items" : selectedCategory}
              </h3>
              <span className="text-sm text-gray-97">
                {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {filteredItems.map((item: Item) => (
              <MenuItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.image_url}
                category={item.category}
                restaurantId={restaurant.id}
              />
            ))}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-F6 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-97" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-32 mb-2">No items found</h3>
            <p className="text-gray-97">
              {searchTerm 
                ? `No items match "${searchTerm}"`
                : `No items in ${selectedCategory} category`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
