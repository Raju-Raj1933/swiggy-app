import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems,setShowIndex, dummy }) {
  
  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div>
      <div className="lg:w-7/12 md:w-8/12 w-10/12   mx-auto my-5 p-4 bg-[#A2B4CD] shadow-lg ">
        <div
          className="flex justify-between  cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
