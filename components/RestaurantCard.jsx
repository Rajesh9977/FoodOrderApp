import React from 'react';

const RestaurantCard = ({ name, cuisine, location, rating, time, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 w-full max-w-[180px] hover:shadow-md transition text-sm">
      {/* Image section */}
      {image && (
        <img
          src={image}
          alt={`${name} thumbnail`}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
      )}

      <div className="font-semibold text-gray-800 truncate">{name}</div>
      <div className="text-gray-500 text-xs truncate">{cuisine}</div>
      <div className="text-gray-500 text-xs truncate">{location}</div>

      <div className="flex justify-between items-center mt-2 text-xs">
        <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
          ⭐ {rating}
        </span>
        <span>{time} min</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
