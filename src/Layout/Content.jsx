import React from 'react';
import { FaThumbtack } from 'react-icons/fa';

const Content = () => {
  const cards = [
    { 
      title: "Card 1", 
      description: "This is the first card.", 
      sensorsCount: 5, 
      imageUrl: "https://via.placeholder.com/150", 
    },
    { 
      title: "Card 2", 
      description: "This is the second card.", 
      sensorsCount: 3, 
      imageUrl: "https://via.placeholder.com/150", 
    },
    { 
      title: "Card 3", 
      description: "This is the third card.", 
      sensorsCount: 8, 
      imageUrl: "https://via.placeholder.com/150", 
    },
    { 
      title: "Card 4", 
      description: "This is the fourth card.", 
      sensorsCount: 6, 
      imageUrl: "https://via.placeholder.com/150", 
    },
    { 
      title: "Card 5", 
      description: "This is the fifth card.", 
      sensorsCount: 4, 
      imageUrl: "https://via.placeholder.com/150", 
    },
    { 
      title: "Card 6", 
      description: "This is the sixth card.", 
      sensorsCount: 7, 
      imageUrl: "https://via.placeholder.com/150", 
    },
  ];

  return (
    <div className="flex-1 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{card.title}</h2>
                       <FaThumbtack
 className="text-red-500" />
            </div>
            <img src={card.imageUrl} alt={card.title} className="w-full h-32 object-cover mb-2 rounded-md"/>
            <p className="text-gray-700 mb-2">{card.description}</p>
            <p className="text-gray-500">Sensors count: {card.sensorsCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
