// Categories.js
import React from 'react';

// Import your category images
import RetailImage from '../images/RetailImage.jpg';
import EntertainmentImage from '../images/EntertainmentImage.jpg';
import DiningImage from '../images/DiningImage.jpg';
import TravelImage from '../images/TravelImage.jpg';
import MoreImage from '../images/MoreImage.jpeg';
const categoriesData = [
  {
    title: 'Retail',
    image: RetailImage,
  },
  {
    title: 'Entertainment',
    image: EntertainmentImage,
  },
  {
    title: 'Dining',
    image: DiningImage,
  },
  {
    title: 'Travel',
    image: TravelImage,
  },
  {
    title: 'More',
    image: MoreImage,
  },
];

const Categories = () => {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-8">Choose a Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-blue-500"
          >
            <div className="mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-700">Browse and select gift cards in the {category.title} category.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Categories;
