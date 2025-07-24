import React from 'react';
import RestaurantCard from './RestaurantCard';

const restaurants = [
  {
    name: 'Punjabi Tadka',
    cuisine: 'North Indian, Chinese',
    location: 'Sector 44, Noida',
    rating: 4.3,
    time: 30,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
  },
  {
    name: 'Sushi World',
    cuisine: 'Japanese',
    location: 'Connaught Place, Delhi',
    rating: 4.6,
    time: 40,
    image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7'

  },
  {
    name: 'Pizza Villa',
    cuisine: 'Italian',
    location: 'Bandra, Mumbai',
    rating: 4.1,
    time: 28,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'

  },
  {
    name: 'Bombay Biryani',
    cuisine: 'Hyderabadi',
    location: 'Gachibowli, Hyderabad',
    rating: 3.9,
    time: 35,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
  },
  {
    name: 'Wok Express',
    cuisine: 'Chinese, Thai',
    location: 'Indiranagar, Bangalore',
    rating: 4.5,
    time: 32,
    image: 'https://images.unsplash.com/photo-1429554429301-01bcd64c6eab'
  },
  {
    name: 'Grill House',
    cuisine: 'BBQ, Continental',
    location: 'Sector 62, Noida',
    rating: 4.2,
    time: 36,
    image: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2'
  },
  {
    name: 'Spice Route',
    cuisine: 'South Indian',
    location: 'Ameerpet, Hyderabad',
    rating: 4.0,
    time: 25,
    image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7'
  },
  {
    name: 'Burger Corner',
    cuisine: 'Fast Food',
    location: 'MG Road, Pune',
    rating: 3.8,
    time: 18,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    name: 'Tandoori Nights',
    cuisine: 'North Indian',
    location: 'Salt Lake, Kolkata',
    rating: 4.4,
    time: 38,
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a'
  },
  {
    name: 'Green Bowl',
    cuisine: 'Healthy, Salads',
    location: 'Koramangala, Bangalore',
    rating: 4.7,
    time: 22,
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862'
  },
  {
    name: 'Wok Express',
    cuisine: 'Chinese, Thai',
    location: 'Indiranagar, Bangalore',
    rating: 4.5,
    time: 32,
    image: 'https://images.unsplash.com/photo-1429554429301-01bcd64c6eab'
  },
  {
    name: 'Grill House',
    cuisine: 'BBQ, Continental',
    location: 'Sector 62, Noida',
    rating: 4.2,
    time: 36,
    image: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2'
  },
  {
    name: 'Spice Route',
    cuisine: 'South Indian',
    location: 'Ameerpet, Hyderabad',
    rating: 4.0,
    time: 25,
    image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7'
  },
  {
    name: 'Burger Corner',
    cuisine: 'Fast Food',
    location: 'MG Road, Pune',
    rating: 3.8,
    time: 18,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    name: 'Tandoori Nights',
    cuisine: 'North Indian',
    location: 'Salt Lake, Kolkata',
    rating: 4.4,
    time: 38,
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a'
  },
  {
    name: 'Green Bowl',
    cuisine: 'Healthy, Salads',
    location: 'Koramangala, Bangalore',
    rating: 4.7,
    time: 22,
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862'
  }
  
  // You can add more as needed
];

const RestaurantContainer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {restaurants.map((res, idx) => (
        <RestaurantCard key={idx} {...res} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
