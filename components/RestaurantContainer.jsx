import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

// 💡 Shimmer card inline (or you can put in ShimmerCard.jsx)
const ShimmerCard = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse rounded-lg shadow-sm p-3 w-full max-w-[180px] h-[240px]"
        >
          <div className="w-full h-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
      ))}
    </>
  );
};

const RestaurantContainer = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9611159&lng=77.6362214&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      let restaurantList = [];

      for (const card of json?.data?.cards || []) {
        const possibleList = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (possibleList) {
          restaurantList = possibleList;
          break;
        }
      }

      if (restaurantList.length > 0) {
        setAllRestaurants(restaurantList);
      } else {
        setAllRestaurants([]);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleFilter = () => {
    setShowTopRated((prev) => !prev);
  };

  const filteredRestaurants = showTopRated
    ? allRestaurants.filter((r) => parseFloat(r.info.avgRating) >= 4.5)
    : allRestaurants;

  return (
    <div>
      <button
        className="mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        onClick={handleFilter}
      >
        {showTopRated ? 'Show All' : 'Show Top Rated'}
      </button>

      {/* 🔁 Always use flex container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {loading ? (
          <ShimmerCard />
        ) : filteredRestaurants.length === 0 ? (
          <p className="text-red-500 text-lg">No restaurants found.</p>
        ) : (
          filteredRestaurants.map((res, idx) => (
            <RestaurantCard key={idx} {...res.info} />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
