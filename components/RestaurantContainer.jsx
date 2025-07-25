import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurants from '../src/Utils/mockData';

// ...reuse the `restaurants` array as before

const RestaurantContainer = () => {
  const [showTopRated, setShowTopRated] = useState(false);

  const handleFilter = () => {
    setShowTopRated((prev) => !prev);
  };

  // Define top rated as rating >= 4.5, change as needed
  const filteredRestaurants = showTopRated
    ? restaurants.filter((r) => r.rating >= 4.5)
    : restaurants;

  return (
    <div>
      <button
        className={`mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition`}
        onClick={handleFilter}
      >
        {showTopRated ? 'Show All' : 'Show Top Rated'}
      </button>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredRestaurants.map((res, idx) => (
          <RestaurantCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
